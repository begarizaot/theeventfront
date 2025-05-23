import { useEffect, useState } from "react";
import {
  getListCountries,
  getTeamTypeRol,
  getValidateEmail,
  postCreateTeamAccess,
  putUpdateTeamAccess,
} from "../../../../../../store/thunks";
import { Form, message } from "antd";
import { getLocalStorage } from "../../../../../../hooks";

export const useCreateEditTeam = ({ data, onEditCreateTeam }: any) => {
  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();

  const [teamRole, setTeamRole] = useState<any[]>([]);
  const [listCoutries, setListCoutries] = useState<any[]>([]);
  const [disableText, setDisableText] = useState(false);
  const [loading, setLoading] = useState(false);

  const eventShared = getLocalStorage("eventShared");

  useEffect(() => {
    fechTeamTypeRol();
    listCountries();
  }, []);

  useEffect(() => {
    onDataTeam();
  }, [data]);

  const onDataTeam = () => {
    onChangeData(
      {
        firstName: data?.user_id?.firstName ?? "",
        lastName: data?.user_id?.lastName ?? "",
        phoneNumber: data?.user_id?.phoneNumber ?? "",
        code: data?.user_id?.country_id?.code ?? "",
        type_role_id: data?.type_role_id?.id ?? null,
      },
      data?.user_id?.email
    );
    setDisableText(true);
  };

  const listCountries = async () => {
    const countries = await getListCountries();
    setListCoutries(countries);
  };

  const fechTeamTypeRol = async () => {
    const data = await getTeamTypeRol();
    setTeamRole(data);
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

  const onEditTeam = async (dataTeam: any) => {
    const dataEdit = {
      id: data.id,
      type_role_id: dataTeam.typeRol,
    };
    const { event_id } = eventShared;
    setLoading(true);
    try {
      await putUpdateTeamAccess(event_id.id_event, dataEdit);
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

  const onCreateTeam = async (dataTeam: any) => {
    const { event_id } = eventShared;
    setLoading(true);
    try {
      await postCreateTeamAccess(event_id.id_event, dataTeam);
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
    ]);
  };

  return {
    form,
    loading,
    teamRole,
    disableText,
    listCoutries,
    contextHolder,
    onValidateEmail,
    onCreateTeam,
    onEditTeam,
  };
};
