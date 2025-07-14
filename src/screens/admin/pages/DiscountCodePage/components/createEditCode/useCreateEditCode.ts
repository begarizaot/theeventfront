import { useEffect, useState } from "react";
import {
  postCreateDiscountCode,
  putUpdateDiscountCode,
} from "../../../../../../store/thunks";
import { Form, message } from "antd";
import { getLocalStorage, useMoment } from "../../../../../../hooks";

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
    const { id_event } = eventShared;
    setLoading(true);
    try {
      await putUpdateDiscountCode(id_event, dataEdit);
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
    const { id_event } = eventShared;
    setLoading(true);
    try {
      await postCreateDiscountCode(id_event, dataTeam);
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
          value: useMoment(ev?.start_date ?? ""),
        },
        {
          name: "end_date",
          value: useMoment(ev?.end_date ?? ""),
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
