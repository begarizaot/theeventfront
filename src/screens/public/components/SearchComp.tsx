interface SearchCompProps {
  className?: string;
}
export const SearchComp = ({ className }: SearchCompProps) => {
  return (
    <div
      className={`${className} items-center bg-white/10 py-[6px] px-3 rounded-full col-span-2 text-xs justify-between cursor-pointer`}
    >
      <div className="flex items-center gap-2">
        <span className="pi pi-search"></span>
        <p>Search</p>
      </div>
      <div className="flex items-center gap-1 border-l pl-2">
        <span className="pi pi-map-marker"></span>
        <p>New York</p>
        <span className="pi pi-chevron-down"></span>
      </div>
    </div>
  );
};
