import "./styles.scss";

import QRCode from "react-qr-code";

import { Dialog } from "primereact/dialog";
import { TicketQrDetailDialog } from "../TicketQrDetailDialog";
import { useState } from "react";

interface TicketQrDialogProps {
  data: any[];
  visible: boolean;
  showVisible: () => void;
}

export const TicketQrDialog = ({
  data,
  showVisible,
  visible,
}: TicketQrDialogProps) => {
  const [isDetail, setIsDetail] = useState<any>(false);

  return (
    <>
      <TicketQrDetailDialog
        data={isDetail}
        visible={isDetail}
        showVisible={() => setIsDetail(false)}
      />
      <Dialog
        className="TicketQrDialog"
        visible={visible}
        onHide={showVisible}
        blockScroll={true}
        dismissableMask={true}
      >
        <div className="flex align-items-center flex-wrap justify-content-center gap-2">
          {data.map((item) => (
            <div className="text-center bgBody p-1 border-round" key={item?.id}>
              <p className="m-0 text-white">id: {item.id_ticket}</p>
              <QRCode
                value={item.id_ticket}
                size={130}
                onClick={() => setIsDetail(item.id_ticket)}
              />
            </div>
          ))}
        </div>
      </Dialog>
    </>
  );
};
