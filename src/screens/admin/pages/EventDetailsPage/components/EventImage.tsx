import { Button, Image } from "antd";

interface EventImageProps {
  imageUrl: string;
  isOrganizer?: boolean;
}

export const EventImageComp = ({ imageUrl, isOrganizer }: EventImageProps) => {
  return (
    <div className="bg-nav p-3 rounded-xl">
      <img
        src={imageUrl ?? ""}
        className="h-110 w-full rounded-lg sm:hidden"
        alt=""
      />

      <Image
        className="h-110! w-full! rounded-lg bg-cover bg-center hidden sm:block"
        rootClassName="w-full"
        src="error"
        fallback={imageUrl ?? ""}
      />
      {isOrganizer && (
        <div className="text-center mt-3">
          <Button className="rounded-3xl! btnStyle font-bold! px-7!">
            Upload File
          </Button>
        </div>
      )}
    </div>
  );
};
