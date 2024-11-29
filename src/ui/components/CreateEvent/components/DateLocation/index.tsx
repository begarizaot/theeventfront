import { InputIcon } from "../../../InputIcon";

import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

export const DateLocation = () => {
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
                id="calendar-12h"
                showTime
                hourFormat="12"
                inputClassName="py-1 text-white"
                placeholder="Start Time"
              />
            </InputIcon>
          </div>
          <div className="col-12 sm:col-6">
            <InputIcon icon="pi-calendar">
              <Calendar
                id="calendar-12h"
                showTime
                hourFormat="12"
                inputClassName="py-1 text-white"
                placeholder="End Time"
              />
            </InputIcon>
          </div>
          <div className="col-12">
            <InputIcon icon="pi-map-marker">
              <InputText
                className="py-1 text-white"
                placeholder="Venue Name"
                name="eventTitle"
                autoComplete="off"
                required
              />
            </InputIcon>
          </div>
          <div className="col-12">
            <InputIcon icon="pi-map-marker">
              <InputText
                className="py-1 text-white"
                placeholder="Address"
                name="eventTitle"
                autoComplete="off"
                required
              />
            </InputIcon>
          </div>
        </div>
      </div>
    </div>
  );
};
