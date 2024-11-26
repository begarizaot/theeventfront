import { InputText } from "primereact/inputtext";
import { InputIcon } from "../../../../../../ui";
import { InputTextarea } from "primereact/inputtextarea";

export const EventTitle = () => {
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
                name="eventTitle"
                autoComplete="off"
                required
              />
            </InputIcon>
          </div>
          <div className="col-12">
            <InputIcon>
              <InputTextarea
                name="message"
                rows={5}
                required
                className="text-white px-0 py-2"
                placeholder="Summary (Grab people's attention with a short description about your event.)"
              />
            </InputIcon>
          </div>
        </div>
      </div>
    </div>
  );
};
