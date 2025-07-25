import { Button, Checkbox, Form, Input, InputNumber, Select } from "antd";
import {
  getListCountries,
  getValidateEmail,
} from "../../../../../store/thunks";
import { useEffect, useState } from "react";

interface InformationsCompProps {
  userData: any;
  values: any;
  freeTicket: any;
  listRefundable: any[];
  onProceedToPayment: (ev: any) => void;
  onValueChangeUser?: (ev: any) => void;
  onFinish: (ev: any) => void;
}

export const InformationsComp = ({
  values,
  userData,
  freeTicket,
  listRefundable,
  onProceedToPayment,
  onValueChangeUser,
  onFinish,
}: InformationsCompProps) => {
  const [listCoutries, setListCoutries] = useState<any[]>([]);

  const onValidateEmail = async (ev: any) => {
    try {
      await getValidateEmail(ev.email);
      onFinish(ev);
    } catch (error: any) {
      userData.setFields([
        {
          name: "email",
          errors: [error],
        },
      ]);
    }
  };

  useEffect(() => {
    listCountries();
  }, []);

  const listCountries = async () => {
    const countries = await getListCountries();
    setListCoutries(countries);
  };

  return (
    <Form
      id="formUserData"
      form={userData}
      className="bgCard py-3! rounded-xl h-full overflow-auto flex flex-col text-white!"
      onFinish={(ev) => onValidateEmail(ev)}
      onValuesChange={onValueChangeUser}
    >
      <div className="grid">
        {/* information data */}
        <div className="grid px-3 grid-cols-1">
          <div className="col-span-1">
            <h1 className="font-bold text-base">Shipping Information</h1>
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
                  placeholder="Enter Email"
                  className="rounded-full! bg-transparent! border-white! text-white!"
                  classNames={{
                    input: "placeholder-white/20! py-[6px]!",
                  }}
                  inputMode="email"
                  autoComplete="off"
                />
              </Form.Item>
            </div>
            <div className="col-span-1 grid">
              <span className="text-white mb-2 mt-2">
                <span className="text-red-400">*</span> Phone
              </span>
              <div className="col-span-1 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <Form.Item
                  className="m-0! col-span-1"
                  name="country"
                  rules={[
                    {
                      required: true,
                      message: "Please select your type phone",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    placeholder="Country Code"
                    className="customSelect col-span-1"
                    filterOption={(input, option: any) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={listCoutries}
                  />
                </Form.Item>
                <Form.Item
                  className="m-0! col-span-2"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <InputNumber
                    formatter={(value) =>
                      `${value}`
                        .replace(/\D/g, "")
                        .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2 $3")
                    }
                    className="rounded-full! bg-transparent! w-full! text-white! py-[1px]! border-white! styleNumberInput"
                    placeholder="Phone Number"
                    inputMode="numeric"
                  />
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
        {/* refundable policy */}
        {!freeTicket && (
          <>
            <div className="grid px-3 grid-cols-1 mt-4">
              <div className="col-span-1">
                <h1 className="font-bold text-base">Refundable Tickets</h1>

                <p className="mt-1 text-sm">
                  Receive a 100% refund If you are unable to attend and can
                  provide evidence related to one of the many reasons listed in
                  our Terms and Conditions.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 mt-2 gap-3">
                {(listRefundable ?? [])?.map((item, index) => (
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
                Pay ${values.refundable} per ticket
              </h1>
            </div>

            <div className="px-3 mt-3">
              <Form.Item name="refundable" valuePropName="checked" noStyle>
                <Checkbox className="text-white! text-xs!">
                  Yes, make my tickets refundable!
                </Checkbox>
              </Form.Item>
            </div>
          </>
        )}
      </div>

      <div
        className={`px-3 ${
          freeTicket ? "mt-auto" : "mt-4"
        } flex justify-between gap-2`}
      >
        <Button
          className="w-full sm:w-70 rounded-3xl! uppercase btnStyle"
          onClick={() => onProceedToPayment(1)}
        >
          <span className="font-bold text-sm pi pi-angle-double-left"></span>
          <span className="font-bold text-sm bebasNeue">Go Back</span>
        </Button>

        {!freeTicket && (
          <Button
            className="w-full sm:w-70 rounded-3xl! uppercase btnStyle"
            htmlType="submit"
          >
            <span className="font-bold text-sm bebasNeue">
              Proceed To Payment
            </span>
            <span className="font-bold text-sm pi pi-angle-double-right"></span>
          </Button>
        )}
      </div>
    </Form>
  );
};
