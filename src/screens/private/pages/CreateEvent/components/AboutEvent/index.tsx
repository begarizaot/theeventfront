import { Dropdown } from "primereact/dropdown";
import { InputIcon } from "../../../../../../ui";
import { InputNumber } from "primereact/inputnumber";
import { Checkbox } from "primereact/checkbox";

export const AboutEvent = () => {
  return (
    <div className="grid">
      <div className="col-12">
        <h3 className="m-0 effectPrimary">About This Event</h3>
      </div>
      <div className="col-12">
        <div className="grid">
          <div className="col-12">
            <InputIcon>
              <Dropdown
                options={[{ label: "Category", value: null }]}
                placeholder="Choose a category (Optional)"
                className="text-white"
              />
            </InputIcon>
          </div>
          <div className="col-12">
            <InputIcon icon="pi-phone">
              <InputNumber
                inputClassName="py-1 text-white"
                placeholder="Phone Number"
                required
                useGrouping={false}
              />
            </InputIcon>

            <div className="mt-2 flex align-items-center">
              <Checkbox
                inputId="promotional"
                value=""
                onChange={() => {}}
                checked={true}
              />
              <label htmlFor="promotional" className="ml-2 text-xs">
                I agree to receive text notifications about this event.
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
