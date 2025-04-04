import { Button, Checkbox, Form, Input } from "antd";

interface InformationsCompProps {
  listRefundable: any[];
  onProceedToPayment?: () => void;
}

export const InformationsComp = ({
  listRefundable,
  onProceedToPayment,
}: InformationsCompProps) => {
  return (
    <div className="bgCard py-3 rounded-xl h-full overflow-auto flex flex-col">
      <div className="grid">
        {/* information data */}
        <div className="grid px-3 grid-cols-1">
          <div className="col-span-1">
            <h1 className="font-bold">Shipping Information</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="col-span-1">
              <Form.Item
                className="m-0!"
                name="firstName"
                label={<span className="text-white">First Name</span>}
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="Enter First Name"
                  className="rounded-full! bg-transparent! border-white! text-white!"
                  classNames={{
                    input: "placeholder-white/20! py-[6px]!",
                  }}
                  inputMode="text"
                  autoComplete="off"
                />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <Form.Item
                className="m-0!"
                name="lastName"
                label={<span className="text-white">Last Name</span>}
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="Enter last Name"
                  className="rounded-full! bg-transparent! border-white! text-white!"
                  classNames={{
                    input: "placeholder-white/20! py-[6px]!",
                  }}
                  inputMode="text"
                  autoComplete="off"
                />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <Form.Item
                className="m-0!"
                name="email"
                label={<span className="text-white">Email</span>}
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                  },
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Email ID"
                  className="rounded-full! bg-transparent! border-white! text-white!"
                  classNames={{
                    input: "placeholder-white/20! py-[6px]!",
                  }}
                  inputMode="email"
                  autoComplete="off"
                />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <Form.Item
                className="m-0!"
                name="phoneNumber"
                label={<span className="text-white">Phone Number</span>}
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="Enter Phone Number"
                  className="rounded-full! bg-transparent! border-white! text-white!"
                  classNames={{
                    input: "placeholder-white/20! py-[6px]!",
                  }}
                  inputMode="text"
                  autoComplete="off"
                />
              </Form.Item>
            </div>
          </div>
        </div>
        {/* refundable policy */}
        <div className="grid px-3 grid-cols-1 mt-4">
          <div className="col-span-1">
            <h1 className="font-bold">Refundable Tickets</h1>

            <p className="mt-1 text-sm">
              Receive a 100% refund If you are unable to attend and can provide
              evidence related to one of the many reasons listed in our Terms
              and Conditions.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 mt-2 gap-3">
            {listRefundable?.map((item, index) => (
              <div className="col-span-1 flex" key={index}>
                <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-full">
                  <span className="pi pi-check bg-green-500 text-[8px] p-[3px] rounded-full font-bold"></span>
                  <p className="text-black text-xs  line-clamp-1">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-3 mt-4 bgPay py-1 flex items-center">
          <h1 className="text-base text-black font-bold bebasNeue">
            Pay $1.52 per ticket
          </h1>
        </div>

        <div className="px-3 mt-3">
          <Checkbox className="text-white! text-xs!">
            Yes, make my tickets refundable!{" "}
          </Checkbox>
        </div>
      </div>

      <div className="px-3 mt-4 lg:mt-auto">
        <Button
          className="w-full sm:w-70 rounded-3xl! uppercase btnStyle"
          onClick={onProceedToPayment}
        >
          <span className="font-bold text-sm bebasNeue">
            Proceed To Payment
          </span>
          <span className="font-bold text-sm pi pi-angle-double-right"></span>
        </Button>
      </div>
    </div>
  );
};
