import "./styles.scss";
import {
  ChairsComp,
  ChairsMapComp,
  InformationsComp,
  OrderDataComp,
  PaymentMethodsComp,
} from "./components";
import { useBookTickets } from "./useBookTickets";
import { Spin } from "antd";

export const BookTicketsPage = () => {
  const {
    values,
    isError,
    userForm,
    listSeats,
    isLoading,
    freeTicket,
    eventDetail,
    checkoutInit,
    contextHolder,
    listRefundable,
    paymentRequest,
    eventsDiscountCode,
    onCompletePurchase,
    onValueChangeUser,
    onCheckoutInit,
    onValuesChange,
    onSelectSeats,
    onRmSelectMap,
    onSelectMap,
  } = useBookTickets();

  return (
    <>
      <Spin spinning={isLoading.complete} fullscreen size="large" />
      {contextHolder}
      <div
        className={`pt-12 w-full mx-auto max-w-[80rem] px-4 sm:px-6 ${
          checkoutInit == 1 ? "h-screen" : "min-h-screen"
        }`}
      >
        <div className="flex gap-4 items-center">
          <h1 className="text-xl sm:text-3xl uppercase font-bold bebasNeue">
            Checkout
          </h1>
          <div className="flex gap-3">
            {(freeTicket ? [1, 2] : [1, 2, 3]).map((item) => (
              <span
                key={item}
                className={`h-2 w-14 rounded-2xl ${
                  checkoutInit === item ? "bg-white" : "bg-white/20"
                }`}
              ></span>
            ))}
          </div>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-3 mt-4 lg:h-[90%]`}
        >
          <div className="col-span-1 lg:col-span-2">
            {!eventDetail?.url_map && checkoutInit == 1 && (
              <ChairsComp
                imgMap={eventDetail?.map_img_url}
                loading={isLoading.seats}
                seats={listSeats}
                onSelect={onSelectSeats}
              />
            )}
            {eventDetail?.url_map && checkoutInit == 1 && (
              <ChairsMapComp
                eventMapId={eventDetail?.url_map}
                loading={isLoading.seats}
                seats={listSeats}
                onAddTicketMap={(ev) => onSelectMap(ev)}
                onRmTicketMap={(ev) => onRmSelectMap(ev)}
              />
            )}
            {checkoutInit == 2 && (
              <InformationsComp
                userData={userForm}
                values={values}
                freeTicket={freeTicket}
                listRefundable={listRefundable}
                onProceedToPayment={(e) => onCheckoutInit(e)}
                onValueChangeUser={onValueChangeUser}
                onFinish={(ev) => onValuesChange(ev)}
              />
            )}
            {checkoutInit == 3 && (
              <PaymentMethodsComp
                error={isError}
                paymentRequest={paymentRequest}
                onProceedToPayment={() => onCheckoutInit(2)}
              />
            )}
          </div>
          <div className="col-span-1">
            <OrderDataComp
              error={isError}
              values={values}
              seats={listSeats}
              event={eventDetail}
              loading={isLoading}
              freeTicket={freeTicket}
              checkoutInit={checkoutInit}
              onProceedToPayment={() => onCheckoutInit(2)}
              onCheckOut={onCompletePurchase}
              onDiscountCode={(code) => {
                eventsDiscountCode(code);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
