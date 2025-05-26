import * as XLSX from "xlsx";

interface ExcelRow {
  Customer: string;
  Email: string;
  Phone: string;
  Total: number;
  Tickets: string;
  Table: string;
}

export function generateExcelFromOrders(orders: any[], nameExcel: any): void {
  const excelData: ExcelRow[] = orders?.map((order) => {
    const customer = `${order?.users_id?.firstName} ${order?.users_id?.lastName}`;
    const email = order?.users_id?.email;
    const phone = `${order?.users_id?.country_id.code}${order?.users_id?.phoneNumber}`;
    const total = order?.base_price;
    const ticketGroups: Record<string, number> = {};

    (order?.tickets_id ?? [])?.forEach((ticket: any) => {
      const ticketType = ticket.event_ticket_id.title;
      if (!ticketGroups[ticketType]) {
        ticketGroups[ticketType] = 0;
      }
      ticketGroups[ticketType]++;
    });

    const ticketsStr = Object.entries(ticketGroups)
      .map(([type, count]) => `${type} x${count}`)
      .join(", ");

    const tables = (order?.tickets_id ?? [])
      .filter((ticket: any) => ticket.event_ticket_id.isTable && ticket.table)
      .map((ticket: any) => ticket.table)
      .join(", ");

    return {
      Customer: customer,
      Email: email,
      Phone: phone,
      Total: total,
      Tickets: ticketsStr,
      Table: tables,
    };
  });

  // Calcular el gran total
  const grandTotal = (orders ?? [])?.reduce(
    (sum, order) => sum + order.base_price,
    0
  );
  excelData.push({
    Customer: "Total",
    Email: "",
    Phone: "",
    Total: grandTotal,
    Tickets: "",
    Table: "",
  });

  // Crear el libro de Excel
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(excelData);

  // Añadir la hoja al libro
  XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");

  // Escribir el archivo
  XLSX.writeFile(workbook, `${nameExcel}.xlsx`);
}
