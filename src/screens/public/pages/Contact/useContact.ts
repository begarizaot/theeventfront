import { useForm } from "../../../../hooks";

export const useContact = () => {
  const formData = useForm({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSutmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return { ...formData, handleSutmit };
};
