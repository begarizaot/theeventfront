import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";
import { Button } from "antd";

interface PaymentMethodsCompProps {
  onProceedToPayment?: () => void;
}

export const PaymentMethodsComp = ({
  onProceedToPayment,
}: PaymentMethodsCompProps) => {
  return (
    <div className="bgCard p-3 rounded-xl h-full overflow-auto flex flex-col">
      <h1 className="text-xl font-bold">Payment Methods</h1>

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
