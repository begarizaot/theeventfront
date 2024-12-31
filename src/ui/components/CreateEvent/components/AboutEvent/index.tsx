import { InputIcon } from "../../../InputIcon";

import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";

interface AboutEventProps {
  listCategories: any[];
  listAgeRestrictions: any[];
  data: any;
  inputChange: (ev: any) => void;
  checkboxChange: (ev: any) => void;
  autocompleteOff: (index: any) => (el: any) => void;
}

export const AboutEvent = ({
  inputChange,
  data,
  listCategories,
  listAgeRestrictions,
}: AboutEventProps) => {
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
                options={listCategories}
                placeholder="Choose a category (Optional)"
                className="text-white"
                name="event_category"
                value={data?.event_category}
                onChange={inputChange}
              />
            </InputIcon>
          </div>
          <div className="col-12">
            <InputIcon>
              <Dropdown
                options={listAgeRestrictions}
                placeholder="Choose a Age Restrictions"
                className="text-white"
                name="event_age_restriction"
                required
                value={data?.event_age_restriction}
                onChange={inputChange}
              />
            </InputIcon>
          </div>
          <div className="col-12">
            <InputIcon icon="pi-phone">
              <InputMask
                id="phone"
                mask="(999) 999-9999"
                placeholder="(999) 999-9999"
                required={data?.receiveSms}
                name="contact_phone"
                value={data?.contact_phone}
                onChange={inputChange}
                autoComplete="off"
                className="py-1 text-white"
              ></InputMask>
            </InputIcon>

            {/* <div className="mt-2 flex align-items-center">
              <Checkbox
                inputId="receive"
                name="receiveSms"
                onChange={checkboxChange}
                checked={data?.receiveSms}
              />
              <label htmlFor="receive" className="ml-2 text-xs">
                I agree to receive text notifications about this event.
              </label>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
