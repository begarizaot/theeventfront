import { Form } from "antd";
import usePhoneInput from "../../../../hooks/usePhoneInput";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../context";

export const useRegister = () => {
  const { onShowLogin, onShowOtp } = useContext(AuthContext);

  const [form] = Form.useForm();

  const phoneInput = usePhoneInput();

  const onBackToLogin = () => {
    onShowLogin(true);
  };

  const onResetInfo = () => {
    form.resetFields();
  };

  const onCaptchaChange = (ev: any) => {
    console.log(ev);
  };

  const onFinish = (values: any) => {
    console.log(values);
    onShowOtp(true);
  };

  return {
    form,
    phoneInput,
    onFinish,
    onResetInfo,
    onBackToLogin,
    onCaptchaChange,
  };
};
