import { useEffect, useState } from "react";
import { Form, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAdminEventDetail,
  editTicketEvents,
  createTicketEvents,
  putUpdateEvent,
  putUpdateEventImage,
  postCreateEvent,
} from "../../../../store/thunks";
import { setLocalStorage, useImageUpload, useMoment } from "../../../../hooks";

export const useCreateEvent = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const { beforeUpload, file, preview } = useImageUpload();

  const [isCreateEditTable, setIsCreateEditTable] = useState(false);
  const [isCreateEditTicket, setIsCreateEditTicket] = useState(false);

  const [listTickets, setListTickets] = useState<any[]>([]);
  const [dataTicketType, setDataTicketType] = useState({});

  const [listTables, setListTables] = useState<any[]>([]);
  const [dataTableType, setDataTableType] = useState({});

  const [eventData, setEventData] = useState<any>({});

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingEdit, setIsLoadingEdit] = useState(true);

  useEffect(() => {
    if (id) {
      fechEventDetail();
    } else {
      onClearForm();
    }
  }, [id]);

  useEffect(() => {
    preview &&
      setEventData((prev: any) => ({
        ...prev,
        image: preview,
      }));
  }, [preview]);

  const onClearForm = () => {
    form.resetFields();
    setEventData({});
    setListTickets([]);
    setListTables([]);
    setIsLoadingEdit(true);
  };

  const fechEventDetail = async () => {
    setIsLoadingEdit(false);
    const event = await getAdminEventDetail(id);
    form.setFieldsValue({
      ...event,
      startEndDate: [useMoment(event.start_date), useMoment(event.end_date)],
      location: event?.event_locations_id?.formatted_address || "",
      vanue: event?.vanue || event?.event_locations_id?.vicinity || "",
      age_restrictions: event?.event_restriction_id?.id || undefined,
      categories: event?.categories_id?.id || undefined,
      artists:
        (event?.artists_ids ?? [])?.map((artist: any) => artist.id) ||
        undefined,
    });

    setEventData({
      id_event: event?.id || "",
      imageEvent: event?.url_image || "",
    });

    const listTicktes =
      (event?.event_tickets_ids ?? [])?.map((ticket: any) => ({
        ...ticket,
        startEndDate: [useMoment(ticket.start_date), useMoment(ticket.end_date)],
        price: Number(ticket.price),
        codePassword: ticket?.codePassword || "",
        enableAdv: true,
        requitePass: ticket?.requitePass ? true : false,
      })) || [];

    setListTickets(
      (listTicktes ?? [])
        .map((ticket: any, index: any) => {
          return { ...ticket, idItem: index + 1 };
        })
        .filter((ticket: any) => !ticket.isTable)
    );
    setListTables(
      (listTicktes ?? [])
        .map((ticket: any, index: any) => {
          return { ...ticket, idItem: index + 1 };
        })
        .filter((ticket: any) => ticket.isTable)
    );

    setIsLoadingEdit(true);
  };

  const onShowCreateEditTable = (ev?: any) => {
    setIsCreateEditTable(!isCreateEditTable);
    setDataTableType(ev || {});
  };

  const onShowDeleteTable = (ev: any) => {
    setListTables((prev: any[]) =>
      (prev ?? [])
        .filter((item) => item.idItem !== ev.idItem)
        .map((item, index) => ({
          ...item,
          idItem: index + 1,
        }))
    );
  };

  const onShowCreateEditTicket = (ev?: any) => {
    setIsCreateEditTicket(!isCreateEditTicket);
    setDataTicketType(ev || {});
  };

  const onShowDeleteTicket = (ev: any) => {
    setListTickets((prev: any[]) =>
      (prev ?? [])
        .filter((item) => item.idItem !== ev.idItem)
        .map((item, index) => ({
          ...item,
          idItem: index + 1,
        }))
    );
  };

  const onFormatDate = (date?: any) => {
    return useMoment(date).format("YYYY-MM-DD hh:mm:ss");
  };

  const formatItem = (ev: any) => {
    return {
      ...ev,
      start_date: ev?.startEndDate
        ? onFormatDate(ev.startEndDate[0])
        : onFormatDate(form.getFieldValue("startEndDate")?.[0]),
      end_date: ev?.startEndDate
        ? onFormatDate(ev.startEndDate[1])
        : onFormatDate(form.getFieldValue("startEndDate")?.[0]),
      price: Number(ev.price),
    };
  };

  const createItem = (setList: any) => async (ev: any) => {
    if (id) {
      onFechCreateTicketEvents(ev).then(() => {
        onCreateItem(setList)(ev);
      });
      return;
    }
    onCreateItem(setList)(ev);
  };

  const onCreateItem = (setList: any) => async (ev: any) => {
    setList((prev: any[]) => [
      ...prev,
      {
        idItem: prev.length + 1,
        ...formatItem(ev),
        isVisible: true,
      },
    ]);
  };

  const editItem = (setList: any) => async (ev: any) => {
    if (id) {
      await onFechEditTicketEvents(ev).then(() => {
        resEditItem(setList)(ev);
      });
      return;
    }

    resEditItem(setList)(ev);
  };

  const resEditItem = (setList: any) => (ev: any) => {
    setList((prev: any[]) =>
      prev.map((item) =>
        item.idItem === ev.idItem ? { ...item, ...formatItem(ev) } : item
      )
    );
  };

  const onPlaceSelected = (place: any, field: string) => {
    form.setFieldsValue({
      [field]: place.formatted_address,
      vanue: place.vicinity,
    });
    setEventData((prev: any) => ({
      ...prev,
      place,
    }));
  };

  const onImageChange = (image: any) => {
    beforeUpload(image);
  };

  // Uso
  const onCreateTicketType = createItem(setListTickets);
  const onEditTicketType = editItem(setListTickets);

  const onCreateTableType = createItem(setListTables);
  const onEditTableType = editItem(setListTables);

  const onCreateEvent = async (ev: any) => {
    if (!eventData.image) {
      messageApi.open({
        type: "error",
        content: "Please upload an event image!",
      });
      return;
    }

    if (listTickets.length === 0) {
      messageApi.open({
        type: "error",
        content: "Please create at least one ticket type!",
      });
      return;
    }

    try {
      setIsLoading(true);
      const res = {
        ...ev,
        ...eventData,
        tickests: [...listTickets, ...listTables],
      };
      delete res.image;
      const dataRes = await postCreateEvent(res);
      file && (await putUpdateEventImage(dataRes?.id_event, file));
      setIsLoading(false);
      await setLocalStorage("eventShared", dataRes);
      navigate(`/admin/eventDetails/${dataRes?.id_event}`, {
        replace: true,
      });
    } catch (error: any) {
      setIsLoading(false);
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  };

  const onEditEvent = async (ev: any) => {
    try {
      setIsLoading(true);
      console.log(ev);
      const res = { ...ev, ...eventData };
      delete res.image;
      await putUpdateEvent(id, res);
      file && putUpdateEventImage(id, file);
      setIsLoading(false);
      navigate(`/admin/eventDetails/${id}`, {
        replace: true,
      });
    } catch (error: any) {
      setIsLoading(false);
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  };

  const onFechEditTicketEvents = async (data: any) => {
    return new Promise(async (resolve, reject) => {
      try {
        setIsLoading(true);
        await editTicketEvents(id, data);
        setIsLoading(false);
        resolve(true);
      } catch (error: any) {
        setIsLoading(false);
        messageApi.open({
          type: "error",
          content: error,
        });
        reject(error);
      }
    });
  };

  const onFechCreateTicketEvents = async (data: any) => {
    return new Promise(async (resolve, reject) => {
      try {
        setIsLoading(true);
        await createTicketEvents(id, data);
        setIsLoading(false);
        resolve(true);
      } catch (error: any) {
        setIsLoading(false);
        messageApi.open({
          type: "error",
          content: error,
        });
        reject(error);
      }
    });
  };

  return {
    form,
    isLoading,
    eventData,
    listTables,
    listTickets,
    dataTableType,
    contextHolder,
    isLoadingEdit,
    dataTicketType,
    isCreateEditTable,
    isCreateEditTicket,
    onShowCreateEditTable,
    onShowCreateEditTicket,
    onCreateTicketType,
    onCreateTableType,
    onShowDeleteTable,
    onShowDeleteTicket,
    onEditTicketType,
    onEditTableType,
    onPlaceSelected,
    onImageChange,
    onCreateEvent,
    onEditEvent,
  };
};
