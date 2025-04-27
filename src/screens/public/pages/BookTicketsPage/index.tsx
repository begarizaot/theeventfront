import "./styles.scss";
import {
  ChairsComp,
  InformationsComp,
  OrderDataComp,
  PaymentMethodsComp,
} from "./components";
import { useBookTickets } from "./useBookTickets";

export const BookTicketsPage = () => {
  const {
    values,
    isError,
    userForm,
    listSeats,
    isLoading,
    eventDetail,
    checkoutInit,
    listRefundable,
    eventsDiscountCode,
    onCompletePurchase,
    onValueChangeUser,
    onCheckoutInit,
    onValuesChange,
    onSelectSeats,
  } = useBookTickets();

  return (
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

      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-3 mt-4 lg:h-[90%]`}>
        <div className="col-span-1 lg:col-span-2">
          {checkoutInit == 1 && (
            <ChairsComp
              loading={isLoading.seats}
              seats={listSeats}
              onSelect={onSelectSeats}
            />
          )}
          {checkoutInit == 2 && (
            <InformationsComp
              userData={userForm}
              values={values}
              listRefundable={listRefundable}
              onProceedToPayment={(e) => onCheckoutInit(e)}
              onValueChangeUser={onValueChangeUser}
              onFinish={(ev) => onValuesChange(ev)}
            />
          )}
          {checkoutInit == 3 && (
            <PaymentMethodsComp
              error={isError}
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
  );
};
