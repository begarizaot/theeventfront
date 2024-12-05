import { useContext } from "react";
import { AuthContext, LoadingContext } from "../../../../../context";
import { useForm } from "../../../../../hooks";
import { theEventApi } from "../../../../../apis";

export const useLogin = () => {
  const { showLoading } = useContext(LoadingContext);
  const authContext = useContext(AuthContext);

  const formData = useForm({
    email: "",
    password: "",
  });

  const { formState, onResetForm } = formData;
  const { showLogin, onLogin, errorRes } = authContext;

  const handleLogin = async (e: any) => {
    e.preventDefault();
    showLoading(true);

    try {
      const { data } = await theEventApi.post("auth/postLoginUser", formState);
      showLoading();
      if (!data.status) {
        onError(data.message);
        return;
      }

      onLogin(data.data);
      onResetForm();
      showLogin();
    } catch (error) {
      onError("User not found");
      showLoading();
    }
  };

  const onError = (error: any) => {
    errorRes.current.show({
      severity: "error",
      summary: "Error",
      detail: error,
    });
  };

  return { handleLogin, ...formData, ...authContext };
};
