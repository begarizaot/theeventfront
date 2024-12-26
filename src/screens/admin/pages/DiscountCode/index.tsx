import { useDiscountCode } from "./hooks/useDiscountCode";

import { CreateCodeSidebar, DataCard, TableComp } from "../../ui";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Skeleton } from "primereact/skeleton";
import { Toast } from "primereact/toast";
import moment from "moment";

export const DiscountCode = () => {
  const {
    data,
    pages,
    loading,
    eventId,
    toastErr,
    editData,
    analytic,
    pagination,
    isCreateCode,
    onFetch,
    onRefresh,
    onEditCode,
    onPageChange,
    showCreateCode,
    onActiveInactive,
    onSearchDiscountCode,
  } = useDiscountCode();

  return (
    <>
      <Toast ref={toastErr} />
      <CreateCodeSidebar
        data={editData}
        eventId={eventId}
        visible={isCreateCode}
        showVisible={showCreateCode}
        createUdateCode={onFetch}
      />
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
              analytic?.map((item: any, index: any) => (
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
            label="Create Code"
            type="button"
            outlined
            className="border-round-3xl outlinedBtn text-sm"
            onClick={showCreateCode}
          />
        </div>

        <div className="col-12">
          <TableComp
            first={pages.first || 0}
            pagination={pagination}
            onSearch={onSearchDiscountCode}
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
                field="name"
                header="Name"
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="state"
                header="Type"
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="value"
                header="Value"
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="amount"
                header="Used"
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="amount_max"
                header="Maximum uses"
                style={{ width: "25%" }}
              ></Column>
              <Column
                header="Date start-end"
                style={{ width: "25%" }}
                body={(ev) => (
                  <span className="text-sm">
                    {moment(ev.start_date).format("YYYY/MM/DD")} -{" "}
                    {moment(ev.end_date).format("YYYY/MM/DD")}
                  </span>
                )}
              ></Column>
              <Column
                field="name"
                header="Status"
                style={{ width: "25%" }}
                body={(ev) => (
                  <span
                    className={`${
                      !ev.disable ? "bg-green-900" : "bg-red-900"
                    } px-3 py-2 border-round text-sm cursor-pointer`}
                    onClick={() => onActiveInactive(ev)}
                  >
                    {!ev.disable ? "Active" : "Inactive"}
                  </span>
                )}
              ></Column>
              <Column
                header="Action"
                style={{ width: "25%" }}
                body={(ev) => (
                  <div className="flex gap-2">
                    <span
                      className="pi pi-pencil cursor-pointer"
                      onClick={() => onEditCode(ev)}
                    ></span>
                  </div>
                )}
              ></Column>
            </DataTable>
          </TableComp>
        </div>
      </div>
    </>
  );
};
