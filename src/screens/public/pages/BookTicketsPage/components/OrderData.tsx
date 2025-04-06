import { Button, Input, InputNumber } from "antd";

interface OrderDataCompProps {
  onCheckOut: () => void;
}

export const OrderDataComp = ({ onCheckOut }: OrderDataCompProps) => {
  return (
    <div className="bgCard p-3 rounded-xl h-full overflow-auto flex flex-col">
      <div className="grid">
        <h1 className="text-base font-bold">Order Summary</h1>
        {/* list ordes */}
        <div>
          <div className="border p-2 rounded-xl flex items-center gap-3">
            <div className="flex gap-2">
              <img
                src="https://storage.googleapis.com/eventjetimg/events/40/event_Id_40_4ed4dc47d3.png"
                className="w-15 h-15 rounded-lg"
                alt=""
              />
              <div className="grid">
                <h1 className="text-sm/4 line-clamp-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h1>
                <p className="text-sm sm:text-xs">General</p>
              </div>
            </div>
            <div className="grid gap-1 text-right">
              <h1 className="text-xl sm:text-2xl font-bold">$50</h1>
              <div className="flex items-center gap-3">
                <span className="pi text-xs sm:text-sm cursor-pointer font-bold! pi-minus"></span>
                <InputNumber
                  min={1}
                  max={12}
                  defaultValue={10}
                  disabled
                  className=" bg-white! border-white! text-black! w-10! font-bold!"
                />
                <span className="pi text-xs sm:text-sm cursor-pointer font-bold! pi-plus"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="bgSeparator my-4"></div>
        {/* value y subvalue */}
        <div className="grid gap-3">
          <div className="flex justify-between items-center text-sm">
            <p>Subtotal</p>
            <p>$94</p>
          </div>
          <div className="flex justify-between items-center text-sm">
            <p>Shipping</p>
            <p>$5</p>
          </div>
          <div className="flex justify-between items-center text-sm">
            <p>Total including tax</p>
            <p>$102</p>
          </div>
        </div>

        {/* discont code */}
        <div className="mt-5 ">
          <h1 className="text-sm">Discount Code</h1>
          <div className="border-white border rounded-3xl flex items-center mt-2 pr-2">
            <Input
              placeholder="Enter Code"
              className="rounded-full! bg-transparent! border-transparent! text-white!"
              classNames={{
                input: "placeholder-white/20! py-[6px]!",
              }}
              inputMode="text"
              autoComplete="off"
            />
            <Button className="rounded-full! bg-white! border-transparent! h-6!">
              Apply
            </Button>
          </div>
        </div>
      </div>

      <div className=" mt-4 lg:mt-auto">
        <Button
          className="w-full rounded-3xl! uppercase btnStyle disabled:bg-white/70! disabled:border-none! disabled:text-black!"
          // disabled
          onClick={onCheckOut}
        >
          <span className="font-bold text-xs">Check Out</span>
        </Button>
      </div>
    </div>
  );
};
