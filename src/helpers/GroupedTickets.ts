export function GroupedTickets(tickets: any[]): any[] {
  const grouped = () => {
    const map = new Map<string, any>();

    tickets.forEach((ticket) => {
      const title = ticket.event_ticket_id?.title ?? "Unknown";

      if (!map.has(title)) {
        map.set(title, {
          title,
          quantity: 0,
          table: "",
        });
      }

      const item = map.get(title)!;
      item.table = ticket.table;
      item.quantity += 1;
    });

    return Array.from(map.values());
  };

  return grouped();
}
