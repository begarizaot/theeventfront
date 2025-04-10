import { useEffect, useState } from "react";

export const useTicketControl = () => {
  const [dataTickes, setDataTickes] = useState<any[]>([]);

  useEffect(() => {
    fechDataTickes();
  }, []);

  const fechDataTickes = async () => {
    setDataTickes([
      {
        key: "1",
        customer: "Andrew Jackson",
        phone: "+1 456-546-5465",
        tickets: 2,
        discountCode: "",
        purchasedDate: "2023-10-01",
        total: 200,
      },
      {
        key: "1",
        customer: "Andrew Jackson",
        phone: "+1 456-546-5465",
        tickets: 2,
        discountCode: "",
        purchasedDate: "2023-10-01",
        total: 200,
      },
      {
        key: "1",
        customer: "Andrew Jackson",
        phone: "+1 456-546-5465",
        tickets: 2,
        discountCode: "",
        purchasedDate: "2023-10-01",
        total: 200,
      },
      {
        key: "1",
        customer: "Andrew Jackson",
        phone: "+1 456-546-5465",
        tickets: 2,
        discountCode: "",
        purchasedDate: "2023-10-01",
        total: 200,
      },
      {
        key: "1",
        customer: "Andrew Jackson",
        phone: "+1 456-546-5465",
        tickets: 2,
        discountCode: "",
        purchasedDate: "2023-10-01",
        total: 200,
      },
      {
        key: "1",
        customer: "Andrew Jackson",
        phone: "+1 456-546-5465",
        tickets: 2,
        discountCode: "",
        purchasedDate: "2023-10-01",
        total: 200,
      },
      {
        key: "1",
        customer: "Andrew Jackson",
        phone: "+1 456-546-5465",
        tickets: 2,
        discountCode: "",
        purchasedDate: "2023-10-01",
        total: 200,
      },
      {
        key: "1",
        customer: "Andrew Jackson",
        phone: "+1 456-546-5465",
        tickets: 2,
        discountCode: "",
        purchasedDate: "2023-10-01",
        total: 200,
      },
      {
        key: "1",
        customer: "Andrew Jackson",
        phone: "+1 456-546-5465",
        tickets: 2,
        discountCode: "",
        purchasedDate: "2023-10-01",
        total: 200,
      },
      {
        key: "1",
        customer: "Andrew Jackson",
        phone: "+1 456-546-5465",
        tickets: 2,
        discountCode: "",
        purchasedDate: "2023-10-01",
        total: 200,
      },
      {
        key: "1",
        customer: "Andrew Jackson",
        phone: "+1 456-546-5465",
        tickets: 2,
        discountCode: "",
        purchasedDate: "2023-10-01",
        total: 200,
      },
      {
        key: "1",
        customer: "Andrew Jackson",
        phone: "+1 456-546-5465",
        tickets: 2,
        discountCode: "",
        purchasedDate: "2023-10-01",
        total: 200,
      },
      {
        key: "1",
        customer: "Andrew Jackson",
        phone: "+1 456-546-5465",
        tickets: 2,
        discountCode: "",
        purchasedDate: "2023-10-01",
        total: 200,
      },
      {
        key: "1",
        customer: "Andrew Jackson",
        phone: "+1 456-546-5465",
        tickets: 2,
        discountCode: "",
        purchasedDate: "2023-10-01",
        total: 200,
      },
      {
        key: "1",
        customer: "Andrew Jackson",
        phone: "+1 456-546-5465",
        tickets: 2,
        discountCode: "",
        purchasedDate: "2023-10-01",
        total: 200,
      },
      {
        key: "1",
        customer: "Andrew Jackson",
        phone: "+1 456-546-5465",
        tickets: 2,
        discountCode: "",
        purchasedDate: "2023-10-01",
        total: 200,
      },
    ]);
  };

  return { dataTickes };
};
