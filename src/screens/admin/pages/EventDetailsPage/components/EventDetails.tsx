import { Form, Input } from "antd";
import { useEffect } from "react";

interface EventDetailsProps {
  eventData?: any;
}

export const EventDetailsComp = ({
  eventData,
}: EventDetailsProps) => {
  const [data] = Form.useForm();

  useEffect(() => {
    eventData?.id && data.setFieldsValue(eventData);
  }, [eventData]);

  return (
    <Form className="bg-nav p-3! rounded-xl" form={data}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
        <div className="col-span-1">
          <Form.Item
            className="m-0!"
            name="name"
            label={<span className="text-white">Event Title</span>}
            labelCol={{ span: 24, className: "pb-0!" }}
          >
            <Input
              placeholder="Enter Event Title"
              className="rounded-full! bg-transparent! border-white! text-white!"
              classNames={{
                input: "placeholder-white/20! py-[6px]!",
              }}
              inputMode="text"
              autoComplete="off"
              disabled
            />
          </Form.Item>
        </div>
        <div className="col-span-1">
          <Form.Item
            className="m-0!"
            name="location"
            label={<span className="text-white">Event Location</span>}
            labelCol={{ span: 24, className: "pb-0!" }}
          >
            <Input
              placeholder="Enter Event Location"
              className="rounded-full! bg-transparent! border-white! text-white!"
              classNames={{
                input: "placeholder-white/20! py-[6px]!",
              }}
              inputMode="text"
              autoComplete="off"
              disabled
            />
          </Form.Item>
        </div>
        <div className="col-span-1">
          <Form.Item
            className="m-0!"
            name="startDate"
            label={<span className="text-white">Date & Time</span>}
            labelCol={{ span: 24, className: "pb-0!" }}
          >
            <Input
              placeholder="Enter Event Location"
              className="rounded-full! bg-transparent! border-white! text-white!"
              classNames={{
                input: "placeholder-white/20! py-[6px]!",
              }}
              inputMode="text"
              autoComplete="off"
              disabled
            />
          </Form.Item>
        </div>
        <div className="col-span-1">
          <Form.Item
            className="m-0!"
            name="vicinity"
            label={<span className="text-white">Vanue</span>}
            labelCol={{ span: 24, className: "pb-0!" }}
          >
            <Input
              placeholder="Enter Vanue"
              className="rounded-full! bg-transparent! border-white! text-white!"
              classNames={{
                input: "placeholder-white/20! py-[6px]!",
              }}
              inputMode="text"
              autoComplete="off"
              disabled
            />
          </Form.Item>
        </div>
        <div className="col-span-1 sm:col-span-2">
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
          </div>
      </div>
    </Form>
  );
};
