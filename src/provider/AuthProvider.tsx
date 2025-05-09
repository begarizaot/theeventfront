import { useState } from "react";
import { AuthContext } from "../context";
import { message, Spin } from "antd";

interface CheckoutProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: CheckoutProviderProps) => {
  const [messageApi, contextHolder] = message.useMessage();

  const [infoDate, setInfoDate] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  const onValueInfo = async (value: string) => {
    setInfoDate(value);
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const onLoading = async (value: boolean) => {
    setIsLoading(value);
  };

  const onError = async (value: string) => {
    messageApi.open({
      type: "error",
      content: value,
    });
  };

  return (
    <AuthContext.Provider value={{ onLoading, onValueInfo, onError, infoDate }}>
      {contextHolder}
      <Spin spinning={isLoading} fullscreen size="large" />
      {children}
    </AuthContext.Provider>
  );
};
