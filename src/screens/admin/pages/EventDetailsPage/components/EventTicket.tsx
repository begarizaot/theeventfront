import { Button, Empty } from "antd";
import { TextPrimary } from "../../../../../components";
import { useMoment } from "../../../../../hooks";

interface EventTicketProps {
  eventData?: any[];
}

export const EventTicketComp = ({
  eventData,
}: EventTicketProps) => {
  return (
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
        {(eventData ?? [])?.map((ticket: any) => (
          <div className="col-span-1" key={ticket?.id}>
            <div className="grid grid-cols-1 gap-2 border p-2 rounded-sm">
              <div className="col-span-1 grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-1 flex items-start lg:items-center gap-2">
                  <TextPrimary className="pi pi-ticket"></TextPrimary>
                  <h1 className="text-lg">{ticket.title ?? ""}</h1>
                </div>
                <div className="col-span-1 items-start lg:items-center text-xl font-bold">
                  ${ticket.price ?? 0}
                </div>
                <div className="col-span-1 items-start lg:items-right text-xl ">
                  Tickets remaining:
                  <span className="font-bold ml-1">
                    {ticket.stock ?? 0}/{ticket.quantity ?? 0}
                  </span>
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-2 items-center">
                <div className="col-span-1">
                  {useMoment(ticket?.start_date).format("MMM D, YYYY, hh:mm A")}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
