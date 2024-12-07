import { useAnalytics } from "./useAnalytics";

import { DataCard, HeaderTable } from "../../ui";

import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export const Analytics = () => {
  const {
    data,
    loading,
    filters,
    globalFilterValue,
    clearFilter,
    onGlobalFilterChange,
  } = useAnalytics();

  return (
    <div className="grid">
      <div className="col-12">
        <div className="grid justify-content-center">
          {[
            { label: "Tickets Sold", value: 331 },
            { label: "Complimentary Tickets", value: 2 },
            { label: "Tickets Scanned", value: 0 },
          ].map((item, index) => (
            <div
              className="col-12 shadow-1 sm:col-6 h-6rem pb-0 sm:pb-2"
              key={index}
            >
              <DataCard label={item.label} value={item.value} />
            </div>
          ))}
        </div>
      </div>
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
          <Column field="name" header="Name" style={{ width: "25%" }}></Column>
        </DataTable>
      </div>
    </div>
  );
};
