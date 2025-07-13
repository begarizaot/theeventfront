import { useEffect, useState } from "react";
import { useWindowSize } from "../../../../hooks";

export const useListCategories = () => {
  const { width } = useWindowSize();
  const [allCategories, setAllCategories] = useState<any>([]);

  useEffect(() => {
    fetchAllCategories();
  }, [width]);

  const fetchAllCategories = async () => {
    const data = [
      {
        id: 1,
        name: "All",
        active: true,
      },
      {
        id: 2,
        name: "Bachata",
      },
      {
        id: 3,
        name: "Cumbia",
      },
      {
        id: 4,
        name: "Reggaeton",
      },
      {
        id: 5,
        name: "Regional",
      },
      {
        id: 6,
        name: "Rock",
      },
      {
        id: 7,
        name: "Salsa",
      },
    ];

    width < 640
      ? setAllCategories(data.slice(0, 4))
      : width < 1024
      ? setAllCategories(data.slice(0, 5))
      : setAllCategories(data);
  };

  const onCategoryClick = (id: number) => {
    setAllCategories((prev: any) =>
      (prev ?? []).map((category: any) => ({
        ...category,
        active: category.id === id,
      }))
    );
  };
  return { allCategories, onCategoryClick };
};
