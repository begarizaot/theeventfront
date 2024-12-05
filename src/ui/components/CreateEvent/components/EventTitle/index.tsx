import { InputIcon } from "../../../InputIcon";

import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

interface EventTitleProps {
  data: any;
  inputChange: (ev: any) => void;
}

export const EventTitle = ({ data, inputChange }: EventTitleProps) => {
  return (
    <div className="grid">
      <div className="col-12">
        <h3 className="m-0 effectPrimary">Event Title</h3>
      </div>
      <div className="col-12">
        <div className="grid">
          <div className="col-12">
            <InputIcon icon="pi-crown">
              <InputText
                className="py-1 text-white"
                placeholder="Event Title"
                name="event_name"
                autoComplete="off"
                required
                value={data?.event_name}
                onChange={inputChange}
              />
            </InputIcon>
          </div>
          <div className="col-12">
            <InputIcon>
              <InputTextarea
                name="description"
                rows={5}
                className="text-white px-0 py-2"
                placeholder="Summary (Grab people's attention with a short description about your event.)"
                value={data?.description}
                onChange={inputChange}
              />
            </InputIcon>
          </div>
        </div>
      </div>
    </div>
  );
};
