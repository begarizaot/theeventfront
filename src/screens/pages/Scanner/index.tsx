import { Scanner } from "@yudiel/react-qr-scanner";

import { useScanner } from "./useScanner";

import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export const ScannerPage = () => {
  const navigate = useNavigate();
  const { dataScanner, handleScanner } = useScanner();

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="flex pt-8 overflow-hidden">
      <div className="grid text-white text-center">
        <div className="col-12 flex flex-column justify-content-end">
          <h2 className="m-0">Scan Ticket below</h2>
          <p className="m-0">
            Locate the barcode or QR code within the white box.
          </p>
        </div>
        <div
          className={`col-12 ${dataScanner.length > 0 ? "h-30rem mb-8" : ""}`}
        >
          <Scanner
            onScan={(result) => handleScanner(result[0].rawValue)}
            paused={dataScanner.length > 0}
          />
        </div>
        <div className="col-12 px-4">
          <Button
            label="Cancel"
            type="button"
            outlined
            className="w-full sm:w-8 border-round-3xl outlinedBtn text-sm"
            onClick={handleReturn}
          />
        </div>
      </div>
    </div>
  );
};
