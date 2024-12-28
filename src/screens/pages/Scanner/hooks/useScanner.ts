import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getEventScanner,
  getEventScannerCreate,
} from "../../../../store/slices";
import { LoadingContext } from "../../../../context";

export const useScanner = () => {
  const { showLoading } = useContext(LoadingContext);

  const res: any = useParams();
  const navigate = useNavigate();

  const [showScanner, setShowScanner] = useState(false);
  const [dataScanner, setDataScanner] = useState<any>({});
  const [errorScanner, setErrorScanner] = useState("");

  const handleScanner = async (data: any) => {
    showLoading(true);
    setShowScanner(data);
    try {
      const dataRes = await getEventScanner(res.idEvent, data);
      setDataScanner(dataRes);
      showLoading(false);
    } catch (error: any) {
      showLoading(false);
      setErrorScanner(error);
    }
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
    try {
      await getEventScannerCreate(res.idEvent, showScanner);
      showLoading(false);
      onHiddenScanner();
    } catch (error) {
      showLoading(false);
    }
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
