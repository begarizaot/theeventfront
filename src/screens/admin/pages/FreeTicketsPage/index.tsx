import { Button, Spin, TableProps } from "antd";
import { useFreeTickets } from "./useFreeTickets";
import { TableComp } from "../../components";

export const FreeTicketsPage = () => {
  const {
    loading,
    sizePage,
    eventDate,
    dataTickes,
    contextHolder,
    onDebouncedSearch,
    onCreateFreeTicket,
    onPageChange,
    onRefresh,
  } = useFreeTickets();

  const columns: TableProps["columns"] = [
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
      render: (text: string, data) => {
        return (
          <div className="flex flex-col">
            <span>{text}</span>
            <span className="text-sm/3">{data?.users_id?.email}</span>
          </div>
        );
      },
      width: 250,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 150,
    },
    {
      title: "Tickets",
      dataIndex: "tickets",
      key: "tickets",
      width: 150,
    },
    ...(eventDate.url_map
      ? [
          {
            title: "Table",
            dataIndex: "table",
            key: "table",
          },
        ]
      : []),
    {
      title: "Purchased Date",
      dataIndex: "purchasedDate",
      key: "purchasedDate",
    },
  ];

  return (
    <>
      {contextHolder}
      <div className="px-4 sm:px-6 py-3 grid gap-3">
        <div className="col-span-1 grid sm:flex items-center justify-between gap-2">
          <div className="grid">
            <h1 className="text-2xl font-bold bebasNeue">Free Ticket</h1>
          </div>

          <Button
            className="rounded-full! bg-white! border-transparent! h-7! text-black! flex px-2!"
            onClick={onCreateFreeTicket}
          >
            <span className="pi pi-plus"></span>
            Create Ticket
          </Button>
        </div>

        <div className="">
          <TableComp
            title="All Tickets"
            columns={columns}
            data={dataTickes}
            totalData={sizePage.total}
            loading={loading}
            onPageChange={(page) => {
              onPageChange(page);
            }}
            onSearch={(search) => {
              onDebouncedSearch(search);
            }}
            onRefresh={() => {
              onRefresh();
            }}
          />
        </div>
      </div>
    </>
  );
};
