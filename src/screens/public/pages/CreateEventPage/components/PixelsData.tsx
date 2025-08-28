import { Button, Input } from "antd";
import { useState } from "react";
import { postCreatePixel, putUpdatePixel } from "../../../../../store/thunks";

interface PixelsDataProps {
  pixelDatas: any;
  eventData?: any;
  onLoading?: (loading: boolean) => void;
}

export const PixelsData = ({
  pixelDatas,
  eventData,
  onLoading,
}: PixelsDataProps) => {
  const [pixels, setPixels] = useState(pixelDatas);

  const onChangePixel = (e: any, type: any) => {
    setPixels({
      ...pixels,
      [type]: e.target.value,
    });
  };

  const onSavePixelData = async () => {
    onLoading?.(true);
    try {
      if (pixels.id) {
        await putUpdatePixel(pixels.id, pixels);
        return onLoading?.(false);
      }

      await postCreatePixel(eventData?.id_event, pixels);
      onLoading?.(false);
    } catch (error) {
      onLoading?.(false);
    }
  };

  return (
    <>
      <div className="col-span-1 flex items-center justify-between">
        <h1 className="text-2xl font-bold bebasNeue">Pixel Datas</h1>
      </div>
      <div className="bg-nav p-3! rounded-xl text-white!">
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
            <div className="col-span-1 sm:col-span-2 grid">
              <span className="text-white mb-1">Pixel Tik Tok</span>
              <Input
                placeholder="Enter Tik Tok Pixel"
                className="rounded-full! bg-transparent! border-white! text-white!"
                classNames={{
                  input: "placeholder-white/20! py-[6px]!",
                }}
                inputMode="text"
                autoComplete="off"
                value={pixels?.pixel_tiktok_id || ""}
                onChange={(e) => onChangePixel(e, "pixel_tiktok_id")}
              />
            </div>
          </div>
          <div className="col-span-2 mt-2 text-end">
            <Button
              htmlType="button"
              className="w-full sm:w-50 rounded-3xl! uppercase btnStyle"
              onClick={onSavePixelData}
            >
              <span className="font-bold text-xs">Save Pixel Data</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
