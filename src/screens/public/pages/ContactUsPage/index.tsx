import { Button, Form, Input, Select } from "antd";
import bgContactUs from "../../../../assets/contact/bgContact.jpeg";
import { Link } from "react-router-dom";

export const ContactUsPage = () => {
  return (
    <div className="min-h-screen relative">
      <div
        className="bg-cover absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #121212 100%),url(${bgContactUs})`,
        }}
      ></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 pt-20! pb-10! px-4! sm:px-6! mx-auto! max-w-[80rem]! z-10 relative gap-6">
        <Form className="col-span-2 flex flex-col gap-3 text-white! order-2 lg:order-1">
          <h1 className="text-3xl uppercase bebasNeue">Let’s get in touch</h1>

          <p className="text-sm">
            Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim. Done
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Form.Item
              className="m-0! col-span-2 sm:col-span-1"
              name="firstName"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                placeholder="Fist Name"
                className="rounded-full! bg-transparent! border-white! text-white!"
                classNames={{
                  input: "placeholder-white/20! py-[6px]!",
                }}
                inputMode="text"
                autoComplete="off"
              />
            </Form.Item>

            <Form.Item
              className="m-0! col-span-2 sm:col-span-1"
              name="lastName"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                placeholder="Last Name"
                className="rounded-full! bg-transparent! border-white! text-white!"
                classNames={{
                  input: "placeholder-white/20! py-[6px]!",
                }}
                inputMode="text"
                autoComplete="off"
              />
            </Form.Item>

            <Form.Item
              className="m-0! col-span-2 sm:col-span-1"
              name="phoneNumber"
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

            <Form.Item
              className="m-0! col-span-2 sm:col-span-1"
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
                  input: "placeholder-white/20! py-[6px]!",
                }}
                inputMode="email"
                autoComplete="off"
              />
            </Form.Item>

            <Form.Item
              className="m-0! col-span-2"
              name="selectQuery"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                showSearch
                placeholder="Select Query"
                className="customSelect"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  { value: "1", label: "Jack" },
                  { value: "2", label: "Lucy" },
                  { value: "3", label: "Tom" },
                ]}
              />
            </Form.Item>
            <Form.Item
              className="m-0! col-span-2"
              name="message"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Message"
                className="rounded-xl! bg-transparent! border-white! text-white! placeholder:text-white/20!"
              />
            </Form.Item>

            <Button
              htmlType="submit"
              className="w-full sm:w-28 lg:w-40 rounded-3xl! uppercase btnStyle "
            >
              <div className="flex items-center justify-center gap-3">
                <span className="font-bold text-xs mt-[1px]">Send</span>
                <span className="pi pi-chevron-right text-xs"></span>
              </div>
            </Button>
          </div>
        </Form>

        <div className="col-span-1 order-1 lg:order-2 flex flex-col gap-4 ">
          {/* call us */}
          <div className="">
            <h1 className="text-3xl uppercase bebasNeue">Call Us</h1>
            <p className="text-sm mb-3">
              Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Done
            </p>
            <Link
              to="tel:+1234567890"
              className=" bg-white text-black text-sm px-3 py-[6px] rounded-full! "
            >
              <span className="pi pi-phone text-[9px] bg-black text-white p-[5px] mr-1 rounded-full"></span>
              +123 456 7890
            </Link>
          </div>
          {/* email */}
          <div className="">
            <h1 className="text-3xl uppercase bebasNeue">Email</h1>
            <p className="text-sm mb-3">
              Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Done
            </p>
            <Link
              to="mailto:contact@Example.com"
              className=" bg-white text-black text-sm px-3 py-[6px] rounded-full! "
            >
              <span className="pi pi-envelope text-[9px] bg-black text-white p-[5px] mr-1 rounded-full"></span>
              contact@Example.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
