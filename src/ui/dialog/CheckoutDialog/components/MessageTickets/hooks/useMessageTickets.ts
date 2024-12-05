import { saveAs } from "file-saver";

import { getDowloandOrder } from "../../../../../../store/slices/orders";
import { cleanedBase64Data } from "../utils/cleanedBase64Data";

export const useMessageTickets = (idOrder: any) => {
  const onDownloadOrdersTickets = async () => {
    try {
      const data = await getDowloandOrder(idOrder);
      const resDown: any = await cleanedBase64Data(data.data);
      saveAs(resDown, `order${idOrder}.pdf`);
    } catch (error) {}
  };

  return { onDownloadOrdersTickets };
};
