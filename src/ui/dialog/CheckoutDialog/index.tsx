import "./styles.scss";

import { InfoEvent } from "./ui";
import { CheckoutTickts, SelectTickets } from "./components";

import { Dialog } from "primereact/dialog";
import { useCheckout } from "./useCheckout";

interface CheckoutDialogProps {
  visible: boolean;
  showVisible: () => void;
}

export const CheckoutDialog = ({
  showVisible,
  visible,
}: CheckoutDialogProps) => {
  const { isCheckout, setIsCheckout } = useCheckout();

  const showModal = () => {
    setIsCheckout(false);
    showVisible();
  };

  return (
    <Dialog
      className="checkoutDialog h-full w-full min-h-full xl:w-10 sm:p-2 lg:p-3"
      visible={visible}
      onHide={showModal}
      showHeader={false}
      blockScroll={true}
    >
      <div className="grid text-white pt-3 h-full align-content-start">
        <div className="col-12 pb-0 sticky top-0 bgBody">
          <div className="grid">
            <div className="col-12 text-right pb-0">
              <span
                className="pi pi-times text-xl cursor-pointer"
                onClick={showModal}
              ></span>
            </div>
            <div className="col-12 pb-0">
              <InfoEvent />
            </div>
          </div>
        </div>
        {isCheckout ? (
          <CheckoutTickts />
        ) : (
          <SelectTickets onCheckout={() => setIsCheckout(true)} />
        )}
      </div>
    </Dialog>
  );
};
