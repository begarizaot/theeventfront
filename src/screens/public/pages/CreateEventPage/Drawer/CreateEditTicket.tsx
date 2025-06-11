import { useEffect, useState } from "react";
import { TextPrimary } from "../../../../../components";
import "./styles.scss";
import {
  Button,
  Checkbox,
  DatePicker,
  Drawer,
  Form,
  Input,
  InputNumber,
} from "antd";
import dayjs from "dayjs";

interface CreateEditTicketProps {
  data?: any;
  openNav: boolean;
  setOpenNav: (open: boolean) => void;
  onFinish: (values: any) => void;
}

export const CreateEditTicket = ({
  data,
  openNav,
  setOpenNav,
  onFinish,
}: CreateEditTicketProps) => {
  const [form] = Form.useForm();

  const [showInputs, setShowInputs] = useState<any>({});

  useEffect(() => {
    if (data?.idItem) {
      form.setFieldsValue({
        ...data,
        startEndDate: data?.start_date
          ? [dayjs(data?.start_date), dayjs(data?.end_date)]
          : undefined,
        enableAdv: data?.enableAdv || data?.start_date,
        requitePass: data?.requitePass || data?.codePassword,
      });
      setShowInputs({
        requitePass: data?.codePassword,
        enableAdv: data?.start_date,
      });
    }
  }, [data]);

  return (
    <Drawer
      onClose={() => {
        setOpenNav(false);
        form.resetFields();
        setShowInputs({});
      }}
      open={openNav}
      classNames={{
        body: "p-0! border-none! bg-nav",
        mask: "backdrop-blur-xs",
        header: "bg-nav",
      }}
      placement="right"
      width={450}
      maskClosable={false}
      className="createEditTicketTable"
    >
      <Form
        className="grid px-4! gap-2 text-white!"
        form={form}
        onFinish={(ev) => {
          onFinish({
            ...ev,
            ...(data?.idItem && {
              idItem: data?.idItem,
              id: data?.id,
            }),
          });
          form.resetFields();
          setShowInputs({});
        }}
      >
        <div className="col-span-1">
          <h1 className="text-3xl font-bold bebasNeue uppercase">
            {data?.idItem ? "Edit" : "Create"}{" "}
            <TextPrimary label={"Ticket Type"} className="bebasNeue" />
          </h1>
        </div>
        <div className="grid col-span-1">
          <div className="col-span-1">
            <Form.Item
              className="m-0!"
              name="title"
              label={<span className="text-white">Name Ticket Type</span>}
              labelCol={{ span: 24, className: "pb-0!" }}
              rules={[
                {
                  required: true,
                  message: "Please input the name of the ticket type!",
                },
              ]}
            >
              <Input
                placeholder="Enter Name Ticket Type"
                className="rounded-full! bg-transparent! border-white! text-white!"
                classNames={{
                  input: "placeholder-white/20! py-[6px]!",
                }}
                inputMode="text"
                autoComplete="off"
              />
            </Form.Item>
            <span className="text-xs">
              This is the name of the ticket type. For example: General
              admission, VIP, Early bird.
            </span>
          </div>
          <div className="col-span-1">
            <Form.Item
              className="m-0!"
              name="price"
              label={<span className="text-white">Price</span>}
              labelCol={{ span: 24, className: "pb-0!" }}
              rules={[
                {
                  required: true,
                  message: "Please input the price of the ticket type!",
                },
              ]}
            >
              <InputNumber
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                className="rounded-full! bg-transparent! w-full! text-white! py-[2px]! border-white! styleNumberInput"
                placeholder="0.00"
              />
            </Form.Item>
            <span className="text-xs">
              Type in the price for your ticket type. Fees are separate and will
              be displayed and calculated at check out.
            </span>
          </div>
          <div className="col-span-1">
            <Form.Item
              className="m-0!"
              name="quantity"
              label={<span className="text-white">Ticket Type Capacity</span>}
              labelCol={{ span: 24, className: "pb-0!" }}
              rules={[
                {
                  required: true,
                  message: "Please input the capacity of the ticket type!",
                },
              ]}
            >
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                className="rounded-full! bg-transparent! w-full! text-white! py-[2px]! border-white! styleNumberInput"
                placeholder="0"
              />
            </Form.Item>
            <span className="text-xs">
              This is the max amount of ticket type available online for this
              ticket type.
            </span>
          </div>
          <div className="col-span-1">
            <Form.Item
              className="m-0!"
              name="description"
              label={<span className="text-white">Description</span>}
              labelCol={{ span: 24, className: "pb-0!" }}
            >
              <Input.TextArea
                rows={4}
                placeholder="Message"
                className="rounded-xl! bg-transparent! border-white! text-white! placeholder:text-white/20!"
              />
            </Form.Item>
            <span className="text-xs">
              Enter a brief description of what this ticket type includes, such
              as special access, perks, or requirements.
            </span>
          </div>
          <div className="col-span-1 grid gap-3 mt-2">
            <div className="col-span-1">
              <Form.Item name="requitePass" valuePropName="checked" noStyle>
                <Checkbox
                  className="text-white! "
                  onChange={(ev) => {
                    setShowInputs({
                      ...showInputs,
                      requitePass: ev.target.checked,
                    });
                  }}
                >
                  Require Password for Purchase
                </Checkbox>
              </Form.Item>

              {showInputs?.requitePass && (
                <Form.Item
                  className="m-0!"
                  name="codePassword"
                  label={<span className="text-white">Code</span>}
                  labelCol={{ span: 24, className: "pb-0!" }}
                >
                  <Input
                    placeholder="Enter Code"
                    className="rounded-full! bg-transparent! border-white! text-white!"
                    classNames={{
                      input: "placeholder-white/20! py-[6px]!",
                    }}
                    inputMode="text"
                    autoComplete="off"
                  />
                </Form.Item>
              )}
            </div>
            <div className="col-span-1">
              <Form.Item name="enableAdv" valuePropName="checked" noStyle>
                <Checkbox
                  className="text-white!"
                  onChange={(ev) => {
                    setShowInputs({
                      ...showInputs,
                      enableAdv: ev.target.checked,
                    });
                  }}
                >
                  Enable Advanced Ticket Scheduling
                </Checkbox>
              </Form.Item>

              {showInputs.enableAdv && (
                <Form.Item
                  className="m-0!"
                  name="startEndDate"
                  label={<span className="text-white">Date & Time</span>}
                  labelCol={{ span: 24, className: "pb-0!" }}
                >
                  <DatePicker.RangePicker
                    showTime
                    format="YYYY-MM-DD hh:mm"
                    className="rounded-full! bg-transparent! w-full py-[5px]! border-white! hover:border-white! focus-within:border-white!"
                  />
                </Form.Item>
              )}
            </div>
          </div>
          <div className="col-span-1 my-4">
            <Button
              htmlType="submit"
              className="w-full rounded-3xl! uppercase btnStyle"
            >
              <span className="font-bold text-xs">
                {data?.idItem ? "Edit" : "Create"} Ticket
              </span>
            </Button>
          </div>
        </div>
      </Form>
    </Drawer>
  );
};
