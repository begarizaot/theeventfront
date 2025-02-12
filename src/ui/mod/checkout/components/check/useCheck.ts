import { Form } from "antd";

export const useCheck = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };
  return { form, onFinish };
};
