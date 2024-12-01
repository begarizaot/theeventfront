import { useEffect, useState } from "react";
import { FilterTable } from "../../../../helpers";

export const useDiscountCode = () => {
  const filterTable = FilterTable();
  const { initFilters } = filterTable;

  const [isCreateCode, setIsCreateCode] = useState(false);

  const [data, setData] = useState([{ name: "brayan" }, { name: "name" }]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initFilters();
  }, []);

  const showCreateCode = () => {
    setIsCreateCode(!isCreateCode);
  };

  return {
    data,
    loading,
    ...filterTable,
    isCreateCode,
    showCreateCode,
  };
};
