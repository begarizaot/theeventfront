import { Form } from "antd";
import {
  ContInformation,
  DiscountCodeComp,
  OrderSummaryComp,
  PaymentMethodComp,
  RefundableComp,
} from "./components";
import { ButtonComp } from "../../../../components";
import { useCheck } from "./useCheck";

export const CheckComp = () => {
  const { form, onFinish } = useCheck();

  const viewInputsForm = () => {
    return (
      <div className="mt-3">
        <DiscountCodeComp onFinish={() => console.log("onFinish")} />
      </div>
    );
  };

  return (
    <Form
      name="check"
      form={form}
      onFinish={onFinish}
      className="grid grid-cols-1 lg:grid-cols-3 h-full text-white! gap-4 pt-3!"
    >
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-1">
          <div className="col-span-1 border-b-2">
            <h2 className="text-lg font-bold">Contact Information</h2>
            <ContInformation />
          </div>
          <div className="col-span-1 border-b-2 pt-2">
            <h2 className="text-lg font-bold">Refundable Tickets</h2>
            <RefundableComp />
          </div>
          <div className="col-span-1 py-2">
            <h2 className="text-lg font-bold">Payment Method</h2>
            <PaymentMethodComp />
          </div>
          <div className="lg:hidden col-span-1 border-t-2">
            <OrderSummaryComp />
            {viewInputsForm()}
          </div>
        </div>
      </div>
      <div className="col-span-1 pt-2 lg:pt-0 flex flex-col justify-end sticky bottom-0 bgBody">
        <div className="hidden lg:grid grid-cols-1">
          <OrderSummaryComp />
          {viewInputsForm()}
        </div>
        <div className="mt-2 lg:mt-auto">
          <ButtonComp lable="Complete Purchase" htmlType="submit" />
        </div>
      </div>
    </Form>
  );
};
