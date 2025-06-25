import { Button, TableProps, Tag } from "antd";
import { useDiscountCode } from "./useDiscountCode";
import { TableComp } from "../../components";
import { useState } from "react";
import { CreateEditCodeDrawer } from "./components";

export const DiscountCodePage = () => {
  const [opNewCode, setOpNewCode] = useState(false);
  const [dataCode, setDataCode] = useState<any>();

  const {
    dataTickes,
    loading,
    sizePage,
    contextHolder,
    onRefresh,
    onPageChange,
    onUpdateActive,
    onDebouncedSearch,
  } = useDiscountCode();

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
                setOpNewCode(true);
                setDataCode(data);
              }}
            >
              <span className="pi pi-pen-to-square"></span>
              Edit
            </Button>
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
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      render: (text: string, data: any) => (
        <span className="font-bold">
          {data.state == "val" && "$"}
          {text}
          {data.state == "por" && "%"}
        </span>
      ),
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (text: string, data: any) => (
        <span className="font-bold">
          {Number(data.stock_max) - Number(text)}
        </span>
      ),
    },
    {
      title: "Date start-end",
      dataIndex: "dateStartEnd",
      key: "dateStartEnd",
    },
  ];

  return (
    <>
      <CreateEditCodeDrawer
        dataCode={dataCode}
        openNav={opNewCode}
        setOpenNav={() => {
          setOpNewCode(false);
          setDataCode(null);
        }}
        onEditCreateCode={() => {
          onRefresh();
          setOpNewCode(false);
          setDataCode(null);
        }}
      />
      {contextHolder}
      <div className="px-4 sm:px-6 py-3 grid gap-3">
        <div className="col-span-1 grid sm:flex items-center justify-between gap-2">
          <div className="grid">
            <h1 className="text-2xl font-bold bebasNeue">Discount Code</h1>
          </div>

          <Button
            className="rounded-full! bg-white! border-transparent! h-7! text-black! flex px-2!"
            onClick={() => {
              setDataCode(null);
              setOpNewCode(true);
            }}
          >
            <span className="pi pi-plus"></span>
            Create Code
          </Button>
        </div>

        <div className="">
          <TableComp
            title="All Codes"
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
      </div>
    </>
  );
};
