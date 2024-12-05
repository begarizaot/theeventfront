import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";

import { InputIcon } from "../../../../../components";

import { Accordion, AccordionTab } from "primereact/accordion";

interface PaymentMethodProps {
  paymentRequest: any;
  msErrors: any;
  clearErrors: (e: any) => void;
}

export const PaymentMethod = ({
  paymentRequest,
  msErrors,
  clearErrors,
}: PaymentMethodProps) => {
  return (
    <div className="grid">
      <div className="col-12">
        <h3 className="m-0">
          Payment Method
          {msErrors?.payment && (
            <span className="ml-2 m-0 text-sm text-red-700">
              {msErrors?.payment}
            </span>
          )}
        </h3>
      </div>

      <div className="col-12">
        <Accordion multiple onTabOpen={() => clearErrors({ payment: null })}>
          <AccordionTab header="Express Checkout">
            {paymentRequest && (
              <PaymentRequestButtonElement options={{ paymentRequest }} />
            )}
          </AccordionTab>
          <AccordionTab header="Credit Card / Debit Card">
            <div className="grid">
              <div className="col-12 sm:col-6">
                <InputIcon icon="pi-credit-card">
                  <CardNumberElement
                    className="w-full pl-2 py-1 text-white"
                    options={{ style: { base: { color: "#fff" } } }}
                  />
                </InputIcon>
              </div>
              <div className="col-6 sm:col-3">
                <InputIcon icon="pi-calendar">
                  <CardExpiryElement
                    className="w-full pl-2 py-1 text-white"
                    options={{ style: { base: { color: "#fff" } } }}
                  />
                </InputIcon>
              </div>
              <div className="col-6 sm:col-3">
                <InputIcon icon="pi-lock">
                  <CardCvcElement
                    className="w-full pl-2 py-1 text-white"
                    options={{ style: { base: { color: "#fff" } } }}
                  />
                </InputIcon>
              </div>
            </div>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};
