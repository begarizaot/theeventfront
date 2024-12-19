import { useEffect, useState } from "react";

export const PasswordMust = () => {
  const [passwordMust, setPasswordMust] = useState<any[]>([]);

  useEffect(() => {
    listPasswordMust();
  }, []);

  const listPasswordMust = () => {
    setPasswordMust([
      {
        label: "Be at least 6 characters long",
        status: false,
        pattern: /.{6,}/,
      },
      {
        label: "Contain at least one uppercase letter",
        status: false,
        pattern: /^(?=.*[A-Z])/,
      },
      {
        label: "Contain at least one number",
        status: false,
        pattern: /(.*[0-9].*)/,
      },
    ]);
  };

  const checkPassword = (password: string) => {
    const newPasswordMust = passwordMust.map((item) => {
      const status = item.pattern.test(password);
      return {
        ...item,
        status,
      };
    });

    setPasswordMust(newPasswordMust);
  };
  return { passwordMust, checkPassword };
};
