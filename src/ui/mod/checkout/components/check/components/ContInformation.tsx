import { Form, Input } from "antd";

import { SelectCountry } from "../../../../../components";
import usePhoneInput from "../../../../../../hooks/usePhoneInput";

export const ContInformation = () => {
  const phoneInput = usePhoneInput();

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 mt-2 gap-3">
      <div className="col-span-1">
        <Form.Item
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your First Name!",
            },
          ]}
        >
          <Input
            placeholder="First Name *"
            className="rounded-full! bg-transparent! border-white! text-white!"
            classNames={{
              input: "placeholder-white/20! py-[2px]!",
            }}
            prefix={<span className="pi pi-user mr-1 textPrimary"></span>}
            autoComplete="off"
          />
        </Form.Item>
      </div>
      <div className="col-span-1">
        <Form.Item
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your Last Name!",
            },
          ]}
        >
          <Input
            placeholder="Last Name *"
            className="rounded-full! bg-transparent! border-white! text-white!"
            classNames={{
              input: "placeholder-white/20! py-[2px]!",
            }}
            prefix={<span className="pi pi-user mr-1 textPrimary"></span>}
            autoComplete="off"
          />
        </Form.Item>
      </div>
      <div className="col-span-1">
        <Form.Item
          name="email"
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
            placeholder="example@gmail.com *"
            className="rounded-full! bg-transparent! border-white! text-white!"
            classNames={{
              input: "placeholder-white/20! py-[2px]!",
            }}
            prefix={<span className="pi pi-envelope mr-1 textPrimary"></span>}
            inputMode="email"
            autoComplete="off"
          />
        </Form.Item>
      </div>
      <div className="col-span-1">
        <div className="flex gap-2 grid grid-cols-3">
          <Form.Item
            name="country"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <SelectCountry />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
              },
            ]}
            className="col-span-2"
          >
            <Input
              placeholder="(999) 999-9999"
              className="rounded-full! bg-transparent! border-white! text-white! col-span-2"
              classNames={{
                input: "placeholder-white/20! py-[2px]!",
              }}
              prefix={<span className="pi pi-phone mr-1 textPrimary"></span>}
              inputMode="text"
              autoComplete="off"
              {...phoneInput}
            />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};
