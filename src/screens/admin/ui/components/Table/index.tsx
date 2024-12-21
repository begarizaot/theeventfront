import { Button } from "primereact/button";
import { InputIcon } from "../../../../../ui";
import { InputText } from "primereact/inputtext";
import { Paginator } from "primereact/paginator";
import { useCallback, useState } from "react";
import debounce from "lodash.debounce";

interface TableCompProps {
  children: React.ReactNode;
  first: any;
  pagination: any;
  onSearch: (data: string) => void;
  onPage: (data: any) => void;
  onRefresh?: () => void;
}
export const TableComp = ({
  children,
  first,
  pagination,
  onSearch,
  onPage,
  onRefresh,
}: TableCompProps) => {
  const [search, setsearch] = useState("");

  const onChange = (e: any) => {
    setsearch(e.target.value);
    onChangeSearch(e.target.value);
  };

  const onClearSearch = () => {
    setsearch("");
    onChangeSearch("");
  };

  const onChangeSearch = useCallback(
    debounce((data) => {
      onSearch(data);
    }, 500),
    []
  );

  return (
    <div className="border-1 pt-3 border-round bgBorder">
      <div className="flex justify-content-between px-3">
        <Button
          type="button"
          icon="pi pi-sync"
          outlined
          className="border-round-3xl outlinedBtn text-sm"
          onClick={onRefresh}
        />

        <div className="flex align-items-center gap-3">
          <InputIcon icon="pi pi-search" className="w-auto">
            <InputText
              placeholder="Search"
              className="py-1 text-white"
              value={search}
              onChange={onChange}
            />
          </InputIcon>
          {search.length > 0 && (
            <span
              className="pi pi-times-circle text-white cursor-pointer"
              onClick={onClearSearch}
            ></span>
          )}
        </div>
      </div>
      <div className="my-3">{children}</div>
      {pagination?.total > 6 && (
        <div className="border-top-1 bgBorder">
          <Paginator
            first={first || 0}
            rows={pagination?.pageSize || 6}
            totalRecords={pagination?.total || 0}
            onPageChange={onPage}
          />
        </div>
      )}
    </div>
  );
};
