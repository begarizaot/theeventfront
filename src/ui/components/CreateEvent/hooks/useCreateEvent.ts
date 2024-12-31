import { useEffect, useRef, useState } from "react";
import { useForm } from "../../../../hooks";
import { theEventApi } from "../../../../apis";
import { RemoveCharacters } from "../../../../helpers";

export const useCreateEvent = ({
  createUpdateEvent,
  ticktes,
  edit,
  dataReq,
}: any) => {
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

  useEffect(() => {
    if (dataReq?.id) {
      onSetInput(dataReq);
    }
  }, [dataReq]);

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

    if (!formState.image && !edit) {
      errorRes.current.show({
        severity: "error",
        summary: "Error",
        detail: "Please upload an image",
        life: 3000,
      });
      return;
    }

    if (ticktes.length === 0) {
      errorRes.current.show({
        severity: "error",
        summary: "Error",
        detail: "Please add at least one ticket",
        life: 3000,
      });
      return;
    }

    createUpdateEvent({
      ...formState,
      contact_phone: RemoveCharacters(formState.contact_phone),
    });
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
