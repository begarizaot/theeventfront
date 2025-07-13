import { Image } from "antd";
import { useState } from "react";

interface EventImageProps {
  imageUrl: string;
}

export const EventImageComp = ({ imageUrl }: EventImageProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="bg-nav p-3 rounded-xl">
      <img
        src={imageUrl ?? ""}
        className="h-110 w-full rounded-lg sm:hidden"
        alt=""
      />

      <div
        className="hidden sm:block sm:h-60 lg:h-100 xl:h-150 w-full bg-cover bg-top rounded-lg cursor-pointer hover:opacity-80"
        onClick={() => setVisible(true)}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <Image
        className="hidden"
        rootClassName="w-full"
        src="error"
        fallback={imageUrl ?? ""}
        preview={{
          visible: visible,
          onVisibleChange: (vis) => setVisible(vis),
        }}
      />
    </div>
  );
};
