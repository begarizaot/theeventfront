import { useEffect, useState } from "react";
import { FilterTable } from "../../../../helpers";

export const useFreeTickets = () => {
  const filterTable = FilterTable();
  const { initFilters } = filterTable;

  const [data, setData] = useState([{ name: "brayan" }, { name: "name" }]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initFilters();
  }, []);

  return {
    data,
    loading,
    ...filterTable,
  };
};
