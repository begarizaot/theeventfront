import { useEffect, useState } from "react";
import {
  getListCountries,
  getValidateEmail,
  postCreateEventAffiliate,
  putUpdateEventAffiliate,
} from "../../../../../../store/thunks";
import { Form, message } from "antd";
import { getLocalStorage, useMoment } from "../../../../../../hooks";

export const useCreateEditTeam = ({ data, onEditCreateTeam }: any) => {
  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();

  const [listCoutries, setListCoutries] = useState<any[]>([]);
  const [disableText, setDisableText] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disableValue, setDisableValue] = useState(false);

  const eventShared = getLocalStorage("eventShared");

  useEffect(() => {
    listCountries();
  }, []);

  useEffect(() => {
    onDataEventAffiliate();
  }, [data]);

  const onDataEventAffiliate = () => {
    onChangeData(
      {
        firstName: data?.user_id?.firstName ?? "",
        lastName: data?.user_id?.lastName ?? "",
        phoneNumber: data?.user_id?.phoneNumber ?? "",
        code: data?.user_id?.country_id?.code ?? "",
        type_role_id: data?.type_role_id?.id ?? null,
        value: data?.value ?? "",
        expirationDate: data?.expiration_date
          ? useMoment(data?.expiration_date)
          : null,
        state: data?.state ?? true,
      },
      data?.user_id?.email
    );

    data?.orders_id && data?.orders_id?.length > 0 && setDisableValue(true);
    setDisableText(true);
  };

  const listCountries = async () => {
    const countries = await getListCountries();
    setListCoutries(countries);
  };

  const onValidateEmail = async (ev: any) => {
    if (!ev) return onChangeData({});

    setLoading(true);
    try {
      const dataUser = await getValidateEmail(String(ev).toLocaleLowerCase());
      onChangeData(dataUser);
      setLoading(false);
      dataUser.firstName ? setDisableText(true) : setDisableText(false);
    } catch (error: any) {
      form.setFields([
        {
          name: "email",
          errors: [error],
        },
      ]);
      setLoading(false);
    }
  };

  const onEditAffiliate = async (dataReq: any) => {
    const dataEdit = {
      id: data.id,
      ...dataReq,
    };
    const { id_event } = eventShared;
    setLoading(true);
    try {
      await putUpdateEventAffiliate(id_event, dataEdit);
      setLoading(false);
      onEditCreateTeam();
    } catch (error: any) {
      setLoading(false);
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  };

  const onCreateAffiliate = async (dataReq: any) => {
    const { id_event } = eventShared;
    setLoading(true);
    try {
      await postCreateEventAffiliate(id_event, dataReq);
      setLoading(false);
      onEditCreateTeam();
    } catch (error: any) {
      setLoading(false);
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  };

  const onChangeData = (ev: any, email?: any) => {
    form.setFields([
      ...(email
        ? [
            {
              name: "email",
              value: email ?? "",
            },
          ]
        : []),
      {
        name: "firstName",
        value: ev?.firstName ?? "",
      },
      {
        name: "lastName",
        value: ev?.lastName ?? "",
      },
      {
        name: "phone",
        value: ev?.phoneNumber ?? "",
      },
      {
        name: "country",
        value: ev?.code ?? ev?.country_id?.code ?? null,
      },
      {
        name: "typeRol",
        value: ev?.type_role_id ?? null,
      },
      {
        name: "value",
        value: ev?.value ?? "",
      },
      {
        name: "expirationDate",
        value: ev?.expirationDate ?? null,
      },
      {
        name: "state",
        value: ev?.state ?? null,
      },
    ]);
  };

  return {
    form,
    loading,
    disableText,
    listCoutries,
    contextHolder,
    disableValue,
    onValidateEmail,
    onCreateAffiliate,
    onEditAffiliate,
  };
};
