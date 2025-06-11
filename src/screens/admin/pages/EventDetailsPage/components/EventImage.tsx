import { Image } from "antd";

interface EventImageProps {
  imageUrl: string;
}

export const EventImageComp = ({ imageUrl }: EventImageProps) => {
  return (
    <div className="bg-nav p-3 rounded-xl">
      <img
        src={imageUrl ?? ""}
        className="h-110 w-full rounded-lg sm:hidden"
        alt=""
      />

      <Image
        className="h-210! w-full! rounded-lg bg-cover bg-center hidden sm:block"
        rootClassName="w-full"
        src="error"
        fallback={imageUrl ?? ""}
      />
    </div>
  );
};
