import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getEventScanner,
  getEventScannerCreate,
} from "../../../../store/slices";
import { LoadingContext } from "../../../../context";

export const useScanner = () => {
  const { showLoading, hiddenLoading } = useContext(LoadingContext);

  const res: any = useParams();
  const navigate = useNavigate();

  const [showScanner, setShowScanner] = useState(false);
  const [dataScanner, setDataScanner] = useState<any>({});
  const [errorScanner, setErrorScanner] = useState("");

  const handleScanner = async (data: any) => {
    showLoading(true);
    setShowScanner(data);
    getEventScanner(res.idEvent, data)
      .then((res) => {
        setDataScanner(res);
      })
      .catch((error) => {
        setErrorScanner(error);
      })
      .finally(() => {
        hiddenLoading();
      });
  };

  const onHiddenScanner = () => {
    setDataScanner({});
    setErrorScanner("");
    setShowScanner(false);
  };

  const onCancel = () => {
    navigate(-1);
  };

  const onContinue = async () => {
    if (errorScanner) {
      onHiddenScanner();
      return;
    }

    showLoading(true);
    getEventScannerCreate(res.idEvent, showScanner)
      .then(() => {
        onHiddenScanner();
      })
      .finally(() => {
        hiddenLoading();
      });
  };

  return {
    dataScanner,
    errorScanner,
    showScanner,
    handleScanner,
    onCancel,
    onHiddenScanner,
    onContinue,
  };
};
