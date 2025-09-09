import "../scss/general.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";

import { BgAuth } from "../components";
import { AuthContext, UserContext } from "../../../context";
import { postValidateOTP } from "../../../store/thunks";

export const OtpPages = () => {
  const navigate = useNavigate();

  const { infoDate, onLoading, onError, onValueInfo } = useContext(AuthContext);
  const { onValueUser } = useContext(UserContext);

  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    onLoading(true);
    try {
      const res = await postValidateOTP({ ...values, ...infoDate });
      onValueUser(res);
      onValueInfo({});
      onLoading(false);
      navigate(`/`, { replace: true });
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
            <h1 className="font-bold text-2xl sm:text-3xl text-center sm:text-start">
              Enter your OTP code
            </h1>

            <div className="mt-0 sm:mt-6 mb-6 sm:mb-8">
              {/* <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3"> */}
                <div className="col-span-1">
                  <Form.Item
                    className="m-0!"
                    name="otp"
                    label={<span className="text-white">OTP</span>}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input.OTP
                      formatter={(str) => str.toUpperCase()}
                      length={4}
                      className="w-full!"
                      type="number"
                    />
                  </Form.Item>
                {/* </div> */}
              </div>
            </div>

            <Button
              htmlType="submit"
              className="w-full sm:w-28 lg:w-40 rounded-3xl! uppercase btnStyle btnbgPrimary"
            >
              <span className="font-bold text-xs">Validate</span>
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};
