import { useDiscountCode } from "./useDiscountCode";

import { CreateCodeSidebar, DataCard, HeaderTable } from "../../ui";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export const DiscountCode = () => {
  const {
    data,
    loading,
    filters,
    globalFilterValue,
    isCreateCode,
    clearFilter,
    onGlobalFilterChange,
    showCreateCode,
  } = useDiscountCode();

  return (
    <>
      <CreateCodeSidebar visible={isCreateCode} showVisible={showCreateCode} />
      <div className="grid">
        <div className="col-12">
          <div className="grid justify-content-center">
            <div className="col-12 shadow-1 sm:col-6 h-6rem pb-0 sm:pb-2">
              <DataCard label="Codes Created" value="1" />
            </div>
          </div>
        </div>

        <div className="col-12 text-right">
          <Button
            label="Create Code"
            type="button"
            outlined
            className="border-round-3xl outlinedBtn text-sm"
            onClick={showCreateCode}
          />
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
            <Column
              field="name"
              header="Name"
              style={{ width: "25%" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </>
  );
};
