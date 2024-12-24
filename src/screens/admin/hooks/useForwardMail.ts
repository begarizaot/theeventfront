import { useContext, useRef } from "react";
import { LoadingContext } from "../../../context";
import { getForwardMailOrder } from "../../../store/slices";

export const useForwardMail = () => {
  const { showLoading } = useContext(LoadingContext);

  const toastErrEmail = useRef<any>(null);

  const onForwardMail = async (ev: any) => {
    showLoading(true);
    try {
      await getForwardMailOrder(ev);
      showLoading(false);
      toastErrEmail.current.show({
        severity: "success",
        summary: "Success",
        detail: "Mail sent",
        life: 3000,
      });
    } catch (error) {
      showLoading(false);
      toastErrEmail.current.show({
        severity: "error",
        summary: "Error",
        detail: error,
        life: 3000,
      });
    }
  };
  return { onForwardMail, toastErrEmail };
};
