import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "../../../../../../hooks";
import { LoadingContext } from "../../../../../../context";
import {
  postDiscountCreateEvent,
  putDiscountEditEvent,
} from "../../../../../../store/slices";

export const useCreateCode = ({
  eventId,
  createUdateCode,
  showVisible,
  data,
}: any) => {
  const { showLoading, hiddenLoading } = useContext(LoadingContext);

  const errorRes = useRef<any>(null);

  const [stateList] = useState([
    { label: "$", value: "val" },
    { label: "%", value: "por" },
  ]);

  const { formState, onInputChange, onResetForm, onSetInput } = useForm({
    name: null,
    state: "",
    value: null,
    amount: null,
    start_date: null,
    end_date: null,
  });

  useEffect(() => {
    if (data.id) {
      onSetInput(data);
    }
  }, [data]);

  const createCode = async (ev: any) => {
    ev.preventDefault();
    showLoading(true);
    postDiscountCreateEvent(eventId, formState)
      .then(() => {
        createUdateCode();
        showVisible();
      })
      .catch((error) => {
        errorRes.current.show({
          severity: "error",
          summary: "Error",
          detail: error,
          life: 3000,
        });
      })
      .finally(() => {
        hiddenLoading();
      });
  };

  const updateCode = async (ev: any) => {
    ev.preventDefault();
    showLoading(true);
    putDiscountEditEvent(eventId, formState)
      .then(() => {
        createUdateCode();
        showVisible();
      })
      .catch((error) => {
        errorRes.current.show({
          severity: "error",
          summary: "Error",
          detail: error,
          life: 3000,
        });
      })
      .finally(() => {
        hiddenLoading();
      });
  };

  return {
    formState,
    stateList,
    errorRes,
    onInputChange,
    createCode,
    updateCode,
    onResetForm,
  };
};
