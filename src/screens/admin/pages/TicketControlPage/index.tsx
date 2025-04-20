import { Button, TableProps } from "antd";
import { useTicketControl } from "./useTicketControl";
import { TableComp } from "../../components";

export const TicketControlPage = () => {
  const { dataTickes } = useTicketControl();

  const columns: TableProps["columns"] = [
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => {
        return (
          <div className="flex items-center gap-2">
            <Button className="rounded-full! bg-red-600! border-transparent! h-7! text-white! flex px-2!">
              <span className="pi pi-trash text-xs"></span>
            </Button>
            <Button className="rounded-full! bg-white! border-transparent! h-7! text-black! flex px-2! sm:px-4!">
              <span className="pi pi-pen-to-square text-xs"></span>
              <span>Edit</span>
            </Button>
          </div>
        );
      },
      className: "w-10",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Tickets",
      dataIndex: "tickets",
      key: "tickets",
    },
    {
      title: "Discount Code",
      dataIndex: "discountCode",
      key: "discountCode",
    },
    {
      title: "Purchased Date",
      dataIndex: "purchasedDate",
      key: "purchasedDate",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (text: string) => <span className="font-bold">${text}</span>,
      className: "text-end",
    },
  ];

  return (
    <div className="px-4 sm:px-6 py-3 grid gap-3">
      <h1 className="text-2xl font-bold bebasNeue">Ticket Control</h1>

      <div className="">
        <TableComp title="All Tickets" columns={columns} data={dataTickes} />
      </div>
    </div>
  );
};
