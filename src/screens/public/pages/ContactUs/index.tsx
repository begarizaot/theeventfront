import { Form, Input } from "antd";
import { ButtonComp } from "../../../../ui/components";

export const ContactUsPage = () => {
  return (
    <div className="px-10 max-w-[80rem] mx-auto h-[80vh] pt-25 text-white">
      <Form name="register">
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2 text-center mb-1">
            <h1 className="text-2xl font-bold effectPrimary">Contact Us</h1>
          </div>
          <div className="col-span-2 sm:col-span-1">
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
          <div className="col-span-2 sm:col-span-1">
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
          <div className="col-span-2">
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
          </div>

          <div className="col-span-2">
            <Form.Item
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please input your message!",
                },
              ]}
            >
              <Input.TextArea
                placeholder="Write your message here *"
                autoSize={{ minRows: 3, maxRows: 5 }}
                className="rounded-lg! bg-transparent! border-white! text-white! placeholder:text-white/20!"
              />
            </Form.Item>
          </div>

          <div className="col-span-2">
            <Form.Item>
              <ButtonComp htmlType="submit" lable="Submit" />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};
