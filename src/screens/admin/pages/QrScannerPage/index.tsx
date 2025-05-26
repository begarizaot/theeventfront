import { Scanner } from "@yudiel/react-qr-scanner";
import { useQrScanner } from "./useQrScanner";
import { Spin } from "antd";
import { InfoScannerQrMod } from "./Modal";

export const QrScannerPage = () => {
  const {
    isLoading,
    orderData,
    stopScanner,
    contextHolder,
    eventDate,
    onContinueOrder,
    onScannerOrder,
    onClearOrder,
  } = useQrScanner();

  return (
    <>
      {contextHolder}
      <Spin
        spinning={isLoading}
        fullscreen
        size="large"
        rootClassName="z-[10000]!"
      />
      <InfoScannerQrMod
        isOpen={orderData.id}
        data={orderData}
        eventData={eventDate}
        onClose={onClearOrder}
        onContinue={onContinueOrder}
      />
      <div className="px-4 sm:px-6 py-3 grid gap-3">
        <div className="col-span-1 text-center">
          <h1 className="text-3xl font-bold bebasNeue">Scan Ticket below</h1>
          <p className="text-sm">
            Locate the barcode or QR code within the white box.
          </p>
        </div>
        <div className="col-span-1">
          <Scanner
            onScan={(result) => onScannerOrder(result[0].rawValue)}
            paused={stopScanner}
          />
        </div>
      </div>
    </>
  );
};
