import "./styles.scss";
import { InputIcon } from "../../components";

import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";

interface NewTickesProps {
  visible: boolean;
  showVisible: () => void;
}

export const NewTickes = ({ showVisible, visible }: NewTickesProps) => {
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
      <div className="grid text-white">
        <div className="col-12 text-3xl font-bold">
          Create <span className="effectPrimary">Ticket</span>
        </div>
        <div className="col-12">
          <div className="grid">
            <div className="col-12">
              <InputIcon icon="pi-ticket">
                <InputText
                  className="py-1 text-white"
                  placeholder="Name Ticket"
                  name="email"
                  autoComplete="off"
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
                  useGrouping={false}
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
                  useGrouping={false}
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
                  useGrouping={false}
                />
              </InputIcon>
              <span className="text-xs text-white-alpha-60">
                8 is the maximum number of tickets that the user can buy online
                for this type of ticket.
              </span>
            </div>
            <div className="col-12">
              <InputIcon>
                <InputTextarea
                  name="message"
                  rows={5}
                  required
                  className="text-white px-0 py-2"
                  placeholder={`2 General
Exposure Booth
Logo in Flyer
Logo in Event Back Drop
Live Mention`}
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
                value=""
                onChange={() => {}}
                checked={true}
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
              <Button
                label="Create Ticket"
                outlined
                className="w-full border-round-3xl outlinedBtn text-sm"
                type="button"
              />
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};
