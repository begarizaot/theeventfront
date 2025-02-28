import "../scss/login.scss";
import { useState } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

import bgImage from "../../../assets/auth/login.png";
import logo from "../../../assets/logoWhite.png";

export const LoginPages = () => {
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
      <div
        className="
          col-span-2 
          bg-cover bg-center
          px-8 sm:px-10 
          py-6 sm:py-8"
        style={{
          backgroundImage: `linear-gradient(180deg, #121212 1.6%, rgba(18, 18, 18, 0) 51.29%, #121212 100%), url(${bgImage})`,
        }}
      >
        <div className="h-full flex flex-col">
          <Link to={`/`} className="w-45">
            <img src={logo} alt="logo" />
          </Link>

          <div className="mt-auto">
            <h1 className="text-2xl font-bold">Lorem ipsum</h1>
            <p className="text-xs mt-4 h-8 sm:h-auto overflow-hidden overflow-ellipsis">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sit amet tellus non risus ullamcorper pulvinar ut eu ex. In libero
              mi, suscipit semper est vitae, euismod porttitor velit. In non
              metus diam. Duis elit metus, dapibus nec libero vel, accumsan
              porttitor mauris. Mauris condimentum blandit eros, ac dignissim
              lectus malesuada luctus.
            </p>
          </div>
        </div>
      </div>
      <div
        className="
        col-span-3 px-8 h-full flex 
        sm:items-center 
        py-3 sm:py-0
        bgLogin"
      >
        <div className="grid grid-cols-1 w-full">
          <h1 className="font-bold text-2xl sm:text-3xl">
            Login to your account
          </h1>
          <p className="text-xs sm:mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
            lectus nec enim tempor suscipit.
          </p>
          <div className="mt-2 sm:mt-6 mb-6 sm:mb-8">
            <p className="text-sm font-black">Enter details</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="col-span-1">
                <Form.Item
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
                      input: "placeholder-white/20! py-[4px]!",
                    }}
                    prefix={<span className="pi pi-envelope mr-1"></span>}
                    inputMode="email"
                    autoComplete="off"
                  />
                </Form.Item>
              </div>
              <div className="col-span-1">
                <Form.Item
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
                      input: "placeholder-white/20! py-[4px]!",
                    }}
                    prefix={<span className="pi pi-lock mr-1"></span>}
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

                <Link to={`/forgot-password`} className="text-sm text-primary">
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>

          <Button
            htmlType="submit"
            className="w-full sm:w-28 lg:w-40 rounded-3xl! uppercase btnStyle bgPrimary"
          >
            <span className="font-bold text-xs">Login</span>
          </Button>

          <p className="mt-3 text-center sm:text-left">
            Don’t have an account?
            <Link to="" className="text-primary ml-1">
              Sign Up
            </Link>
          </p>

          <p className="separator my-3 sm:my-5">Or login with</p>

          <div className="grid grid-cols-3 gap-3">
            <Button
              className="rounded-3xl! uppercase btnStyle"
              icon={<span className="pi pi-facebook"></span>}
            >
              <span className="font-bold text-xs hidden sm:block">
                Facebook
              </span>
            </Button>
            <Button
              className="rounded-3xl! uppercase btnStyle"
              icon={<span className="pi pi-apple"></span>}
            >
              <span className="font-bold text-xs hidden sm:block">Apple</span>
            </Button>

            <Button
              className="rounded-3xl! uppercase btnStyle"
              icon={<span className="pi pi-facebook"></span>}
            >
              <span className="font-bold text-xs hidden sm:block">
                Facebook
              </span>
            </Button>
          </div>
        </div>
      </div>
    </Form>
  );
};
