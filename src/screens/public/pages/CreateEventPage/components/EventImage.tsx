import { Button, Empty, Image, Upload } from "antd";

interface EventImageProps {
  image: any;
  onImageChange: (image: string) => void;
}

export const EventImageComp = ({ image, onImageChange }: EventImageProps) => {
  const beforeUpload = (file: any) => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      onImageChange(e.target.result);
    };
    reader.readAsDataURL(file);
    return false;
  };

  return (
    <div className="bg-nav p-3 rounded-xl">
      {image ? (
        <Image
          src={image}
          alt="Preview"
          rootClassName=" w-full!"
          className="rounded-lg!"
        />
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          classNames={{ description: "text-white!" }}
          className="m-2!"
        />
      )}

      <div className="text-center mt-2">
        <Upload
          accept=".jpg,.jpeg,.png"
          listType="picture"
          maxCount={1}
          beforeUpload={beforeUpload}
          showUploadList={false} // Oculta lista de archivos
        >
          <Button className="rounded-3xl! btnStyle sm:w-100">
            <span className="font-bold text-base">Upload a file</span>
          </Button>
        </Upload>
      </div>
    </div>
  );
};
