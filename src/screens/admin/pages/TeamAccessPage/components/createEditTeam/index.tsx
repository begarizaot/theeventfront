import { TextPrimary } from "../../../../../../components";
import "./styles.scss";
import { Button, Drawer, Form, Input, InputNumber, Select, Spin } from "antd";
import { useCreateEditTeam } from "./useCreateEditTeam";

interface createEditTeamProps {
  dataTeam?: any;
  openNav: boolean;
  setOpenNav: (open: boolean) => void;
  onEditCreateTeam?: () => void;
}

export const CreateEditTeamDrawer = ({
  dataTeam,
  openNav,
  setOpenNav,
  onEditCreateTeam,
}: createEditTeamProps) => {
  const {
    form,
    loading,
    teamRole,
    disableText,
    listCoutries,
    onValidateEmail,
    contextHolder,
    onCreateTeam,
    onEditTeam,
  } = useCreateEditTeam({ data: dataTeam, onEditCreateTeam });

  return (
    <>
      {contextHolder}
      <Spin
        spinning={loading}
        fullscreen
        size="large"
        rootClassName="z-[10000]!"
      />
      <Drawer
        onClose={() => {
          setOpenNav(false);
          form.resetFields();
        }}
        open={openNav}
        classNames={{
          body: "p-0! border-none! bg-nav",
          mask: "backdrop-blur-xs",
          header: "bg-nav",
        }}
        placement="right"
        className="createEditTeam"
        width={450}
        maskClosable={false}
      >
        <Form
          className="grid px-4! text-white!"
          layout="vertical"
          form={form}
          onFinish={dataTeam?.id ? onEditTeam : onCreateTeam}
        >
          <div className="col-span-1">
            <h1 className="text-3xl bebasNeue">
              {dataTeam?.id ? "Edit" : "Invite"}
              <TextPrimary className="bebasNeue ml-1" label="Team" />
            </h1>
          </div>

          <div className="col-span-1 grid mt-4 gap-2">
            <div className="col-span-1">
              <Form.Item
                className="m-0!"
                name="email"
                label={<span className="text-white">Email</span>}
                rules={[
                  {
                    required: true,
                  },
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                ]}
              >
                <Input
                  placeholder="example@gmail.com"
                  className="rounded-full! bg-transparent! border-white! text-white!"
                  classNames={{
                    input: "placeholder-white/20! py-[6px]!",
                  }}
                  inputMode="email"
                  autoComplete="off"
                  onBlur={(ev) => {
                    onValidateEmail(ev.target.value);
                  }}
                  disabled={dataTeam?.id}
                />
              </Form.Item>
            </div>
            <div className="col-span-1 grid grid-cols-2 gap-3">
              <div className="col-span-1">
                <Form.Item
                  className="m-0!"
                  name="firstName"
                  label={<span className="text-white">First Name</span>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    placeholder="First Name"
                    className="rounded-full! bg-transparent! border-white! text-white!"
                    classNames={{
                      input: "placeholder-white/20! py-[6px]!",
                    }}
                    inputMode="text"
                    autoComplete="off"
                    disabled={disableText}
                  />
                </Form.Item>
              </div>
              <div className="col-span-1">
                <Form.Item
                  className="m-0!"
                  name="lastName"
                  label={<span className="text-white">Last Name</span>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    placeholder="Last Name"
                    className="rounded-full! bg-transparent! border-white! text-white!"
                    classNames={{
                      input: "placeholder-white/20! py-[6px]!",
                    }}
                    inputMode="text"
                    autoComplete="off"
                    disabled={disableText}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="col-span-1 grid gap-2">
              <span className="text-white">
                <span className="text-red-400">*</span> Phone
              </span>
              <div className="col-span-1 grid grid-cols-3 gap-2">
                <Form.Item
                  className="m-0! col-span-2"
                  name="country"
                  rules={[
                    {
                      required: true,
                      message: "Please select your type phone",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    placeholder="Select Query"
                    className="customSelect col-span-1"
                    filterOption={(input, option: any) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={listCoutries}
                    disabled={disableText}
                  />
                </Form.Item>
                <Form.Item
                  className="m-0! col-span-3"
                  name="phone"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <InputNumber
                    formatter={(value) =>
                      `${value}`
                        .replace(/\D/g, "")
                        .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2 $3")
                    }
                    className="rounded-full! bg-transparent! w-full! text-white! py-[0px]! border-white! styleNumberInput"
                    placeholder="Phone Number"
                    disabled={disableText}
                    inputMode="numeric"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="col-span-1">
              <Form.Item
                className="m-0! col-span-1"
                name="typeRol"
                label={<span className="text-white">Type Rol</span>}
                rules={[
                  {
                    required: true,
                    message: "Please select your type rol!",
                  },
                ]}
              >
                <Select
                  showSearch
                  placeholder="Select Rol"
                  className="customSelect col-span-1"
                  filterOption={(input, option: any) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={teamRole}
                />
              </Form.Item>
            </div>
            <div className="col-span-1 mt-4">
              <Button
                htmlType="submit"
                className="w-full rounded-3xl! uppercase btnStyle"
              >
                <span className="font-bold text-xs">
                  {dataTeam?.id ? "Edit" : "Create"} Access
                </span>
              </Button>
            </div>
          </div>
        </Form>
      </Drawer>
    </>
  );
};
