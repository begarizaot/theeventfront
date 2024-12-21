import { saveAs } from "file-saver";
import { useContext } from "react";

import { LoadingContext } from "../../../../../../context";

import { getDowloandOrder } from "../../../../../../store/slices";

import { cleanedBase64Data } from "../utils/cleanedBase64Data";

export const useMessageTickets = ({ idOrder, onHidden }: any) => {
  const { showLoading } = useContext(LoadingContext);

  const onDownloadOrdersTickets = async () => {
    showLoading(true);
    try {
      const data = await getDowloandOrder(idOrder);
      const resDown: any = await cleanedBase64Data(data.data);
      showLoading(false);
      saveAs(resDown, `order${idOrder}.pdf`);
      onHidden();
    } catch (error) {
      showLoading(false);
    }
  };

  return { onDownloadOrdersTickets };
};
