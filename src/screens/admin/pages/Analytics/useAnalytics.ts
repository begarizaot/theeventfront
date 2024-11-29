import { FilterMatchMode, FilterOperator } from "primereact/api";
import { useEffect, useState } from "react";

export const useAnalytics = () => {
  const [data, setData] = useState([{ name: "brayan" }, { name: "name" }]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<any>();
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  useEffect(() => {
    initFilters();
  }, []);

  const clearFilter = () => {
    initFilters();
  };

  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
    });
    setGlobalFilterValue("");
  };

  const onGlobalFilterChange = (e: any) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  return {
    data,
    loading,
    filters,
    globalFilterValue,
    clearFilter,
    onGlobalFilterChange,
  };
};
