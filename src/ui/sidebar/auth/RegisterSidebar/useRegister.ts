import { useContext, useEffect, useState } from "react";
import { passwordMustIntf } from "./intfRegister";
import { AuthContext } from "../../../../context";
import { useForm } from "../../../../hooks";

export const useRegister = () => {
  const authContext = useContext(AuthContext);

  const formData = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { formState } = formData;
  // const { showRegister } = authContext;

  const [passwordMust, setPasswordMust] = useState<passwordMustIntf[]>([]);

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

  const handleRegister = (e: any) => {
    e.preventDefault();
    const pass = passwordMust.filter((item) => !item.status).length === 0;
    if (!pass) {
      alert("Please check your password");
      return;
    }

    if (formState.password !== formState.passwordConfirm) {
      alert("Password and Confirm Password must be the same");
      return;
    }

    console.log(formState);
  };

  return {
    passwordMust,
    checkPassword,
    handleRegister,
    ...formData,
    ...authContext,
  };
};
