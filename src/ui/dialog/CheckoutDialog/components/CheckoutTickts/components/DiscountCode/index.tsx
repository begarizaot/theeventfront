import { InputText } from "primereact/inputtext";
import { InputIcon } from "../../../../../../components";
import { Button } from "primereact/button";

export const DiscountCode = () => {
  return (
    <div className="flex flex-column">
      <span>Discount Code</span>

      <InputIcon icon="pi-tag" className="mt-2">
        <div className="grid w-full my-auto">
          <div className="col-9 sm:col-10 lg:col-8 xl:col-9 p-0">
            <InputText
              className="py-1 text-white"
              placeholder="Code"
              name="discountCode"
              autoComplete="off"
            />
          </div>
          <div className="col-3 sm:col-2 lg:col-4 xl:col-3 p-0">
            <Button
              label="Apply"
              outlined
              className="border-round-3xl outlinedBtn text-sm h-1rem"
              type="button"
            />
          </div>
        </div>
      </InputIcon>
    </div>
  );
};
