import { useContext } from "react";
import { useFreeTickets } from "./useFreeTickets";

import { HeaderTable } from "../../ui";
import { CheckoutContext } from "../../../../context";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export const FreeTickets = () => {
  const { showCheckout } = useContext(CheckoutContext);

  const {
    data,
    loading,
    filters,
    globalFilterValue,
    clearFilter,
    onGlobalFilterChange,
  } = useFreeTickets();

  return (
    <div className="grid">
      <div className="col-12">
        <div className="grid justify-content-center">
          <div className="col-12 shadow-1 sm:col-6 h-6rem pb-0 sm:pb-2">
            <div className="bgCard flex flex-column p-2 border-round h-full">
              <p className="m-0">Tickets Submitted</p>
              <h1 className="m-0 ml-auto mt-auto">2</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 text-right">
        <Button
          label="Create Free Ticket"
          type="button"
          outlined
          className="border-round-3xl outlinedBtn text-sm"
          onClick={showCheckout}
        />
      </div>

      <div className="col-12">
        <div className="col-12">
          <DataTable
            value={data}
            paginator
            rows={5}
            loading={loading}
            filters={filters}
            globalFilterFields={["name"]}
            emptyMessage="No customers found."
            header={HeaderTable({
              clearFilter,
              filterValue: globalFilterValue,
              onFilterChange: onGlobalFilterChange,
            })}
            className="contTable"
          >
            <Column
              field="name"
              header="Name"
              style={{ width: "25%" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};
