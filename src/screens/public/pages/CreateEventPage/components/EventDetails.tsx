import { Button, DatePicker, Form, Input } from "antd";
import { LocationField } from "../../../../../components";

interface EventDetailsProps {
  isLoading?: boolean;
  onPlaceSelected: (place: any, field: string) => void;
}

export const EventDetailsComp = ({
  isLoading,
  onPlaceSelected,
}: EventDetailsProps) => {
  return (
    <>
      <div className="col-span-1 flex items-center justify-between">
        <h1 className="text-2xl font-bold bebasNeue">Event Details</h1>
      </div>
      <div className="bg-nav p-3! rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
          <div className="col-span-1 sm:col-span-2">
            <Form.Item
              className="m-0!"
              name="name"
              label={<span className="text-white">Event Title</span>}
              labelCol={{ span: 24, className: "pb-0!" }}
              rules={[
                {
                  required: true,
                  message: "Please input the event title!",
                },
              ]}
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
          <div className="col-span-1">
            <Form.Item
              className="m-0!"
              name="location"
              label={<span className="text-white">Event Location</span>}
              labelCol={{ span: 24, className: "pb-0!" }}
              rules={[
                {
                  required: true,
                  message: "Please input the event location!",
                },
              ]}
            >
              {isLoading && (
                <LocationField
                  onPlaceSelected={(ev) => onPlaceSelected(ev, "location")}
                />
              )}
            </Form.Item>
          </div>
          <div className="col-span-1">
            <Form.Item
              className="m-0!"
              name="venue"
              label={<span className="text-white">Vanue</span>}
              labelCol={{ span: 24, className: "pb-0!" }}
              rules={[
                {
                  required: true,
                  message: "Please input the vanue!",
                },
              ]}
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
          <div className="col-span-1 sm:col-span-2">
            <Form.Item
              className="m-0!"
              name="startEndDate"
              label={<span className="text-white">Date & Time</span>}
              labelCol={{ span: 24, className: "pb-0!" }}
              rules={[
                {
                  required: true,
                  message: "Please select the start and end date!",
                },
              ]}
            >
              <DatePicker.RangePicker
                showTime
                format="YYYY-MM-DD HH:mm"
                className="rounded-full! bg-transparent! w-full py-[5px]! border-white! hover:border-white! focus-within:border-white!"
              />
            </Form.Item>
          </div>
          <div className="col-span-1 sm:col-span-2 mt-4">
            <Form.List name="url_youtube">
              {(fields, { add, remove }) => (
                <div className="grid grid-cols-1 gap-3">
                  {fields.map(({ key, name, ...restField }) => (
                    <div
                      key={key}
                      className="col-span-1 flex items-center gap-2"
                    >
                      <Form.Item
                        className="m-0! w-full"
                        {...restField}
                        name={[name]}
                      >
                        <Input
                          placeholder="Youtube Link"
                          className="rounded-full! bg-transparent! border-white! text-white!"
                          classNames={{
                            input: "placeholder-white/20! py-[6px]!",
                          }}
                          autoComplete="off"
                          inputMode="url"
                          type="url"
                          pattern="https?://.+"
                        />
                      </Form.Item>
                      <span
                        className="pi pi-times-circle text-xl"
                        onClick={() => remove(name)}
                      ></span>
                    </div>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      className="w-full rounded-3xl! uppercase btnStyle border-0!"
                    >
                      Add Youtube Link
                    </Button>
                  </Form.Item>
                </div>
              )}
            </Form.List>
          </div>
        </div>
      </div>
    </>
  );
};
