import "./styles.scss";
import {
  InformationsComp,
  OrderDataComp,
  PaymentMethodsComp,
} from "./components";
import { useBookTickets } from "./useBookTickets";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// Cargar Stripe con tu clave pública
const stripePromise = loadStripe(import.meta.env.VITE_STRIPEKEY);

export const BookTicketsPage = () => {
  const { checkoutInit, listRefundable, onCheckoutInit } = useBookTickets();

  return (
    <Elements stripe={stripePromise}>
      <div
        className={`pt-12 w-full mx-auto max-w-[80rem] px-4 sm:px-6 ${
          checkoutInit == 1 ? "lg:h-screen " : "h-screen"
        }`}
      >
        <div className="flex gap-4 items-center">
          <h1 className="text-xl sm:text-3xl uppercase font-bold bebasNeue">
            Checkout
          </h1>
          <div className="flex gap-3">
            {[1, 2, 3].map((item) => (
              <span
                key={item}
                className={`h-2 w-14 rounded-2xl ${
                  checkoutInit == item ? "bg-white" : "bg-white/20"
                }`}
              ></span>
            ))}
          </div>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-3 mt-4 lg:h-[90%]`}
        >
          <div className="col-span-1 lg:col-span-2">
            {checkoutInit == 1 && (
              <InformationsComp
                listRefundable={listRefundable}
                onProceedToPayment={() => onCheckoutInit(2)}
              />
            )}
            {checkoutInit == 2 && (
              <PaymentMethodsComp
                onProceedToPayment={() => onCheckoutInit(1)}
              />
            )}
          </div>
          <div className="col-span-1">
            <OrderDataComp />
          </div>
        </div>
      </div>
    </Elements>
  );
};
