import { useContext, useRef } from "react";
import { LoadingContext } from "../../../context";
import { getForwardMailOrder } from "../../../store/slices";

export const useForwardMail = () => {
  const { showLoading, hiddenLoading } = useContext(LoadingContext);

  const toastErrEmail = useRef<any>(null);

  const onForwardMail = async (ev: any) => {
    showLoading(true);
    getForwardMailOrder(ev)
      .then(() => {
        toastErrEmail.current.show({
          severity: "success",
          summary: "Success",
          detail: "Mail sent",
          life: 3000,
        });
      })
      .catch((error) => {
        toastErrEmail.current.show({
          severity: "error",
          summary: "Error",
          detail: error,
          life: 3000,
        });
      })
      .finally(() => {
        hiddenLoading();
      });
  };
  return { onForwardMail, toastErrEmail };
};
