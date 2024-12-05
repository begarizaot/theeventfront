import "./styles.scss";
import { InputIcon } from "../../components";

import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { ColorPicker } from "primereact/colorpicker";
import { useNewTickes } from "./hooks/useNewTickes";

interface NewTickesProps {
  data?: any;
  visible: boolean;
  showVisible: () => void;
  submitTicket: (e: any) => void;
}

export const NewTickes = (reqData: NewTickesProps) => {
  const { visible, showVisible, data } = reqData;
  const {
    formState,
    onInputChange,
    onSubmitTicket,
    onCheckboxChange,
    setAutocompleteOff,
  } = useNewTickes(reqData);

  return (
    <Sidebar
      visible={visible}
      position="right"
      onHide={() => {
        showVisible();
      }}
      blockScroll={true}
      closeOnEscape={false}
      dismissable={false}
      maskClassName="newTickes"
    >
      <form className="grid text-white" onSubmit={onSubmitTicket}>
        <div className="col-12 text-3xl font-bold">
          {data.name ? "Update" : "Create"}
          <span className="effectPrimary">Ticket</span>
        </div>
        <div className="col-12">
          <div className="grid">
            <div className="col-12">
              <InputIcon icon="pi-ticket">
                <InputText
                  className="py-1 text-white"
                  placeholder="Name Ticket"
                  name="name"
                  autoComplete="off"
                  required
                  onChange={onInputChange}
                  value={formState.name}
                />
              </InputIcon>
              <span className="text-xs text-white-alpha-60">
                This is the name of the ticket type. For example: General
                admission, VIP, Early bird.
              </span>
            </div>

            <div className="col-12">
              <InputIcon icon="pi-money-bill">
                <InputNumber
                  inputClassName="py-1 text-white"
                  placeholder="Price"
                  required
                  name="price"
                  onChange={onInputChange}
                  value={formState.price}
                  inputRef={setAutocompleteOff(0)}
                />
              </InputIcon>
              <span className="text-xs text-white-alpha-60">
                Type in the price for your ticket type. Fees are separate and
                will be displayed and calculated at check out.
              </span>
            </div>
            <div className="col-12">
              <InputIcon icon="pi-money-bill">
                <InputNumber
                  inputClassName="py-1 text-white"
                  placeholder="Event Max Capacity"
                  required
                  name="max_capacity"
                  onChange={onInputChange}
                  value={formState.max_capacity}
                  inputRef={setAutocompleteOff(1)}
                />
              </InputIcon>
              <span className="text-xs text-white-alpha-60">
                This is the max amount of tickets available online for this
                ticket type.
              </span>
            </div>
            <div className="col-12">
              <InputIcon icon="pi-money-bill">
                <InputNumber
                  inputClassName="py-1 text-white"
                  placeholder="Ticket Order Limit"
                  required
                  name="event_capacity"
                  max={8}
                  onChange={onInputChange}
                  value={formState.event_capacity}
                  inputRef={setAutocompleteOff(2)}
                />
              </InputIcon>
              <span className="text-xs text-white-alpha-60">
                8 is the maximum number of tickets that the user can buy online
                for this type of ticket.
              </span>
            </div>
            <div className="col-12 flex flex-column gap-2">
              <span className="text-xs text-white-alpha-60">
                Select a color for the ticket type to help you identify it
              </span>
              <ColorPicker
                format="hex"
                className="w-4"
                inputClassName="w-full"
                name="color"
                onChange={onInputChange}
                value={formState.color}
              />
            </div>
            <div className="col-12">
              <InputIcon>
                <InputTextarea
                  name="description"
                  rows={5}
                  required
                  className="text-white px-0 py-2"
                  placeholder={`2 General
Exposure Booth
Logo in Flyer
Logo in Event Back Drop
Live Mention`}
                  onChange={onInputChange}
                  value={formState.description}
                />
              </InputIcon>
              <span className="text-xs text-white-alpha-60">
                Enter a brief description of what this ticket type includes,
                such as special access, perks, or requirements.
              </span>
            </div>

            <div className="mt-2 flex align-items-center">
              <Checkbox
                inputId="promotional"
                name="available"
                onChange={onCheckboxChange}
                checked={formState.available}
              />
              <label htmlFor="promotional" className="ml-2 text-xs">
                Ticket Visible{" "}
                <span className="text-white-alpha-50">
                  (Ticket is visible on event)
                </span>
              </label>
            </div>

            <div className="col-12 mt-2">
              <span>Ticket Sale Star / End Times</span>
            </div>

            <div className="col-12 sm:col-6">
              <InputIcon icon="pi-calendar">
                <Calendar
                  id="calendar-12h"
                  showTime
                  hourFormat="12"
                  inputClassName="py-1 text-white"
                  placeholder="Start Time"
                  name="start_date"
                  required
                  onChange={onInputChange}
                  value={formState.start_date}
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
                  name="end_date"
                  required
                  onChange={onInputChange}
                  value={formState.end_date}
                />
              </InputIcon>
            </div>
            <div className="col-12">
              <Button
                label={`${data.name ? "Update" : "Create"} Ticket`}
                outlined
                className="w-full border-round-3xl outlinedBtn text-sm"
                type="submit"
              />
            </div>
          </div>
        </div>
      </form>
    </Sidebar>
  );
};
