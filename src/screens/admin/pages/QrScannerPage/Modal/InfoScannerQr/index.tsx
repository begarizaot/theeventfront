import { Button, Modal, Popconfirm } from "antd";

interface InfoScannerQrProps {
  isOpen: boolean;
  data?: any;
  eventData?: any;
  onClose: () => void;
  onContinue?: () => void;
}

export const InfoScannerQrMod = ({
  isOpen,
  data,
  eventData,
  onClose,
  onContinue,
}: InfoScannerQrProps) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      centered
      footer={false}
      maskClosable={false}
      classNames={{
        content: "w-full bgModal bg-cover text-white rounded-2xl! border!",
        mask: "backdrop-blur-xs",
      }}
      closeIcon={
        <span className="pi pi-times bg-white text-black p-1 text-[9px] rounded-full"></span>
      }
    >
      <div className="grid">
        <div className="col-span-1 flex flex-col items-center text-center gap-2">
          <img
            src={eventData?.url_image ?? ""}
            alt=""
            className="h-35 rounded-sm"
          />
          <h1 className="bebasNeue text-lg">{eventData?.name}</h1>
          <h1 className="bebasNeue text-4xl">
            {data?.event_ticket_id?.title ?? ""}
          </h1>
          {data?.table && (
            <h1 className="bebasNeue text-2xl">Table: {data?.table}</h1>
          )}
        </div>
        <div className="col-span-1 mt-3">
          <Popconfirm
            title="Confirm Scanned Ticket"
            description="Are you sure you want to confirm this scanned ticket?"
            onConfirm={onContinue}
            okText="Yes"
            cancelText="No"
          >
            <Button className="w-full rounded-3xl! uppercase btnStyle">
              <span className="font-bold text-xs">Continue</span>
            </Button>
          </Popconfirm>
        </div>
      </div>
    </Modal>
  );
};
