import { ConfigProvider, Drawer, Form, Input, Segmented } from "antd";
import { useLogin } from "./useLogin";
import { ButtonComp, SelectCountry } from "../../../components";

interface LoginDrawerProps {
  visible: boolean;
  onClose: () => void;
}

export const LoginDrawer = ({ onClose, visible }: LoginDrawerProps) => {
  const {
    form,
    navIndex,
    navLogin,
    phoneInput,
    onSetCountry,
    onResetInfo,
    onNavChange,
    onRegister,
    onFinish,
  } = useLogin();

  return (
    <ConfigProvider
      drawer={{ styles: { mask: { backdropFilter: "blur(10px)" } } }}
    >
      <Drawer
        placement="right"
        onClose={() => {
          onResetInfo();
          onClose();
        }}
        open={visible}
        className="drawer text-white"
      >
        <div className="flex flex-col h-full">
          <h1 className="text-2xl font-bold flex flex-col">
            Log in to your
            <span className="effectPrimary">Event Hub.</span>
          </h1>

          <Segmented
            options={navLogin}
            defaultValue={navIndex}
            value={navIndex}
            block
            className="bg-transparent! text-white! mt-4! mb-6! text-base! font-bold"
            onChange={(e) => onNavChange(e)}
          />

          <Form name="login" form={form} onFinish={onFinish}>
            {navIndex == 0 ? (
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
            ) : (
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
                  placeholder="example@gmail.com"
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
            )}

            <Form.Item>
              <ButtonComp htmlType="submit" className="mt-1" lable="Log In" />
            </Form.Item>
          </Form>

          <div className="mt-auto text-center">
            <h2 className="font-bold text-base">
              New to <span className="effectPrimary">The Event Jet?</span>
            </h2>
            <ButtonComp
              className="mt-1"
              lable="Register"
              onClick={onRegister}
            />
          </div>
        </div>
      </Drawer>
    </ConfigProvider>
  );
};
