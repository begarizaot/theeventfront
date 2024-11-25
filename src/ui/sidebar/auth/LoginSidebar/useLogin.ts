import { useContext } from "react";
import { AuthContext, LoadingContext } from "../../../../context";
import { useForm } from "../../../../hooks";

export const useLogin = () => {
  const { showLoading } = useContext(LoadingContext);
  const authContext = useContext(AuthContext);

  const formData = useForm({
    email: "",
    password: "",
  });

  const { formState, onResetForm } = formData;
  const { showLogin, onLogin } = authContext;

  const handleLogin = async (e: any) => {
    e.preventDefault();
    showLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      onLogin({ ...formState, token: "kabsdkjabsd" });
      console.log(formState);
      onResetForm();
      showLoading();
      showLogin();
    } catch (error) {
      showLoading();
    }
  };

  return { handleLogin, ...formData, ...authContext };
};
