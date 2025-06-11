import "../scss/general.scss";
import { useContext, useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { getListCountries, postLogin } from "../../../store/thunks";
import { SegmentedCom, TextPrimary } from "../../../components";
import { AuthContext } from "../../../context";
import { BgAuth } from "../components";

export const LoginPages = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const { onLoading, onError, onValueInfo } = useContext(AuthContext);

  const [selectForm, setSelectForm] = useState("Phone");
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
      const res = await postLogin({ ...values, type: selectForm });
      await onValueInfo(res);
      onLoading(false);
      navigate(`/auth/otp`);
    } catch (error) {
      onError(error as string);
      onLoading(false);
    }
  };

  return (
    <>
      <Form
        name="login"
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="grid grid-cols-1 sm:grid-cols-5 min-h-screen text-white!"
        autoFocus={false}
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
            <h1 className="font-bold text-2xl sm:text-3xl">
              Login to your account
            </h1>
            {/* <p className="text-xs sm:mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
            lectus nec enim tempor suscipit.
          </p> */}

            <div className="mt-4">
              <p className="mb-1">Select </p>
              <SegmentedCom
                options={["Phone", "Email"]}
                onChange={(ev: any) => setSelectForm(ev)}
              />
            </div>
            <div className="mt-2 sm:mt-6 mb-6 sm:mb-8">
              <p className="text-sm font-black">Enter details</p>
              <div className="mt-4 grid grid-cols-1 gap-3">
                {selectForm == "Email" && (
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
                )}
                {selectForm == "Phone" && (
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
                            `${value}`.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 $3')
                          }
                          className="rounded-full! bg-transparent! w-full! text-white! py-[0px]! border-white! styleNumberInput"
                          placeholder="Phone Number"
                        />
                      </Form.Item>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Button
              htmlType="submit"
              className="w-full sm:w-28 lg:w-40 rounded-3xl! uppercase btnStyle btnbgPrimary"
            >
              <span className="font-bold text-xs">Login</span>
            </Button>

            <p className="mt-3 text-center sm:text-left">
              Don’t have an account?
              <Link to="/auth/register">
                <TextPrimary label="Sign Up" className="ml-1" />
              </Link>
            </p>
          </div>
        </div>
      </Form>
    </>
  );
};
