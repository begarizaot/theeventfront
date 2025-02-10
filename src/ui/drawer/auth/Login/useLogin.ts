import { Form } from "antd";
import { useState } from "react";
import usePhoneInput from "../../../../hooks/usePhoneInput";

export const useLogin = () => {
  const [form] = Form.useForm();

  const phoneInput = usePhoneInput();
  const { onReset } = phoneInput;

  const [navLogin] = useState([
    { label: "Phone", value: 0 },
    { label: "Email", value: 1 },
  ]);
  const [navIndex, setNavIndex] = useState(0);
  const [country, setCountry] = useState(null);

  const onNavChange = (index: number) => {
    onResetInfo();
    setNavIndex(index);
  };

  const onResetInfo = () => {
    form.resetFields();
    onReset();
    setCountry(null);
    setNavIndex(0);
  };

  const onSetCountry = (value: any) => {
    setCountry(value);
  };

  const onFinish = (values: any) => {
    console.log(country);
    console.log(values);
  };

  return {
    form,
    navIndex,
    navLogin,
    phoneInput,
    onSetCountry,
    onResetInfo,
    onNavChange,
    onFinish,
  };
};
