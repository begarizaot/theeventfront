import { Link } from "react-router-dom";

import { ContactInformation, DiscountCode, PaymentMethod } from "./components";

import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

export const CheckoutTickts = () => {
  return (
    <div className="col-12 border-top-1 pt-3 pb-5 contCheckout">
      <form className="grid h-full">
        <div className="col-12 lg:col-8">
            <ContactInformation />
            <PaymentMethod />
        </div>
        <div className="col-12 lg:col-4 flex flex-column pb-7 sm:pb-2">
          <div className="grid">
            <div className="col-12 tickets border-bottom-1 bgBorder">
              <h3 className="m-0 mb-3">Order Summary</h3>

              <div className="flex flex-column gap-2">
                <div className="flex align-items-center justify-content-between">
                  <p className="m-0">GENERAL</p>
                  <div className="flex align-items-center gap-2">
                    <span className="pi pi-ticket textPrimary"></span>
                    <span className="text-xs">1 x </span>
                    <span className="font-bold">$55.00</span>
                  </div>
                </div>
                <div className="flex align-items-center justify-content-between">
                  <p className="m-0">GENERAL</p>
                  <div className="flex align-items-center gap-2">
                    <span className="pi pi-ticket textPrimary"></span>
                    <span className="text-xs">1 x </span>
                    <span className="font-bold">$55.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 prices flex flex-column gap-2 border-bottom-1 bgBorder">
              <div className="flex align-items-center justify-content-between">
                <p className="m-0 text-sm">Subtotal</p>
                <span className="font-bold">$55.00</span>
              </div>
              <div className="flex align-items-center justify-content-between">
                <p className="m-0 text-sm">Service Fee</p>
                <span className="font-bold">$8.25</span>
              </div>
              <div className="flex align-items-center justify-content-between">
                <p className="m-0 text-sm">Processing Fee</p>
                <span className="font-bold">$2.20</span>
              </div>
            </div>

            <div className="col-12 total">
              <div className="flex align-items-center justify-content-between">
                <p className="m-0 text-base">Total</p>
                <span className="font-bold text-lg">$55.00</span>
              </div>
            </div>

            <div className="col-12 termsandPolicy text-sm">
              By completing the checkout process, you acknowledge that you have
              read and agree to The Event Jet’s
              <Link
                to="terms-and-condition"
                target="_blank"
                className="mx-1 text-white"
              >
                Terms of Service
              </Link>
              and
              <Link
                to="privacy-policy"
                target="_blank"
                className="mx-1 text-white"
              >
                Privacy Policy.
              </Link>
            </div>

            <div className="col-12 promotionalMessages flex">
              <Checkbox
                inputId="promotional"
                value=""
                onChange={() => {}}
                checked={true}
              />
              <label htmlFor="promotional" className="ml-2 text-xs">
                I agree to receive promotional messages and updates about future
                events via SMS and/or Email. By checking this box, I consent to
                receive marketing messages from The Event Jet at the phone
                number and/or Email provided. Message and data rates may apply.
                Reply 'STOP' at any time to unsubscribe.
              </label>
            </div>

            <div className="col-12 mt-2">
              <DiscountCode />
            </div>
          </div>

          <div className="fixed bottom-0 left-0 bgBody py-2 px-4 mt-auto w-full sm:py-0 sm:px-0 sm:relative">
            <Button
              label="Complete Purchase"
              outlined
              className="w-full border-round-3xl outlinedBtn text-sm"
              type="button"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
