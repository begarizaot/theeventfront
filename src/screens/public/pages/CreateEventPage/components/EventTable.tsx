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

export const EventTableComp = ({
  eventData,
  onCreate,
  onEdit,
  onStatusChange,
}: EventTicketProps) => {
  return (
    <>
      <div className="col-span-1 flex items-center justify-between">
        <h1 className="text-2xl font-bold bebasNeue">Event Table Type(s)</h1>
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
          {(eventData ?? [])?.map((table: any,index:any) => (
            <div className="col-span-1" key={index}>
              <div className="grid grid-cols-1 gap-2 border p-2 rounded-sm">
                <div className="col-span-1 grid grid-cols-3">
                  <div className="col-span-1 flex items-center gap-2">
                    <TextPrimary className="pi pi-ticket"></TextPrimary>
                    <h1 className="text-lg">{table?.title ?? ""}</h1>
                  </div>
                  <div className="col-span-1 text-center text-xl font-bold">
                    ${FormatUSDLatino(table?.price ?? 0, 2)}
                  </div>
                  <div className="col-span-1 text-right text-xl ">
                    Tables remaining:
                    <span className="font-bold ml-1">
                      {FormatUSDLatino(table?.stock ?? 0)}/
                      {FormatUSDLatino(table?.quantity ?? 0)}
                    </span>
                  </div>
                </div>
                <div className="col-span-1 grid grid-cols-3 items-center">
                  <div className="col-span-1">
                    {useMoment(table?.start_date).format(
                      "MMM D, YYYY, HH:mm A"
                    )}
                  </div>
                  <div className="col-span-1 text-center">
                    <Tag
                      color={table?.isVisible ? "green" : "red"}
                      className="text-xs flex items-center justify-center cursor-pointer"
                      onClick={() => {
                        onStatusChange({
                          ...table,
                          isVisible: !table.isVisible,
                        });
                      }}
                    >
                      {table?.isVisible ? "Active" : "Inactive"}
                    </Tag>
                  </div>
                  <div className="col-span-1 text-right">
                    <Button
                      className="rounded-full! bg-white! border-transparent! h-7! text-black! flex px-2!"
                      onClick={() => {
                        onEdit(table);
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
              <span className="font-bold text-base">Add Table Type</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
