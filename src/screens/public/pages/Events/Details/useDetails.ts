import { message } from "antd";
import { useParams } from "react-router-dom";

export const useDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [messageApi, contextHolder] = message.useMessage();
  const shareData = [
    {
      icon: "pi pi-twitter",
      to: `https://twitter.com/intent/tweet?url=`,
      class: "border-1",
    },
    {
      icon: "pi pi-whatsapp",
      to: `https://web.whatsapp.com/send?text=`,
      class: "bgWhatsapp",
    },
    {
      icon: "pi pi-comment",
      to: `sms:?body=`,
      class: "bgSms",
    },
    {
      icon: "pi pi-copy",
      class: "bgCopy",
      onClick: () => onCopy(),
    },
  ];

  const details = [
    {
      icon: "pi pi-building",
      label: "Grand Fortune",
    },
    {
      icon: "pi pi-map-marker",
      label: "1104 E Fowler Ave, Tampa, FL 33612",
      to: `https://www.google.com/maps/search/?api=1&query=1104 E Fowler Ave, Tampa, FL 33612`,
    },
    {
      icon: "pi pi-calendar",
      label: `Friday, February 14, 2025`,
    },
    {
      icon: "pi pi-clock",
      label: `10:00 pm - 03:00 am`,
    },
    {
      icon: "pi pi-id-card",
      label: "18+",
      hidden: true,
    },
  ];

  const onCopy = () => {
    console.log("Copy");
    messageApi.open({
      type: "success",
      content: "Link Copied",
    });
  };

  return { shareData, contextHolder, details };
};
