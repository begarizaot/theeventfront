import { Button, Image } from "antd";

export const EventImageComp = () => {
  return (
    <div className="bg-nav p-3 rounded-xl">
      <img
        src="https://storage.googleapis.com/eventjetimg/events/40/event_Id_40_4ed4dc47d3.png"
        className="h-110 w-full rounded-lg sm:hidden"
        alt=""
      />

      <Image
        className="h-110! w-full! rounded-lg bg-cover bg-center hidden sm:block"
        rootClassName="w-full"
        src="error"
        fallback="https://storage.googleapis.com/eventjetimg/events/40/event_Id_40_4ed4dc47d3.png"
      />
      <div className="text-center mt-3">
        <Button className="rounded-3xl! btnStyle font-bold! px-7!">
          Upload File
        </Button>
      </div>
    </div>
  );
};
