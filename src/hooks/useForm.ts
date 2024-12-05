import { useRef, useState } from "react";

interface FormState {
  [key: string]: any;
  formState: any;
  onInputChange: (event: any) => void;
  onCheckboxChange: (event: any) => void;
  onResetForm: () => void;
  setAutocompleteOff: (index: any) => (el: any) => void;
  onSetInput: (data: any) => void;
}

export const useForm = (initialForm = {}): FormState => {
  const inputRefs = useRef<any>([]);

  const [formState, setFormState] = useState(initialForm);

  const onInputChange = (ev: any) => {
    const { name, value } = ev.target || ev.originalEvent.target;
    setFormState({
      ...formState,
      [name]: ev.value || value,
    });
  };

  const onSetInput = (data: any) => {
    setFormState({
      ...formState,
      ...data,
    });
  };

  const onCheckboxChange = (ev: any) => {
    const { name } = ev.target;
    setFormState({
      ...formState,
      [name]: ev.checked,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const setAutocompleteOff = (index: any) => (el: any) => {
    if (el) {
      el.setAttribute("autocomplete", "off");
      inputRefs.current[index] = el;
    }
  };

  return {
    ...formState,
    formState,
    onSetInput,
    onResetForm,
    onInputChange,
    onCheckboxChange,
    setAutocompleteOff,
  };
};
