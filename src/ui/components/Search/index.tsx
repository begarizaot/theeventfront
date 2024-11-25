import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useForm } from "../../../hooks";

export const Search = () => {
  const { search, onInputChange }: any = useForm({ search: "" });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (search.trim().length <= 2) return;
    console.log(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full bg-white border-round-3xl flex align-items-center py-1 px-3">
        <InputText
          className="bg-transparent w-full border-0"
          placeholder="Search events by name, artist or genre"
          name="search"
          value={search}
          onChange={onInputChange}
          autoComplete="off"
        />
        <Button
          icon="pi pi-search"
          className="border-circle bgBody border-0 text-xs sm:text-sm"
        />
      </div>
    </form>
  );
};
