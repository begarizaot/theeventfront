import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

import { useForm } from "../../../../../hooks";
import { PasswordMust } from "../../../../../helpers";
import { theEventApi } from "../../../../../apis";
import { AuthContext, LoadingContext } from "../../../../../context";

export const useProfile = () => {
  const navigate = useNavigate();

  const { showLoading } = useContext(LoadingContext);
  const { onLogin } = useContext(AuthContext);

  const errorRes = useRef<any>(null);

  const passMust = PasswordMust();
  const { passwordMust } = passMust;

  const { formState, onInputChange, onSetInput } = useForm({
    id: null,
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    phone: null,
    password: "",
    passwordConfirm: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData") || "{}");
    if (data) {
      onSetInput(data.user);
    }
  }, []);

  const onValidatePassword = () => {
    if (!formState.password) {
      return false;
    }
    const pass = passwordMust.filter((item) => !item.status).length === 0;
    if (!pass) {
      messageError("Please check your password");
      return true;
    }

    if (formState.password !== formState.passwordConfirm) {
      messageError("Password and Confirm Password must be the same");
      return true;
    }

    return false;
  };

  const onUpdateProfile = async (e: any) => {
    e.preventDefault();

    const valPass = onValidatePassword();
    if (valPass) return;

    showLoading(true);
    try {
      const { data } = await theEventApi.put("auth/putUpdateUser", formState);
      if (!data.status) {
        messageError(data.message);
        return;
      }

      onLogin(data.data);
      showLoading(false);
    } catch (error) {
      messageError("User not found");
      showLoading(false);
    }
  };

  const onLogout = () => {
    MySwal.fire({
      title: "are you sure?",
      text: "You will be logged out",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        onLogin({});
        navigate(`/`, { replace: true });
      }
    });
  };

  const messageError = (detail: any) => {
    errorRes.current.show({
      severity: "error",
      summary: "Error",
      detail: detail,
    });
  };

  return {
    ...passMust,
    errorRes,
    formState,
    onInputChange,
    onUpdateProfile,
    onLogout,
  };
};
