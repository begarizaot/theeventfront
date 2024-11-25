import "./styles.scss";

import QRCode from "react-qr-code";

import { Dialog } from "primereact/dialog";

interface TicketQrDetailDialogProps {
  data: any;
  visible: boolean;
  showVisible: () => void;
}

export const TicketQrDetailDialog = ({
  data,
  showVisible,
  visible,
}: TicketQrDetailDialogProps) => {
  return (
    <Dialog
      className="TicketQrDetailDialog"
      visible={visible}
      onHide={showVisible}
      blockScroll={true}
      dismissableMask={true}
    >
      <div className="flex align-items-center flex-wrap justify-content-center gap-2">
        <QRCode value={data} size={280} />
      </div>
    </Dialog>
  );
};
