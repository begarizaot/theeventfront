import { useContext } from "react";
import { useForm } from "../../../../hooks";
import { AuthContext } from "../../../../context";

export const useResetPassword = () => {
  const authContext = useContext(AuthContext);

  const formData = useForm({
    email: "",
  });

  const { formState } = formData;
  // const { showResetPassword } = authContext;

  const handleResetPassword = (e: any) => {
    e.preventDefault();
    console.log(formState);
  };

  return { handleResetPassword, ...formData, ...authContext };
};
