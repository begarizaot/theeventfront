import { useFreeTickets } from "./hooks/useFreeTickets";
import moment from "moment";

import { DataCard, TableComp } from "../../ui";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Skeleton } from "primereact/skeleton";

export const FreeTickets = () => {
  const {
    data,
    pages,
    loading,
    analytic,
    pagination,
    toastErrEmail,
    onRefresh,
    onPageChange,
    onForwardMail,
    onSearchFreeTickets,
    onCreateFreeTicket,
  } = useFreeTickets();

  return (
    <>
      <Toast ref={toastErrEmail} />
      <div className="grid">
        <div className="col-12">
          <div className="grid justify-content-center">
            {loading &&
              analytic.length == 0 &&
              [1].map((val) => (
                <div className="col-12 sm:col-6 pb-0 sm:pb-2" key={val}>
                  <Skeleton className="h-6rem"></Skeleton>
                </div>
              ))}
            {(!loading || analytic.length > 0) &&
              analytic?.map((item: any, index:any) => (
                <div
                  className="col-12 shadow-1 sm:col-6 h-6rem pb-0 sm:pb-2"
                  key={index}
                >
                  <DataCard data={item} />
                </div>
              ))}
          </div>
        </div>

        <div className="col-12 text-right">
          <Button
            label="Create Free Ticket"
            type="button"
            outlined
            className="border-round-3xl outlinedBtn text-sm"
            onClick={onCreateFreeTicket}
          />
        </div>

        <div className="col-12">
          <TableComp
            first={pages.first || 0}
            pagination={pagination}
            onSearch={onSearchFreeTickets}
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
