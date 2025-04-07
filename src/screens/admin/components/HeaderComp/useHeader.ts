import { MenuProps } from "antd";
import { useState } from "react";

export const useHeader = () => {
  const [navUser] = useState<MenuProps["items"]>([
    {
      label: "asdas",
      key: "0",
    },
  ]);

  return { navUser };
};
