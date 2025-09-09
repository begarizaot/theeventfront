import { Button, Popconfirm, Spin, TableProps, Tag } from "antd";
import { useTeamAccess } from "./useTicketControl";
import { TableComp } from "../../components";
import { BanknoteX } from "lucide-react";

export const TicketControlPage = () => {
  const {
    dataTickes,
    loading,
    sizePage,
    eventDate,
    isLoading,
    contextHolder,
    onPageChange,
    onRefundOrder,
    onRefresh,
    onDebouncedSearch,
    downloadExcel,
  } = useTeamAccess();

  const columns: TableProps["columns"] = [
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, data) => {
        return (
          <div className="flex items-center gap-2 justify-center">
            {!data?.isRefundable && (
              <>
                {data?.price_refundable ? (
                  <Popconfirm
                    title="Refund this order?"
                    description="Are you sure you want to refund this order?"
                    onConfirm={() => onRefundOrder(data.order_id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button className="rounded-full! bg-white! border-transparent! h-7! text-black! flex px-2!">
                      <BanknoteX width={20} />
                    </Button>
                  </Popconfirm>
                ) : (
                  ""
                )}
                {/* <Popconfirm
                  title="Send mail?"
                  description="Are you sure you want to send this order?"
                  onConfirm={() => onSendMail(data.order_id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="rounded-full! bg-white! border-transparent! h-7! text-black! flex px-2!">
                    <Mail width={18} />
                  </Button>
                </Popconfirm> */}
              </>
            )}
          </div>
        );
      },
      className: "w-10",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, data) => {
        return (
          <Tag
            color={!data?.isRefundable ? "green" : "red"}
            className="text-xs flex items-center justify-center"
          >
            {!data?.isRefundable ? "Active" : "Refunded"}
          </Tag>
        );
      },
    },
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
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (text: string) => <span className="font-bold">${text}</span>,
      className: "text-end",
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
      <Spin spinning={isLoading} fullscreen size="large" />
      <div className="px-4 sm:px-6 py-3 grid gap-3">
        <div className="flex justify-end items-center">
          <Button className="rounded-3xl! btnStyle" onClick={downloadExcel}>
            Download
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
