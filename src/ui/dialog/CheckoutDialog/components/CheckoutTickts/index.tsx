import { Toast } from "primereact/toast";
import { ContactInformation, PaymentMethod, OrderSumary } from "./components";
import { useCheckoutTickets } from "./hooks";
import { CheckoutTicktsProps } from "./types";

import { Button } from "primereact/button";

export const CheckoutTickts = (req: CheckoutTicktsProps) => {
  const { tickets, freeTicket } = req;

  const {
    values,
    msErrors,
    errorRes,
    discount,
    formState,
    paymentRequest,
    onClearErrors,
    onInputChange,
    onCompleteForm,
    onFreeCompleteForm,
    onDiscountCode,
    onCheckboxChange,
  } = useCheckoutTickets(req);

  return (
    <>
      <Toast ref={errorRes} />
      <div className="col-12 border-top-1 pt-3 pb-5 contCheckout">
        <form
          className="grid h-full"
          onSubmit={freeTicket ? onFreeCompleteForm : onCompleteForm}
        >
          <div className="col-12 lg:col-8">
            <ContactInformation data={formState} changeUser={onInputChange} />
            {!freeTicket && (
              <PaymentMethod
                paymentRequest={paymentRequest}
                msErrors={msErrors}
                clearErrors={onClearErrors}
              />
            )}
          </div>
          <div className="col-12 lg:col-4 flex flex-column pb-7 sm:pb-2">
            <OrderSumary
              onCheckboxChange={onCheckboxChange}
              onDiscountCode={onDiscountCode}
              onInputUser={onInputChange}
              tickets={tickets}
              useData={formState}
              values={values}
              discount={discount}
              freeTicket={freeTicket}
            />

            <div className="fixed bottom-0 left-0 bgBody py-2 px-4 mt-auto w-full sm:py-0 sm:px-0 sm:relative">
              <Button
                label="Complete Purchase"
                outlined
                className="w-full border-round-3xl outlinedBtn text-sm"
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
