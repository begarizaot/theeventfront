import { CardCvcElement, CardExpiryElement, CardNumberElement } from "@stripe/react-stripe-js";

export const PaymentMethodComp = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="col-span-1">
        <p className="text-sm">Express Checkout</p>
        <div className="grid grid-cols-3">
          <div className="col-span-1">btn</div>
        </div>
      </div>
      <div className="col-span-1">
        <p className="text-sm">Credit Card / Debit Card</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 mt-2 gap-2">
          <div className="col-span-2 sm:col-span-2">
            <div className="flex items-center border-2 rounded-2xl px-2 py-[2px]!">
              <span className="pi pi-credit-card textPrimary"></span>
              <CardNumberElement
                className="w-full pl-2 py-1 text-white"
                options={{ style: { base: { color: "#fff" } } }}
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex items-center border-2 rounded-2xl px-2 py-[2px]!">
              <span className="pi pi-calendar textPrimary"></span>
              <CardExpiryElement
                className="w-full pl-2 py-1 text-white"
                options={{ style: { base: { color: "#fff" } } }}
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex items-center border-2 rounded-2xl px-2 py-[2px]!">
              <span className="pi pi-lock textPrimary"></span>
              <CardCvcElement
                className="w-full pl-2 py-1 text-white"
                options={{ style: { base: { color: "#fff" } } }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
