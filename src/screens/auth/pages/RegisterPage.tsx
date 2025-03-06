import "../scss/general.scss";
import { useState } from "react";
import { Button, DatePicker, Form, Input } from "antd";
import { Link } from "react-router-dom";

import { SegmentedCom } from "../../../ui/components";
import { BgAuth, BtnAuth } from "../components";

export const RegisterPage = () => {
  const [form] = Form.useForm();

  const [passwordShow, setPasswordShow] = useState(false);

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      name="login"
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className="grid grid-cols-1 sm:grid-cols-5 h-screen text-white!"
    >
      <BgAuth />
      <div
        className="
        col-span-3 px-8 h-full flex 
        sm:items-center 
        py-3 sm:py-0
        bgAuth"
      >
        <div className="grid grid-cols-1 w-full">
          <h1 className="font-bold text-2xl sm:text-3xl">Create an account</h1>
          <p className="text-xs sm:mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
            lectus nec enim tempor suscipit.
          </p>
          <div className="mt-4">
            <p className="mb-1">Select user type</p>
            <SegmentedCom
              options={["Event Goers", "Organizers"]}
              onChange={(e) => console.log(e)}
            />
          </div>
          <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
            <p className="text-sm font-black">Enter details</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="col-span-1">
                <Form.Item
                  className="m-0!"
                  name="fullName"
                  label={<span className="text-white">Full Name</span>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    placeholder="Full Name"
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
              </div>
              <div className="col-span-1">
                <Form.Item
                  className="m-0!"
                  name="phoneNumber"
                  label={<span className="text-white">Phone Number</span>}
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
              <div className="col-span-1">
                <Form.Item
                  className="m-0!"
                  name="password"
                  label={<span className="text-white">Password</span>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    placeholder="**********"
                    className="rounded-full! bg-transparent! border-white! text-white!"
                    classNames={{
                      input: "placeholder-white/20! py-[1.5px]!",
                    }}
                    suffix={
                      <span
                        className={`pi pi-${
                          !passwordShow ? "eye" : "eye-slash"
                        }`}
                        onClick={() => setPasswordShow(!passwordShow)}
                      ></span>
                    }
                    type={passwordShow ? "text" : "password"}
                    autoComplete="off"
                  />
                </Form.Item>
              </div>
              <div className="col-span-1">
                <Form.Item
                  className="m-0!"
                  name="password"
                  label={<span className="text-white">Password</span>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    placeholder="**********"
                    className="rounded-full! bg-transparent! border-white! text-white!"
                    classNames={{
                      input: "placeholder-white/20! py-[1.5px]!",
                    }}
                    suffix={
                      <span
                        className={`pi pi-${
                          !passwordShow ? "eye" : "eye-slash"
                        }`}
                        onClick={() => setPasswordShow(!passwordShow)}
                      ></span>
                    }
                    type={passwordShow ? "text" : "password"}
                    autoComplete="off"
                  />
                </Form.Item>
              </div>
              <div className="col-span-1">
                <Form.Item
                  className="m-0!"
                  name="dateOfBirth"
                  label={<span className="text-white">Date of Birth</span>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <DatePicker className="rounded-full! bg-transparent! w-full py-[5px]! border-white! hover:border-white! focus-within:border-white!" />
                </Form.Item>
              </div>
            </div>
          </div>

          <Button
            htmlType="submit"
            className="w-full sm:w-28 lg:w-40 rounded-3xl! uppercase btnStyle bgPrimary"
          >
            <span className="font-bold text-xs">Sign up</span>
          </Button>

          <p className="mt-3 text-center sm:text-left">
            Already have an account?
            <Link to="/auth/login" className="text-primary ml-1">
              Login
            </Link>
          </p>

          <BtnAuth />
        </div>
      </div>
    </Form>
  );
};
