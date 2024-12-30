import { useContext } from "react";

import { AuthContext, LoadingContext } from "../../../../../context";
import { useForm } from "../../../../../hooks";
import { PasswordMust } from "../../../../../helpers";
import { theEventApi } from "../../../../../apis";

export const useRegister = () => {
  const authContext = useContext(AuthContext);
  const { showLoading } = useContext(LoadingContext);

  const { showRegister, onLogin, errorRes } = authContext;

  const passMust = PasswordMust();
  const { passwordMust } = passMust;

  const formData = useForm({
    firstName: "",
    lastName: "",
    email: "",
    phone: null,
    password: "",
    passwordConfirm: "",
    recache: null,
  });

  const { formState, onSetInput, onResetForm } = formData;

  const onValidatePassword = () => {
    const pass = passwordMust.filter((item) => !item.status).length === 0;
    if (!pass) {
      messageError("Please check your password");
      return true;
    }

    if (formState.password !== formState.passwordConfirm) {
      messageError("Password and Confirm Password must be the same");
      return true;
    }

    // if (!formState.recache) {
    //   messageError("Please complete the CAPTCHA");
    //   return true;
    // }

    return false;
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    const valPass = onValidatePassword();
    if (valPass) return;

    showLoading(true);
    try {
      const { data } = await theEventApi.post(
        "auth/postRegisterUser",
        formState
      );
      showLoading();
      if (!data.status) {
        messageError(data.message);
        return;
      }
      
      onLogin(data.data);
      showRegister();
      onResetForm();
    } catch (error) {
      messageError("validate information");
      showLoading();
    }
  };

  const messageError = (detail: any) => {
    errorRes.current.show({
      severity: "error",
      summary: "Error",
      detail: detail,
      life: 3000
    });
  };

  const onCaptchaChange = (token: any) => {
    onSetInput({ recache: token });
  };

  return {
    handleRegister,
    onCaptchaChange,
    ...passMust,
    ...formData,
    ...authContext,
  };
};
