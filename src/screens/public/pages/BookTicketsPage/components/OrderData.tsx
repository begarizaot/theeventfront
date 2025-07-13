import { Button, Input } from "antd";
import { TextPrimary } from "../../../../../components";
import { useEffect, useState } from "react";

interface OrderDataCompProps {
  error: any;
  values: any;
  event: any;
  loading: any;
  seats: any[];
  checkoutInit: any;
  freeTicket: any;
  onCheckOut: () => void;
  onProceedToPayment: () => void;
  onDiscountCode: (code: string) => void;
}

export const OrderDataComp = ({
  error,
  event,
  seats,
  values,
  loading,
  freeTicket,
  checkoutInit,
  onProceedToPayment,
  onDiscountCode,
  onCheckOut,
}: OrderDataCompProps) => {
  const seatsFilter = (seats ?? []).filter((item) => item.select > 0);

  const [discountCode, setDiscountCode] = useState("");

  useEffect(() => {
    checkoutInit == 1 && setDiscountCode("");
  }, [checkoutInit]);

  useEffect(() => {
    discountCode == "" && onDiscountCode("");
  }, [discountCode]);

  return (
    <div className="bgCard p-3 rounded-xl h-full overflow-auto flex flex-col">
      <div className="grid">
        {/* list ordes */}
        <div className="flex gap-2">
          <img
            src={event?.url_image ?? ""}
            className="w-15 h-15 rounded-lg"
            alt=""
          />
          <div className="grid items-center">
            <h1 className="text-sm font-bold">{event?.name ?? ""}</h1>
          </div>
        </div>

        <h1 className="text-base font-bold mt-3">Order Summary</h1>
        <div className="grid gap-1 mt-2">
          {(seatsFilter ?? []).map((item) => (
            <div
              className="flex items-center gap-3 justify-between"
              key={item.id}
            >
              <div className="flex gap-2">
                <p className="text-sm font-bold">{item?.title ?? ""}</p>
              </div>
              <div className="flex gap-2 items-center">
                <TextPrimary className="pi pi-ticket text-xs" />
                <p>{item?.select ?? ""}x</p>
                <h1 className="text-xl font-bold">
                  ${(item?.price ?? 0)?.toFixed(2)}
                </h1>
              </div>
            </div>
          ))}
        </div>
        {checkoutInit != 1 && (
          <>
            <div className="bgSeparator my-4"></div>
            {/* value y subvalue */}
            <div className="grid gap-3">
              <div className="flex justify-between items-center text-sm">
                <p>Subtotal</p>
                <div className="flex gap-2 items-center">
                  {values.discountCode && (
                    <p>${!loading.values ? values.discountCode : 0}</p>
                  )}
                  <p
                    className={
                      values.discountCode ? `text-xs line-through` : ""
                    }
                  >
                    ${!loading.values ? values.subTotal : 0}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <p>Service Fee</p>
                <p>${!loading.values && !freeTicket ? values.serviceFee : 0}</p>
              </div>
              <div className="flex justify-between items-center text-sm">
                <p>Processing Fee</p>
                <p>
                  ${!loading.values && !freeTicket ? values.processingFee : 0}
                </p>
              </div>
              {values.totalRefundable > 0 && (
                <div className="flex justify-between items-center text-sm">
                  <p>Refundable Tickets Fee</p>
                  <p>${!loading.values ? values.totalRefundable : 0}</p>
                </div>
              )}
            </div>
            <div className="bgSeparator my-4"></div>

            <div className="flex justify-between items-center text-sm">
              <p className="font-bold">Total</p>
              <p className="font-bold text-lg">
                ${!loading.values && !freeTicket ? values.total : 0}
              </p>
            </div>

            {/* discont code */}
            {!freeTicket && (
              <div className="mt-5 ">
                <h1 className="text-sm">Discount Code</h1>
                <div className="border-white border rounded-3xl flex items-center mt-2 pr-2">
                  <Input
                    placeholder="Enter Code"
                    className="rounded-full! bg-transparent! border-transparent! text-white!"
                    classNames={{
                      input: "placeholder-white/20! py-[6px]!",
                    }}
                    inputMode="text"
                    autoComplete="off"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                  />
                  <Button
                    className="rounded-full! bg-white! border-transparent! h-6!"
                    onClick={() => {
                      onDiscountCode(discountCode);
                    }}
                  >
                    Apply
                  </Button>
                </div>
                {error.discountCode && (
                  <p className="text-sm text-red-500">{error.discountCode}</p>
                )}
              </div>
            )}
          </>
        )}
      </div>

      <div className=" mt-4">
        {checkoutInit == 1 && (
          <Button
            className="w-full rounded-3xl! uppercase btnStyle disabled:bg-white/70! disabled:border-none! disabled:text-black!"
            disabled={seatsFilter.length == 0}
            onClick={() => {
              seatsFilter.length > 0 && onProceedToPayment();
            }}
          >
            <span className="font-bold text-xs">Check Out</span>
          </Button>
        )}
        {checkoutInit == (freeTicket ? 2 : 3) && (
          <Button
            className="w-full rounded-3xl! uppercase btnStyle disabled:bg-white/70! disabled:border-none! disabled:text-black!"
            onClick={() => {
              onCheckOut();
            }}
          >
            <span className="font-bold text-xs">Complete Purchase</span>
          </Button>
        )}
      </div>
    </div>
  );
};
