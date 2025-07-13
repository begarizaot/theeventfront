import { QRCode, Spin } from "antd";
import { useMarcketing } from "./useMarcketing";

const { VITE_PUBLIC_URL } = import.meta.env;

export const MarcketingPage = () => {
  const {
    eventDate,
    contextHolder,
    loading,
    downloadSvgQRCode,
    downloadExcel,
  } = useMarcketing();

  const onCardClick = ({ title, description, icon, onClick }: any) => {
    return (
      <div
        className="bg-white rounded-xl shadow-lg p-4 duration-300 cursor-pointer hover:scale-103 text-gray-900"
        onClick={onClick}
      >
        <div className="text-center">
          <div className={`pi ${icon} text-3xl`}></div>
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {contextHolder}
      <Spin spinning={loading} fullscreen size="large" />
      <div className="px-4 sm:px-6 py-3 grid gap-3" id="myMarcketing">
        <div className="col-span-1 grid sm:flex items-center justify-between gap-2">
          <div className="grid">
            <h1 className="text-2xl font-bold bebasNeue">Marketing</h1>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* QR Generator Card */}
          {onCardClick({
            title: "QR Generator",
            description:
              "Create custom QR codes for your event. Perfect for sharing quickly and efficiently.",
            icon: "pi-qrcode",
            onClick: downloadSvgQRCode,
          })}

          <QRCode
            type={"svg"}
            value={`${VITE_PUBLIC_URL}/event/${eventDate.id_event}`}
            bgColor="#fff"
            className="hidden!"
          />

          {/* Excel Downloader Card */}
          {onCardClick({
            title: "Export Orders",
            description:
              "Download a complete report of all orders in Excel format. Perfect for analysis and backups.",
            icon: "pi-file-excel",
            onClick: downloadExcel,
          })}
        </div>
      </div>
    </>
  );
};
