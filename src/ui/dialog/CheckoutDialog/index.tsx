import "./styles.scss";
import { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { InfoEvent } from "./ui";
import { CheckoutContext } from "../../../context";
import { CheckoutTickts, MessageTickets, SelectTickets } from "./components";
import { environment } from "../../../environments/environment";

import { Dialog } from "primereact/dialog";
import { Elements } from "@stripe/react-stripe-js";

// Cargar Stripe con tu clave pública
const stripePromise = loadStripe(environment.STRIPEKEY);

interface CheckoutDialogProps {
  visible: boolean;
  showVisible: () => void;
}

export const CheckoutDialog = ({
  showVisible,
  visible,
}: CheckoutDialogProps) => {
  const { eventData } = useContext(CheckoutContext);

  const [isCheckout, setIsCheckout] = useState(false);
  const [isMessage, setIsMessage] = useState<any>(false);
  const [ticketsSelect, setTicketsSelect] = useState([]);

  const showModal = () => {
    setIsCheckout(false);
    setIsMessage(false);
    showVisible();
  };

  const showSelectOrCheck = () => {
    return (
      <Elements stripe={stripePromise}>
        {isCheckout ? (
          <CheckoutTickts
            data={eventData}
            tickets={ticketsSelect}
            showMessage={(ev) => setIsMessage(ev)}
          />
        ) : (
          <SelectTickets
            data={eventData}
            onCheckout={(ev: any) => {
              setTicketsSelect(ev);
              setIsCheckout(true);
            }}
          />
        )}
      </Elements>
    );
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
            {!isMessage && (
              <div className="col-12 pb-0">
                <InfoEvent data={eventData} />
              </div>
            )}
          </div>
        </div>
        {isMessage ? (
          <MessageTickets idOrder={isMessage} />
        ) : (
          showSelectOrCheck()
        )}
      </div>
    </Dialog>
  );
};
