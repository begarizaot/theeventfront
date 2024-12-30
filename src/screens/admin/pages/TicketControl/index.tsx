import moment from "moment";
import { useTicketControl } from "./hooks/useTicketControl";

import { TableComp } from "../../ui";
import { NumberFormat } from "../../../../helpers";

import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Toast } from "primereact/toast";

export const TicketControl = () => {
  const {
    data,
    pages,
    loading,
    pagination,
    toastErrEmail,
    onPageChange,
    onRefresh,
    onSearchTicketControl,
    onForwardMail,
  } = useTicketControl();

  return (
    <>
      <Toast ref={toastErrEmail} />
      <div className="grid">
        <div className="col-12">
          <TableComp
            first={pages.first || 0}
            pagination={pagination}
            onSearch={onSearchTicketControl}
            onPage={onPageChange}
            onRefresh={onRefresh}
          >
            <DataTable
              value={data}
              loading={loading}
              emptyMessage="No customers found."
              className="contTable"
            >
              <Column
                header="Actions"
                body={(ev) => (
                  <div className="flex gap-1">
                    <span
                      className="pi pi-envelope cursor-pointer"
                      onClick={() => onForwardMail(ev.id_order)}
                    ></span>
                  </div>
                )}
              ></Column>
              <Column
                header="Customer"
                body={(ev) => (
                  <div className="text-sm flex flex-column">
                    <div className="flex gap-1">
                      <span className="firstLetter">
                        {ev?.user_id?.firstname}
                      </span>
                      <span className="firstLetter">
                        {ev?.user_id?.lastname}
                      </span>
                    </div>
                    <span>{ev?.user_id?.email}</span>
                  </div>
                )}
              ></Column>
              <Column field="user_id.phone" header="Phone Number"></Column>
              <Column
                field="total_base"
                header="Total"
                body={(ev) => `$${NumberFormat(ev?.total_base || 0, 2)}`}
              ></Column>
              <Column
                field="tickets"
                header="Tickets"
                body={(ev) => (
                  <div className="flex flex-column">
                    {ev?.tickets?.map((item: any, index: number) => (
                      <div key={index} className="text-md flex gap-1">
                        <span>{item?.name}</span>
                        <span> x{item?.amount}</span>
                      </div>
                    ))}
                  </div>
                )}
              ></Column>
              <Column
                field="discount_code_id.name"
                header="Discount Code"
              ></Column>
              <Column
                field="publishedAt"
                header="Purchased Date"
                body={(ev) =>
                  moment(ev?.publishedAt).format("MM/DD/YYYY") || ""
                }
              ></Column>
            </DataTable>
          </TableComp>
        </div>
      </div>
    </>
  );
};
