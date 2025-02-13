import { Checkbox, Form } from "antd";
import { Link } from "react-router-dom";

export const RefundableComp = () => {
  const refundableData = [
    "Family Emergencies",
    "Private Vehicle Failure",
    "Home Emergencies",
    "Illness, accident or injury",
    "Death of a family member",
    "Interruptions in public transportation",
  ];

  return (
    <div className="grid grid-cols-1">
      <div className="col-span-1">
        Receive a 100% refund If you are unable to attend and can provide
        evidence related to one of the many reasons listed in our
        <Link
          to="https://www.refundable.me/en"
          target="_blank"
          className="text-white! ml-1 border-b-2"
        >
          Terms and Conditions.
        </Link>
        .
      </div>
      <div className="col-span-1 grid grid-cols-2 smgrid-cols-3 gap-3 mt-3">
        {refundableData.map((data, index) => (
          <div key={index} className="col-span-1">
            <div className="flex items-center gap-1">
              <span className="pi pi-check-circle text-green-500"></span>
              <p className="text-xs">{data}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-1 mt-2">
        <p className="text-xs">
          <span className="text-xl font-bold">$1.98</span> per ticket
        </p>
      </div>
      <div className="col-span-1 mt-2">
        <Form.Item name="refundable" valuePropName="checked">
          <Checkbox className="text-white! checkboxStyle">
            Yes, make my tickets refundable!
          </Checkbox>
        </Form.Item>
      </div>
    </div>
  );
};
