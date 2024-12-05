import { useEffect, useRef, useState } from "react";
import { useForm } from "../../../../hooks";
import { theEventApi } from "../../../../apis";

export const useCreateEvent = (dataReq: any) => {
  const errorRes = useRef<any>(null);

  const [listCategories, setListCategories] = useState<any>([]);
  const [listAgeRestrictions, setListAgeRestrictions] = useState<any>([]);
  const {
    formState,
    onInputChange,
    onResetForm,
    onSetInput,
    onCheckboxChange,
    setAutocompleteOff,
  } = useForm({
    image: null,
    event_name: "",
    youtube_url: "",
    contact_phone: null,
    venue: "",
    description: "",
    start_date: "",
    end_date: "",
    event_category: null,
    event_age_restriction: null,
    map: null,
    receiveSms: false,
  });

  useEffect(() => {
    getListCategories();
    getListAgeRestrictions();
  }, []);

  const getListCategories = async () => {
    const { data } = await theEventApi.get("event-categorie/getListCategories");
    setListCategories(data?.data || []);
  };

  const getListAgeRestrictions = async () => {
    const { data } = await theEventApi.get(
      "event-age-restriction/getListAgeRestriction"
    );
    setListAgeRestrictions(data?.data || []);
  };

  const onCreateEvent = (ev: any) => {
    ev.preventDefault();

    if (!formState.image) {
      errorRes.current.show({
        severity: "error",
        summary: "Error",
        detail: "Please upload an image",
      });
      return;
    }

    if (dataReq.ticktes.length === 0) {
      errorRes.current.show({
        severity: "error",
        summary: "Error",
        detail: "Please add at least one ticket",
      });
      return;
    }

    dataReq.createUpdateEvent(formState);
  };

  return {
    errorRes,
    formState,
    listCategories,
    listAgeRestrictions,
    onSetInput,
    onResetForm,
    onCreateEvent,
    onInputChange,
    onCheckboxChange,
    setAutocompleteOff,
  };
};
