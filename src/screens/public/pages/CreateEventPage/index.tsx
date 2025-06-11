import { Button, Form, Spin } from "antd";
import {
  EventAboutComp,
  EventDetailsComp,
  EventImageComp,
  EventTableComp,
  EventTicketComp,
} from "./components";
import { CreateEditTable, CreateEditTicket } from "./Drawer";
import { useCreateEvent } from "./useCreateEvent";

export const CreateEventPage = () => {
  const {
    form,
    eventData,
    isLoading,
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
  } = useCreateEvent();

  return (
    <>
      <Spin spinning={isLoading} fullscreen size="large" />
      {contextHolder}
      <CreateEditTicket
        data={dataTicketType}
        openNav={isCreateEditTicket}
        setOpenNav={onShowCreateEditTicket}
        onFinish={(ev) => {
          ev.idItem ? onEditTicketType(ev) : onCreateTicketType(ev);
          onShowCreateEditTicket();
        }}
      />
      <CreateEditTable
        data={dataTableType}
        openNav={isCreateEditTable}
        setOpenNav={onShowCreateEditTable}
        onFinish={(ev) => {
          ev.idItem ? onEditTableType(ev) : onCreateTableType(ev);
          onShowCreateEditTable();
        }}
      />
      <Form
        className="min-h-screen px-4! sm:px-6! py-3! flex flex-col gap-2 pt-16! mb-10 text-white!"
        form={form}
        onFinish={(ev) => {
          eventData?.id_event ? onEditEvent(ev) : onCreateEvent(ev);
        }}
      >
        <div className="col-span-1">
          <h1 className="text-2xl font-bold bebasNeue">
            Build Your Event Page
          </h1>
        </div>
        <div className="col-span-1">
          <EventImageComp
            image={eventData?.image || eventData?.imageEvent}
            onImageChange={onImageChange}
          />
        </div>
        <div className="col-span-1">
          <EventDetailsComp
            isLoading={isLoadingEdit}
            onPlaceSelected={onPlaceSelected}
          />
        </div>
        <div className="col-span-1">
          <EventAboutComp />
        </div>
        <div className="col-span-1">
          <EventTicketComp
            isNew={!eventData?.id_event}
            eventData={listTickets}
            onCreate={() => onShowCreateEditTicket()}
            onEdit={onShowCreateEditTicket}
            onStatusChange={(ev) => onEditTicketType(ev)}
            onDelete={onShowDeleteTicket}
          />
        </div>
        <div className="col-span-1">
          <EventTableComp
            isNew={!eventData?.id_event}
            eventData={listTables}
            onCreate={() => onShowCreateEditTable()}
            onEdit={onShowCreateEditTable}
            onStatusChange={(ev) => onEditTableType(ev)}
            onDelete={onShowDeleteTable}
          />
        </div>
        <div className="col-span-1 text-right mt-4">
          <Button
            htmlType="submit"
            className="w-full sm:w-100 rounded-3xl! uppercase btnStyle"
          >
            <span className="font-bold text-xs">
              {eventData?.id_event ? "Edit" : "Create"} Event
            </span>
          </Button>
        </div>
      </Form>
    </>
  );
};
