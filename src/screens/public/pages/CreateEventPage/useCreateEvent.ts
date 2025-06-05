import { useEffect, useState } from "react";
import { useMoment } from "../../../../hooks";
import { Form, message } from "antd";
import { useParams } from "react-router-dom";
import { getAdminEventDetail, putTicketEvents } from "../../../../store/thunks";
import dayjs from "dayjs";

export const useCreateEvent = () => {
  const { id } = useParams();
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

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
      startEndDate: [dayjs(event.start_date), dayjs(event.end_date)],
      location: event?.event_locations_id?.formatted_address || "",
      venue: event?.event_locations_id?.vicinity || "",
      age_restrictions: event?.event_restriction_id?.id || undefined,
      categories: event?.event_categories_id?.id || undefined,
      artists: event?.artists_ids?.map((artist: any) => artist.id) || undefined,
      description:
        (event?.description ?? [])
          .map((desc: any) => desc?.children[0]?.text || "")
          .join("\n") || "",
    });

    setEventData({
      id_event: event?.id || "",
      imageEvent: event?.url_image || "",
    });

    const listTicktes =
      (event?.event_tickets_ids ?? [])?.map((ticket: any) => ({
        ...ticket,
        startEndDate: [dayjs(ticket.start_date), dayjs(ticket.end_date)],
        price: Number(ticket.price),
        description:
          (ticket?.description ?? [])
            .map((desc: any) => desc?.children[0]?.text || "")
            .join("\n") || "",
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

  const onShowCreateEditTicket = (ev?: any) => {
    setIsCreateEditTicket(!isCreateEditTicket);
    setDataTicketType(ev || {});
  };

  const formatItem = (ev: any) => ({
    ...ev,
    start_date: useMoment(ev.start_date).format("YYYY-MM-DD HH:mm:ss"),
    end_date: useMoment(ev.end_date).format("YYYY-MM-DD HH:mm:ss"),
    price: Number(ev.price),
  });

  const createItem = (setList: any) => (ev: any) => {
    setList((prev: any[]) => [
      ...prev,
      {
        idItem: prev.length + 1,
        ...formatItem(ev),
        isVisible: true,
      },
    ]);
  };

  const editItem = (setList: any) => (ev: any) => {
    if (id) {
      onFechTicketEvents(id, ev);
    }
    
    setList((prev: any[]) =>
      prev.map((item) =>
        item.idItem === ev.idItem ? { ...item, ...formatItem(ev) } : item
      )
    );
  };

  const onPlaceSelected = (place: any, field: string) => {
    form.setFieldsValue({
      [field]: place.formatted_address,
      venue: place.vicinity,
    });
    setEventData((prev: any) => ({
      ...prev,
      place,
    }));
  };

  const onImageChange = (image: any) => {
    setEventData((prev: any) => ({
      ...prev,
      image,
    }));
  };

  // Uso
  const onCreateTicketType = createItem(setListTickets);
  const onEditTicketType = editItem(setListTickets);

  const onCreateTableType = createItem(setListTables);
  const onEditTableType = editItem(setListTables);

  const onCreateEvent = (ev: any) => {
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

    console.log({ ...ev, ...eventData, listTickets, listTables });
  };

  const onEditEvent = (ev: any) => {
    console.log(ev);
  };

  const onFechTicketEvents = async (id_event: any, data: any) => {
    try {
      setIsLoading(true);
      await putTicketEvents(id_event, data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      messageApi.open({
        type: "error",
        content: "Failed to update ticket events",
      });
    }
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
    onEditTicketType,
    onEditTableType,
    onPlaceSelected,
    onImageChange,
    onCreateEvent,
    onEditEvent,
  };
};
