import { InputIcon } from "../../../InputIcon";

import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { AutocompleteMap } from "../../../AutocompleteMap";

interface DateLocationProps {
  data: any;
  inputChange: (ev: any) => void;
  setInput: (data: any) => void;
}

export const DateLocation = ({
  data,
  inputChange,
  setInput,
}: DateLocationProps) => {
  const onAddressChange = (ev: any) => {
    setInput({
      map: {
        idMap: ev.place_id,
        label: ev.vicinity,
        labelCompl: ev.formatted_address.split(",").slice(0, -1).join(","),
        name: ev.name,
        url: ev.url,
      },
    });
  };

  return (
    <div className="grid">
      <div className="col-12">
        <h3 className="m-0 effectPrimary">Date & Time / Location</h3>
      </div>
      <div className="col-12">
        <div className="grid">
          <div className="col-12 sm:col-6">
            <InputIcon icon="pi-calendar">
              <Calendar
                showTime
                hourFormat="12"
                inputClassName="py-1 text-white"
                placeholder="Start Time"
                required
                name="start_date"
                value={data?.start_date}
                onChange={inputChange}
              />
            </InputIcon>
          </div>
          <div className="col-12 sm:col-6">
            <InputIcon icon="pi-calendar">
              <Calendar
                showTime
                hourFormat="12"
                inputClassName="py-1 text-white"
                placeholder="End Time"
                required
                name="end_date"
                value={data?.end_date}
                onChange={inputChange}
              />
            </InputIcon>
          </div>
          <div className="col-12">
            <InputIcon icon="pi-map-marker">
              <InputText
                className="py-1 text-white"
                placeholder="Venue Name"
                name="venue"
                autoComplete="off"
                required
                value={data?.venue}
                onChange={inputChange}
              />
            </InputIcon>
          </div>
          <div className="col-12">
            <AutocompleteMap placeHolder={data.mapCompl} onPlaceSelected={onAddressChange} />
          </div>
        </div>
      </div>
    </div>
  );
};
