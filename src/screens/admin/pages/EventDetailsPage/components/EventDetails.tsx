import { Button, DatePicker, Form, Input, Select } from "antd";

export const EventDetailsComp = () => {
  return (
    <div className="bg-nav p-3 rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
        <div className="col-span-1">
          <Form.Item
            className="m-0!"
            name="eventTitle"
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
            />
          </Form.Item>
        </div>
        <div className="col-span-1">
          <Form.Item
            className="m-0!"
            name="eventLocation"
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
            />
          </Form.Item>
        </div>
        <div className="col-span-1">
          <Form.Item
            className="m-0!"
            name="dateOfTime"
            label={<span className="text-white">Date & Time</span>}
            labelCol={{ span: 24, className: "pb-0!" }}
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
            name="Vanue"
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
            />
          </Form.Item>
        </div>
        <div className="col-span-1">
          <Form.Item
            className="m-0! col-span-2"
            name="eventType"
            label={<span className="text-white">Event Type</span>}
            labelCol={{ span: 24, className: "pb-0!" }}
          >
            <Select
              showSearch
              placeholder="Event Type"
              className="customSelect"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                { value: "1", label: "Jack" },
                { value: "2", label: "Lucy" },
                { value: "3", label: "Tom" },
              ]}
            />
          </Form.Item>
        </div>
      </div>

      <div className="text-center mt-3">
        <Button className="rounded-3xl! btnStyle font-bold! px-7!">
          Update Details
        </Button>
      </div>
    </div>
  );
};
