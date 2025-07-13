import { useListCategories } from "./useListCategories";

export const ListCategoriesComp = () => {
  const { allCategories, onCategoryClick } = useListCategories();

  return (allCategories ?? []).map((category: any) => (
    <div
      className={`
                    px-3 sm:px-4 
                    py-1 
                    rounded-3xl 
                    cursor-pointer 
                    text-xs sm:text-base
                    hover:bg-white/20 
                    ${category.active ? "bgPrimary" : "border"}`}
      key={category.id}
      onClick={() => onCategoryClick(category.id)}
    >
      {category.name}
    </div>
  ));
};
