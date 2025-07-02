import "../scss/general.scss";
import { useContext, useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { BgAuth } from "../components";
import { AuthContext } from "../../../context";
import { TextPrimary } from "../../../components";
import { getListCountries, postRegister } from "../../../store/thunks";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const { onLoading, onError, onValueInfo } = useContext(AuthContext);

  const [listCoutries, setListCoutries] = useState([]);

  useEffect(() => {
    listCountries();
  }, []);

  const listCountries = async () => {
    const countries = await getListCountries();
    setListCoutries(countries);
  };

  const onFinish = async (values: any) => {
    onLoading(true);
    try {
      const res = await postRegister(values);
      await onValueInfo(res);
      onLoading(false);
      navigate(`/auth/otp`);
    } catch (error) {
      onError(error as string);
      onLoading(false);
    }
  };

  return (
    <Form
      name="login"
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className="grid grid-cols-1 sm:grid-cols-5 min-h-screen text-white!"
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
          <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
            <p className="text-sm font-black">Enter details</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="col-span-1">
                <Form.Item
                  className="m-0!"
                  name="firstName"
                  label={<span className="text-white">First Name</span>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    placeholder="First Name"
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
              </div>
              <div className="col-span-2">
                <div className="grid gap-2">
                  <span className="text-white">
                    <span className="text-red-400">*</span> Phone
                  </span>
                  <div className="col-span-1 grid grid-cols-3 gap-2">
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
                        placeholder="Select Query"
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
                      name="phone"
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
                        className="rounded-full! bg-transparent! w-full! text-white! py-[0px]! border-white! styleNumberInput"
                        placeholder="Phone Number"
                        inputMode="numeric"
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
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
            </div>
          </div>

          <Button
            htmlType="submit"
            className="w-full sm:w-28 lg:w-40 rounded-3xl! uppercase btnStyle btnbgPrimary"
          >
            <span className="font-bold text-xs">Sign up</span>
          </Button>

          <p className="mt-3 text-center sm:text-left">
            Already have an account?
            <Link to="/auth/login">
              <TextPrimary label="Login" className="ml-1" />
            </Link>
          </p>

          {/* <BtnAuth /> */}
        </div>
      </div>
    </Form>
  );
};
