import { Form } from "antd";
import usePhoneInput from "../../../../hooks/usePhoneInput";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../context";

export const useRegister = () => {
  const { onShowLogin, onShowOtp } = useContext(AuthContext);

  const [form] = Form.useForm();

  const phoneInput = usePhoneInput();
  const [country, setCountry] = useState(null);

  const onSetCountry = (value: any) => {
    setCountry(value);
  };

  const onBackToLogin = () => {
    onShowLogin(true);
  };

  const onResetInfo = () => {
    form.resetFields();
    setCountry(null);
  };

  const onFinish = (values: any) => {
    console.log(country);
    console.log(values);
    onShowOtp(true);
  };

  return {
    form,
    phoneInput,
    onFinish,
    onResetInfo,
    onSetCountry,
    onBackToLogin,
  };
};
