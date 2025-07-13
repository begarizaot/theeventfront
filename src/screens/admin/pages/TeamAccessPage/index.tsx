import { Button, Popconfirm, TableProps, Tag } from "antd";
import { useTeamAccess } from "./useTeamAccess";
import { TableComp } from "../../components";
import { useState } from "react";
import { CreateEditTeamDrawer } from "./components";

export const TeamAccessPage = () => {
  const [opNewTeam, setOpNewTeam] = useState(false);
  const [dataTeam, setDataTeam] = useState<any>();

  const {
    dataTickes,
    loading,
    sizePage,
    contextHolder,
    onRefresh,
    onPageChange,
    onUpdateActive,
    onDebouncedSearch,
  } = useTeamAccess();

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
                setOpNewTeam(true);
                setDataTeam(data);
              }}
            >
              <span className="pi pi-pen-to-square"></span>
              Edit
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
      title: "Team Member",
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
    },
    {
      title: "Team Role",
      dataIndex: "teamRole",
      key: "teamRole",
      width: 100,
    },
    {
      title: "Admin?",
      dataIndex: "admin",
      key: "admin",
      render: (_, data) => {
        return (
          <Popconfirm
            title="Grant Administrator Permission"
            description="Are you sure you want to grant administrator permission?"
            onConfirm={() =>
              onUpdateActive({
                id: data.id,
                isAdmin: !data.isAdmin,
              })
            }
            okText="Yes"
            cancelText="No"
          >
            <Tag
              color={data?.isAdmin ? "green" : "red"}
              className="text-xs flex items-center justify-center cursor-pointer"
            >
              {data?.isAdmin ? "Yes" : "No"}
            </Tag>
          </Popconfirm>
        );
      },
      width: 100,
    },
    {
      title: "Created Date",
      dataIndex: "purchasedDate",
      key: "purchasedDate",
    },
  ];

  return (
    <>
      <CreateEditTeamDrawer
        dataTeam={dataTeam}
        openNav={opNewTeam}
        setOpenNav={() => {
          setOpNewTeam(false);
          setDataTeam(null);
        }}
        onEditCreateTeam={() => {
          onRefresh();
          setOpNewTeam(false);
        }}
      />
      {contextHolder}
      <div className="px-4 sm:px-6 py-3 grid gap-3">
        <div className="col-span-1 grid sm:flex items-center justify-between gap-2">
          <div className="grid">
            <h1 className="text-2xl font-bold bebasNeue">Team Access</h1>
            <div className="grid">
              <span>Do you have logistics staff for your event?</span>
              <span className="text-base/4 sm:text-base/2">
                Create access for Co-Organizer or Operator users.
              </span>
            </div>
          </div>

          <Button
            className="rounded-full! bg-white! border-transparent! h-7! text-black! flex px-2!"
            onClick={() => {
              setOpNewTeam(true);
              setDataTeam(null);
            }}
          >
            <span className="pi pi-plus"></span>
            Create Access
          </Button>
        </div>

        <div className="">
          <TableComp
            title="All Team"
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
