import { useState } from "react";

interface FormState {
  [key: string]: any;
  formState: any;
  onInputChange: (event: any) => void;
  onResetForm: () => void;
}

export const useForm = (initialForm = {}): FormState => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: any) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
