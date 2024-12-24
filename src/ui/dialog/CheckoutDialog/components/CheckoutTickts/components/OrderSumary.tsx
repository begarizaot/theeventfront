import { Link } from "react-router-dom";

import { NumberFormat } from "../../../../../../helpers";
import { InputIcon } from "../../../../../components";

import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

interface OrderSumaryProps {
  tickets: any[];
  values: any;
  useData: any;
  discount: any;
  freeTicket: any;
  onCheckboxChange: (e: any) => void;
  onInputUser: (e: any) => void;
  onDiscountCode: () => void;
}

export const OrderSumary = ({
  values,
  tickets,
  useData,
  discount,
  freeTicket,
  onCheckboxChange,
  onInputUser,
  onDiscountCode,
}: OrderSumaryProps) => {
  return (
    <div className="grid">
      <div className="col-12 tickets border-bottom-1 bgBorder">
        <h3 className="m-0 mb-3">Order Summary</h3>

        <div className="flex flex-column gap-2">
          {tickets.map((ticket: any) => (
            <div
              className="flex align-items-center justify-content-between"
              key={ticket.id}
            >
              <p className="m-0">{ticket.name}</p>
              <div className="flex align-items-center gap-2">
                <span className="pi pi-ticket textPrimary"></span>
                <span className="text-xs">{ticket.quantity} x </span>
                <span className="font-bold">
                  ${NumberFormat(ticket.price, 2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-12 prices flex flex-column gap-2 border-bottom-1 bgBorder">
        <div className="flex align-items-center justify-content-between">
          <p className="m-0 text-sm">
            Subtotal
            {discount?.desc > 0 && (
              <span className="ml-1 text-xs">{discount?.desc}%</span>
            )}
          </p>
          <div className="flex gap-1">
            {discount?.data > 0 && (
              <span className="font-bold">
                ${NumberFormat(discount?.data || 0, 2)}
              </span>
            )}
            <span
              className={
                discount?.data > 0 ? "text-sm line-through" : "font-bold"
              }
            >
              ${NumberFormat(values?.subTotal || 0, 2)}
            </span>
          </div>
        </div>
        <div className="flex align-items-center justify-content-between">
          <p className="m-0 text-sm">Service Fee</p>
          <span className="font-bold">
            ${NumberFormat(values?.serviceFee || 0, 2)}
          </span>
        </div>
        <div className="flex align-items-center justify-content-between">
          <p className="m-0 text-sm">Processing Fee</p>
          <span className="font-bold">
            ${NumberFormat(values?.processingFee || 0, 2)}
          </span>
        </div>
      </div>

      <div className="col-12 total">
        <div className="flex align-items-center justify-content-between">
          <p className="m-0 text-base">Total</p>
          <span className="font-bold text-lg">
            ${NumberFormat(values?.total || 0, 2)}
          </span>
        </div>
      </div>

      <div className="col-12 termsandPolicy text-sm">
        By completing the checkout process, you acknowledge that you have read
        and agree to The Event Jet’s
        <Link
          to="terms-and-condition"
          target="_blank"
          className="mx-1 text-white"
        >
          Terms of Service
        </Link>
        and
        <Link to="privacy-policy" target="_blank" className="mx-1 text-white">
          Privacy Policy.
        </Link>
      </div>
      {!freeTicket && (
        <>
          <div className="col-12 promotionalMessages flex">
            <Checkbox
              inputId="promotional"
              value={useData.smsCheck}
              name="smsCheck"
              onChange={onCheckboxChange}
              checked={useData.smsCheck}
            />
            <label htmlFor="promotional" className="ml-2 text-xs">
              I agree to receive promotional messages and updates about future
              events via SMS and/or Email. By checking this box, I consent to
              receive marketing messages from The Event Jet at the phone number
              and/or Email provided. Message and data rates may apply. Reply
              'STOP' at any time to unsubscribe.
            </label>
          </div>

          <div className="col-12 mt-2">
            <div className="flex flex-column">
              <span>Discount Code</span>

              <InputIcon icon="pi-tag" className="mt-2">
                <div className="grid w-full my-auto">
                  <div className="col-9 sm:col-10 lg:col-8 xl:col-9 p-0">
                    <InputText
                      className="py-1 text-white"
                      placeholder="Code"
                      name="codeDiscount"
                      autoComplete="off"
                      value={useData.codeDiscount}
                      onChange={onInputUser}
                    />
                  </div>
                  <div className="col-3 sm:col-2 lg:col-4 xl:col-3 p-0">
                    <Button
                      label="Apply"
                      outlined
                      className="border-round-3xl outlinedBtn text-sm h-1rem"
                      type="button"
                      onClick={onDiscountCode}
                    />
                  </div>
                </div>
              </InputIcon>
              {discount?.data == 0 && (
                <span className="mt-1 text-xs text-red-700">
                  {discount?.message}
                </span>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
