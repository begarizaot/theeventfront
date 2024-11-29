import { Button } from "primereact/button";
import { useAnalytics } from "./useAnalytics";

import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "../../../../ui";
import { InputText } from "primereact/inputtext";

export const Analytics = () => {
  const {
    data,
    loading,
    filters,
    globalFilterValue,
    clearFilter,
    onGlobalFilterChange,
  } = useAnalytics();

  const renderHeader = () => {
    return (
      <div className="flex justify-content-between">
        <Button
          type="button"
          icon="pi pi-sync"
          outlined
          
          className="border-round-3xl outlinedBtn text-sm"
        />

        <div className="flex align-items-center gap-3">
          <InputIcon icon="pi pi-search" className="w-auto">
            <InputText
              value={globalFilterValue}
              onChange={onGlobalFilterChange}
              placeholder="Search email, status"
              className="py-1 text-white"
            />
          </InputIcon>
          {globalFilterValue.length > 0 && (
            <span className="pi pi-times-circle text-white cursor-pointer" onClick={clearFilter}></span>
          )}
        </div>
      </div>
    );
  };

  const header = renderHeader();

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
              <div className="bgCard flex flex-column p-2 border-round h-full">
                <p className="m-0">{item.label}</p>
                <h1 className="m-0 ml-auto mt-auto">{item.value}</h1>
              </div>
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
          header={header}
          className="contTable"
        >
          <Column field="name" header="Name" style={{ width: "25%" }}></Column>
          {/* <Column
            field="country.name"
            header="Country"
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="company"
            header="Company"
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="representative.name"
            header="Representative"
            style={{ width: "25%" }}
          ></Column> */}
        </DataTable>
      </div>
    </div>
  );
};
