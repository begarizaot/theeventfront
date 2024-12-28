import { Scanner } from "@yudiel/react-qr-scanner";

import { useScanner } from "./hooks/useScanner";

import { Button } from "primereact/button";
import { SuccessScanner } from "./ui";

export const ScannerPage = () => {
  const {
    dataScanner,
    errorScanner,
    showScanner,
    handleScanner,
    onCancel,
    onHiddenScanner,
    onContinue,
  } = useScanner();

  return (
    <>
      <SuccessScanner
        data={dataScanner}
        visible={dataScanner?.id || errorScanner}
        onHide={onHiddenScanner}
        error={errorScanner}
        onContinue={onContinue}
      />
      <div className="flex pt-8 overflow-hidden">
        <div className="grid text-white text-center">
          <div className="col-12 flex flex-column justify-content-end">
            <h2 className="m-0">Scan Ticket below</h2>
            <p className="m-0">
              Locate the barcode or QR code within the white box.
            </p>
          </div>
          <div className={`col-12 ${showScanner ? "h-30rem mb-8" : ""}`}>
            <Scanner
              onScan={(result) => handleScanner(result[0].rawValue)}
              paused={showScanner}
            />
          </div>
          <div className="col-12 px-4">
            <Button
              label="Cancel"
              type="button"
              outlined
              className="w-full sm:w-8 border-round-3xl outlinedBtn text-sm"
              onClick={onCancel}
            />
          </div>
        </div>
      </div>
    </>
  );
};
