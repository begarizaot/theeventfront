import { ConfigProvider, Drawer, Form, Input } from "antd";

import { ButtonComp, ReCaptchaComp, SelectCountry } from "../../../components";
import { useRegister } from "./useRegister";

interface RegisterDrawerProps {
  visible: boolean;
  onClose: () => void;
}

export const RegisterDrawer = ({ onClose, visible }: RegisterDrawerProps) => {
  const {
    form,
    phoneInput,
    onFinish,
    onResetInfo,
    onBackToLogin,
    onCaptchaChange,
  } = useRegister();

  const onFooter = () => {
    return (
      <div className="flex flex-col">
        <h2 className="text-sm">Already have an account with us?</h2>
        <h2
          className="font-bold text-xl textPrimary cursor-pointer"
          onClick={onBackToLogin}
        >
          Log in
        </h2>
      </div>
    );
  };

  return (
    <ConfigProvider
      drawer={{ styles: { mask: { backdropFilter: "blur(10px)" } } }}
    >
      <Drawer
        placement="right"
        onClose={() => {
          onClose();
          onResetInfo();
        }}
        open={visible}
        className="drawer text-white"
        footer={onFooter()}
      >
        <div className="flex flex-col h-full">
          <h1 className="text-2xl font-bold flex flex-col">
            Join
            <span className="effectPrimary">The Event Jet</span>
            today! Let's search and host amazing events together
          </h1>

          <Form
            name="register"
            form={form}
            onFinish={onFinish}
            className="mt-6!"
          >
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
                  prefix={
                    <span className="pi pi-phone mr-1 textPrimary"></span>
                  }
                  inputMode="text"
                  autoComplete="off"
                  {...phoneInput}
                />
              </Form.Item>
            </div>
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
                prefix={
                  <span className="pi pi-envelope mr-1 textPrimary"></span>
                }
                inputMode="email"
                autoComplete="off"
              />
            </Form.Item>

            <ReCaptchaComp onChange={onCaptchaChange} className="mb-3" />

            <Form.Item>
              <ButtonComp htmlType="submit" className="mt-1" lable="Register" />
            </Form.Item>
          </Form>
        </div>
      </Drawer>
    </ConfigProvider>
  );
};
