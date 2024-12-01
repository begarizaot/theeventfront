import { Button } from "primereact/button";
import { InputIcon } from "../../../../../ui";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

interface HeaderTableProps {
  filterValue: string;
  clearFilter: () => void;
  onFilterChange: (e: any) => void;
  placeholder?: string;
}

export const HeaderTable = ({
  clearFilter,
  filterValue,
  onFilterChange,
  placeholder = "Search",
}: HeaderTableProps) => {
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
            value={filterValue}
            onChange={onFilterChange}
            placeholder={placeholder}
            className="py-1 text-white"
          />
        </InputIcon>
        {filterValue.length > 0 && (
          <span
            className="pi pi-times-circle text-white cursor-pointer"
            onClick={clearFilter}
          ></span>
        )}
      </div>
    </div>
  );
};
