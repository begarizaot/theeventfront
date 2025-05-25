import { useEffect, useState } from "react";
import {
  postCreateDiscountCode,
  putUpdateDiscountCode,
  putUpdateTeamAccess,
} from "../../../../../../store/thunks";
import { Form, message } from "antd";
import { getLocalStorage } from "../../../../../../hooks";
import dayjs from "dayjs";

export const useCreateEditCode = ({ data, onEditCreateCode }: any) => {
  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const eventShared = getLocalStorage("eventShared");

  useEffect(() => {
    onDataTeam();
  }, [data]);

  const onDataTeam = () => {
    onChangeData(data);
  };

  const onEditCode = async (dataTeam: any) => {
    const dataEdit = {
      id: data.id,
      ...dataTeam,
    };
    const { event_id } = eventShared;
    setLoading(true);
    try {
      await putUpdateDiscountCode(event_id.id_event, dataEdit);
      setLoading(false);
      onEditCreateCode();
    } catch (error: any) {
      setLoading(false);
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  };

  const onCreateCode = async (dataTeam: any) => {
    const { event_id } = eventShared;
    setLoading(true);
    try {
      await postCreateDiscountCode(event_id.id_event, dataTeam);
      setLoading(false);
      onEditCreateCode();
    } catch (error: any) {
      setLoading(false);
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  };

  const onChangeData = (ev: any) => {
    ev?.id &&
      form.setFields([
        {
          name: "name",
          value: ev?.name ?? "",
        },
        {
          name: "state",
          value: ev?.state ?? null,
        },
        {
          name: "value",
          value: ev?.value ?? "",
        },
        {
          name: "stock_max",
          value: ev?.stock_max ?? "",
        },
        {
          name: "start_date",
          value: dayjs(ev?.start_date ?? ""),
        },
        {
          name: "end_date",
          value: dayjs(ev?.end_date ?? ""),
        },
      ]);
  };

  return {
    form,
    loading,
    contextHolder,
    onCreateCode,
    onEditCode,
  };
};
