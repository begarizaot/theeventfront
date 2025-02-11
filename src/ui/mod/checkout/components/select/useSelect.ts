import { useState } from "react";

export const useSelect = () => {
  const [listTicket] = useState<any[]>([
    {
      id: 1,
      name: "General",
      price: 20,
      quantity: 0,
      description: `Ticket general
    No incluye silla ni mesa
    Non refundable`,
    },
    {
      id: 2,
      name: "VIP",
      price: 50,
      quantity: 0,
    },
    {
      id: 3,
      name: "VVIP",
      price: 100,
      quantity: 0,
    },
  ]);
  const [ticketSelect] = useState<any[]>([
    {
      id: 1,
      name: "General",
      price: 20,
      quantity: 2,
    },
    {
      id: 2,
      name: "VIP",
      price: 50,
      quantity: 1,
    },
  ]);

  return { ticketSelect, listTicket };
};
