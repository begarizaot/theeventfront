import { useEffect } from "react";
import { useForm } from "../../../../hooks";

export const useNewTickes = (evReq: any) => {
  const {
    formState,
    onInputChange,
    onCheckboxChange,
    onResetForm,
    setAutocompleteOff,
    onSetInput,
  } = useForm({
    name: "",
    price: null,
    max_capacity: null,
    event_capacity: null,
    color: "cf0032",
    description: "",
    available: false,
    start_date: "",
    end_date: "",
  });

  useEffect(() => {
    if (evReq.data.name) {
      onSetInput(evReq.data);
    }else{
      onResetForm();
    }
  }, [evReq.data]);

  const onSubmitTicket = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    evReq.submitTicket(formState);
    onResetForm();
  };

  return {
    formState,
    onResetForm,
    onInputChange,
    onSubmitTicket,
    onCheckboxChange,
    setAutocompleteOff,
  };
};
