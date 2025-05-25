import { TextPrimary } from "../../../../../../components";
import "./styles.scss";
import { Button, DatePicker, Drawer, Form, Input, Select, Spin } from "antd";
import { useCreateEditCode } from "./useCreateEditCode";

interface createEditCodeProps {
  dataCode?: any;
  openNav: boolean;
  setOpenNav: (open: boolean) => void;
  onEditCreateCode?: () => void;
}

export const CreateEditCodeDrawer = ({
  dataCode,
  openNav,
  setOpenNav,
  onEditCreateCode,
}: createEditCodeProps) => {
  const {
    form,
    loading,
    contextHolder,
    onCreateCode,
    onEditCode,
  } = useCreateEditCode({ data: dataCode, onEditCreateCode });

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
          onFinish={dataCode?.id ? onEditCode : onCreateCode}
        >
          <div className="col-span-1">
            <h1 className="text-3xl bebasNeue">
              {dataCode?.id ? "Edit" : "Create"}
              <TextPrimary className="bebasNeue ml-1" label="Code" />
            </h1>
          </div>

          <div className="col-span-1 grid mt-4 gap-2">
            <div className="col-span-1">
              <Form.Item
                className="m-0!"
                name="name"
                label={<span className="text-white">Name</span>}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="Name Code"
                  className="rounded-full! bg-transparent! border-white! text-white!"
                  classNames={{
                    input: "placeholder-white/20! py-[6px]!",
                  }}
                  inputMode="text"
                  autoComplete="off"
                />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <Form.Item
                className="m-0! col-span-1"
                name="state"
                label={<span className="text-white">Type Discount</span>}
                rules={[
                  {
                    required: true,
                    message: "Please select your type Discount!",
                  },
                ]}
              >
                <Select
                  placeholder="Select Discount"
                  className="customSelect col-span-1"
                  options={[
                    { value: "por", label: "Percentage" },
                    { value: "val", label: "Fixed" },
                  ]}
                  disabled={dataCode?.id && dataCode?.stock > 0}
                />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <Form.Item
                className="m-0!"
                name="value"
                label={<span className="text-white">Value</span>}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="Value"
                  className="rounded-full! bg-transparent! border-white! text-white!"
                  classNames={{
                    input: "placeholder-white/20! py-[6px]!",
                  }}
                  inputMode="numeric"
                  autoComplete="off"
                />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <Form.Item
                className="m-0!"
                name="stock_max"
                label={<span className="text-white">Maximim uses</span>}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="Maximum Uses"
                  className="rounded-full! bg-transparent! border-white! text-white!"
                  classNames={{
                    input: "placeholder-white/20! py-[6px]!",
                  }}
                  inputMode="numeric"
                  autoComplete="off"
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-1">
                <Form.Item
                  className="m-0!"
                  name="start_date"
                  label={<span className="text-white">Start Time</span>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <DatePicker
                    showTime
                    className="rounded-full! bg-transparent! w-full py-[5px]! border-white! hover:border-white! focus-within:border-white!"
                  />
                </Form.Item>
              </div>
              <div className="col-span-1">
                <Form.Item
                  className="m-0!"
                  name="end_date"
                  label={<span className="text-white">End Time</span>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <DatePicker
                    showTime
                    className="rounded-full! bg-transparent! w-full py-[5px]! border-white! hover:border-white! focus-within:border-white!"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="col-span-1 mt-4">
              <Button
                htmlType="submit"
                className="w-full rounded-3xl! uppercase btnStyle"
              >
                <span className="font-bold text-xs">
                  {dataCode?.id ? "Edit" : "Create"} Code
                </span>
              </Button>
            </div>
          </div>
        </Form>
      </Drawer>
    </>
  );
};
