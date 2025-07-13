import { useState } from "react";
import { Button, QRCode, TableProps, Tag } from "antd";
import { useEventAffiliates } from "./useEventAffiliates";
import { TableComp } from "../../components";
import { CreateEditTeamDrawer } from "./components";

const { VITE_PUBLIC_URL } = import.meta.env;

export const EventAffiliatesPage = () => {
  const [opNewAffiliate, setOpNewAffiliate] = useState(false);
  const [dataAffiliate, setDataAffiliate] = useState<any>();

  const {
    dataTickes,
    loading,
    sizePage,
    contextHolder,
    eventDate,
    idAffiliate,
    onRefresh,
    onPageChange,
    onUpdateActive,
    onDebouncedSearch,
    downloadSvgQRCode,
    copyAffiliateLink,
  } = useEventAffiliates();

  const columns: TableProps["columns"] = [
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, data: any) => {
        return (
          <div className="flex items-center gap-2 justify-center">
            <Button
              className="rounded-full! bg-white! border-transparent! h-7! text-black! flex px-2!"
              onClick={() => {
                setOpNewAffiliate(true);
                setDataAffiliate(data);
              }}
            >
              <span className="pi pi-pen-to-square"></span>
            </Button>
            <Button
              className="rounded-full! bg-white! border-transparent! h-7! text-black! flex px-2!"
              onClick={() => {
                downloadSvgQRCode(data?.id_affiliate);
              }}
            >
              <span className="pi pi-qrcode"></span>
            </Button>
            <Button
              className="rounded-full! bg-white! border-transparent! h-7! text-black! flex px-2!"
              onClick={() => {
                copyAffiliateLink(data?.id_affiliate);
              }}
            >
              <span className="pi pi-copy"></span>
            </Button>
          </div>
        );
      },
      className: "w-10",
      width: 100,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, data) => {
        return (
          <Tag
            color={data?.isVisible ? "green" : "red"}
            className="text-xs flex items-center justify-center cursor-pointer"
            onClick={() => {
              onUpdateActive({
                id: data.id,
                isVisible: !data.isVisible,
              });
            }}
          >
            {data?.isVisible ? "Active" : "Inactive"}
          </Tag>
        );
      },
      width: 100,
    },
    {
      title: "Affiliate Name",
      dataIndex: "customer",
      key: "customer",
      render: (text: string, data) => {
        return (
          <div className="flex flex-col">
            <span>{text}</span>
            <span className="text-sm/3">{data?.user_id?.email}</span>
          </div>
        );
      },
      width: 250,
    },
    {
      title: "Commission",
      dataIndex: "commission",
      key: "commission",
      width: 150,
    },
    {
      title: "Sales",
      dataIndex: "totalSales",
      key: "totalSales",
      width: 200,
      render: (text: number) => {
        return <span className="text-sm/3">$ {text ?? 0}</span>;
      },
    },
    {
      title: "Expiration Date",
      dataIndex: "expirationDate",
      key: "expirationDate",
    },
  ];

  return (
    <>
      <CreateEditTeamDrawer
        data={dataAffiliate}
        openNav={opNewAffiliate}
        setOpenNav={() => {
          setOpNewAffiliate(false);
          setDataAffiliate(null);
        }}
        onEditCreateTeam={() => {
          onRefresh();
          setOpNewAffiliate(false);
          setDataAffiliate(null);
        }}
      />
      {contextHolder}
      <div className="px-4 sm:px-6 py-3 grid gap-3">
        <div className="col-span-1 grid sm:flex items-center justify-between gap-2">
          <div className="grid">
            <h1 className="text-2xl font-bold bebasNeue">Event Affiliates</h1>
          </div>

          <Button
            className="rounded-full! bg-white! border-transparent! h-7! text-black! flex px-2!"
            onClick={() => {
              setDataAffiliate(null);
              setOpNewAffiliate(true);
            }}
          >
            <span className="pi pi-plus"></span>
            Create Affiliate
          </Button>
        </div>

        <div className="">
          <TableComp
            title="All Affiliates"
            columns={columns}
            data={dataTickes}
            totalData={sizePage?.total || 0}
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

        <div id="myAffiliate">
          <QRCode
            type={"svg"}
            value={`${VITE_PUBLIC_URL}/event/${eventDate.id_event}?aff=${idAffiliate}`}
            bgColor="#fff"
            className="hidden!"
          />
        </div>
      </div>
    </>
  );
};
