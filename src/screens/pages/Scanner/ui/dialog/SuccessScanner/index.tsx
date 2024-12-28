import "./styles.scss";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

interface SuccessScannerProps {
  error?: any;
  data: any;
  visible: any;
  onHide: () => void;
  onContinue?: () => void;
}

export const SuccessScanner = ({
  onHide,
  onContinue,
  visible,
  error,
  data,
}: SuccessScannerProps) => {
  return (
    <Dialog
      className="SuccessScannerDialog w-12 sm:w-11"
      visible={visible}
      onHide={onHide}
      showHeader={false}
      blockScroll={true}
    >
      <div className="flex py-3 flex-column bgBody border-round text-white px-4">
        <div className="col-12 text-right">
          <i
            className="pi pi-times text-xl cursor-pointer"
            onClick={onHide}
          ></i>
        </div>
        <div className="col-12 py-6 sm:py-8">
          <div className="grid">
            <div className="col-12 text-center">
              <i
                className={`pi pi-${
                  !error ? "check text-green-900" : "times text-red-900"
                } text-5xl`}
              ></i>
            </div>
            <div className="col-12 text-center my-2">
              <h2 className="m-0 text-2xl sm:text-3xl">
                {!error ? "Confirmed" : "Rejected"} Ticket
              </h2>
            </div>
            {!error ? (
              <div className="col-12 border-bottom-1 bgBorder">
                <p className="m-0 text-sm text-white-alpha-50">
                  ID {data?.id} - {data?.name}
                </p>
                <div className="flex justify-content-between mt-2 text-sm sm:text-base">
                  <p className="m-0">
                    {data?.eventName} - {data?.ticketType}
                  </p>
                </div>
              </div>
            ) : (
              <div className="col-12 text-center">
                <p className="m-0 text-sm text-white-alpha-50">{error}</p>
              </div>
            )}
            <div className="col-12 mt-3 sm:mt-5">
              <Button
                label="Continue"
                type="button"
                outlined
                className="w-full border-round-3xl outlinedBtn text-sm"
                onClick={onContinue}
              />
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
