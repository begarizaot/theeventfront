import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  PaymentRequestButtonElement,
  AffirmMessageElement,
  AffirmMessageElementComponent,
  AffirmMessageElementProps
} from "@stripe/react-stripe-js";
import { Button } from "antd";

interface PaymentMethodsCompProps {
  paymentRequest: any;
  error: any;
  total: any;
  onProceedToPayment?: () => void;
}

export const PaymentMethodsComp = ({
  error,
  paymentRequest,
  total,
  onProceedToPayment,
}: PaymentMethodsCompProps) => {
  return (
    <div className="bgCard p-3 rounded-xl h-full overflow-auto flex flex-col">
      <h1 className="text-xl font-bold">
        Payment Methods
        {error?.card && (
          <span className="ml-1 text-xs text-red-500">{error?.card}</span>
        )}
      </h1>

      {paymentRequest && (
        <div className="grid grid-cols-2 mt-2 gap-3">
          <div className="col-span-2">
            <h1 className="text-sm font-bold">Payment Request Button</h1>
          </div>

          <div className="col-span-2">
            <PaymentRequestButtonElement
              options={{
                paymentRequest,
                style: {
                  paymentRequestButton: {
                    theme: "light",
                    type: "buy",
                  },
                },
              }}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 mt-2 gap-3">
        <div className="col-span-2">
          <h1 className="text-sm font-bold">Credit card or Debit card</h1>
        </div>

        <div className="col-span-2">
          <CardNumberElement
            className="rounded-full! bg-transparent! border-white! text-white! border px-3 py-2"
            options={{ style: { base: { color: "#fff" } } }}
          />
        </div>

        <div className="col-span-1">
          <CardExpiryElement
            className="rounded-full! bg-transparent! border-white! text-white! border px-3 py-2"
            options={{ style: { base: { color: "#fff" } } }}
          />
        </div>
        <div className="col-span-1">
          <CardCvcElement
            className="rounded-full! bg-transparent! border-white! text-white! border px-3 py-2"
            options={{ style: { base: { color: "#fff" } } }}
          />
        </div>
      </div>

      {/* <div className="grid grid-cols-2 mt-2">
        <div className="col-span-2">
          <h1 className="text-sm font-bold">Affirm Message Element</h1>
        </div>

        <div className="col-span-2">
          <AffirmMessageElement
            options={{
              amount: 194980,
              currency: "USD",
              fontColor: "#fff",
              logoColor: "white"
            }}
          />
        </div>
      </div> */}

      <div className="mt-4 lg:mt-auto">
        <Button
          className="w-full sm:w-70 rounded-3xl! uppercase btnStyle"
          onClick={onProceedToPayment}
        >
          <span className="font-bold text-sm pi pi-angle-double-left"></span>
          <span className="font-bold text-sm bebasNeue">Go Back</span>
        </Button>
      </div>
    </div>
  );
};
