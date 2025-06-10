import { Button, Empty, Tag } from "antd";
import { TextPrimary } from "../../../../../components";
import { useMoment } from "../../../../../hooks";
import { FormatUSDLatino } from "../../../../../helpers";

interface EventTicketProps {
  eventData?: any[];
  onCreate?: () => void;
  onEdit: (ticket: any) => void;
  onStatusChange: (ticket: any) => void;
}

export const EventTicketComp = ({
  eventData,
  onCreate,
  onEdit,
  onStatusChange,
}: EventTicketProps) => {
  return (
    <>
      <div className="col-span-1 flex items-center justify-between">
        <h1 className="text-2xl font-bold bebasNeue">Event Ticket Type(s)</h1>
      </div>
      <div className="bg-nav p-3! rounded-xl text-white!">
        <div className="grid grid-cols-1 gap-2 p-1">
          {eventData?.length == 0 && (
            <div className="col-span-1">
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                classNames={{ description: "text-white!" }}
                className="m-2!"
              />
            </div>
          )}
          {(eventData ?? [])?.map((ticket: any, index: any) => (
            <div className="col-span-1" key={index}>
              <div className="grid grid-cols-1 gap-2 border p-2 rounded-sm">
                <div className="col-span-1 grid grid-cols-3">
                  <div className="col-span-1 flex items-center gap-2">
                    <TextPrimary className="pi pi-ticket"></TextPrimary>
                    <h1 className="text-lg">{ticket?.title ?? ""}</h1>
                  </div>
                  <div className="col-span-1 text-center text-xl font-bold">
                    ${FormatUSDLatino(ticket?.price ?? 0, 2)}
                  </div>
                  <div className="col-span-1 text-right text-xl ">
                    Tickets remaining:
                    <span className="font-bold ml-1">
                      {FormatUSDLatino(ticket?.stock ?? 0)}/
                      {FormatUSDLatino(ticket?.quantity ?? 0)}
                    </span>
                  </div>
                </div>
                <div className="col-span-1 grid grid-cols-3 items-center">
                  <div className="col-span-1">
                    {useMoment(ticket?.start_date).format(
                      "MMM D, YYYY, HH:mm A"
                    )}
                  </div>
                  <div className="col-span-1 text-center">
                    <Tag
                      color={ticket?.isVisible ? "green" : "red"}
                      className="text-xs flex items-center justify-center cursor-pointer"
                      onClick={() => {
                        onStatusChange({
                          ...ticket,
                          isVisible: !ticket.isVisible,
                        });
                      }}
                    >
                      {ticket?.isVisible ? "Active" : "Inactive"}
                    </Tag>
                  </div>
                  <div className="col-span-1 text-right">
                    <Button
                      className="rounded-full! bg-white! border-transparent! h-7! text-black! flex px-2!"
                      onClick={() => {
                        onEdit(ticket);
                      }}
                    >
                      <span className="pi pi-pen-to-square"></span>
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div
            className={`col-span-1 ${
              (eventData ?? [])?.length == 0 ? "text-center" : "text-right"
            }`}
          >
            <Button
              className="rounded-3xl! btnStyle sm:w-100"
              onClick={onCreate}
            >
              <span className="font-bold text-base">Add Ticket Type</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
