import { MenuProps } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useHeader = () => {
  const navigate = useNavigate();

  const [navUser] = useState<MenuProps["items"]>([
    {
      label: "asdas",
      key: "0",
    },
  ]);

  const onBack = () => {
    navigate("/profile", { replace: true });
  };

  return { navUser, onBack };
};
