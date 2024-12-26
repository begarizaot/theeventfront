import { InputIcon } from "../../../../../ui";

import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useCreateCode } from "./hooks/useCreateCode";
import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";

interface CreateCodeSidebarProps {
  data: any;
  eventId: any;
  visible: boolean;
  showVisible: () => void;
  createUdateCode: () => void;
}

export const CreateCodeSidebar = (dataReq: CreateCodeSidebarProps) => {
  const { showVisible, visible } = dataReq;

  const {
    formState,
    stateList,
    errorRes,
    onInputChange,
    createCode,
    updateCode,
    onResetForm,
  } = useCreateCode(dataReq);

  return (
    <Sidebar
      visible={visible}
      position="right"
      onHide={() => {
        showVisible();
        onResetForm();
      }}
      blockScroll={true}
      maskClassName="CreateCodeSidebar"
    >
      <Toast ref={errorRes} className="z-5" />
      <div className="grid text-white">
        <div className="col-12">
          <h2 className="m-0">
            {formState.id ? "Update" : "Create"}
            <span className="effectPrimary ml-1">Code</span>
          </h2>
        </div>
        <div className="col-12 mt-3">
          <form
            className="grid"
            onSubmit={formState.id ? updateCode : createCode}
          >
            <div className="col-12 flex flex-column">
              <InputIcon icon="pi-bullseye">
                <InputText
                  className="py-1 text-white"
                  placeholder="Name"
                  name="name"
                  autoComplete="off"
                  required
                  value={formState.name}
                  onChange={onInputChange}
                />
              </InputIcon>
            </div>
            <div className="col-12">
              <InputIcon>
                <Dropdown
                  options={stateList}
                  placeholder="Choose a Discount Type"
                  className="text-white"
                  name="state"
                  value={formState.state}
                  onChange={onInputChange}
                  disabled={formState.id}
                />
              </InputIcon>
            </div>
            <div className="col-12 flex flex-column">
              <InputIcon icon="pi-hashtag">
                <InputNumber
                  inputClassName="py-1 text-white"
                  placeholder="Value"
                  required
                  name="value"
                  value={formState.value}
                  onChange={onInputChange}
                  disabled={formState.id}
                />
              </InputIcon>
            </div>
            <div className="col-12 flex flex-column">
              <InputIcon icon="pi-hashtag">
                <InputNumber
                  inputClassName="py-1 text-white"
                  placeholder="Maximum uses"
                  required
                  name="amount"
                  value={formState.amount}
                  onChange={onInputChange}
                />
              </InputIcon>
            </div>
            <div className="col-6 flex flex-column">
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
            <div className="col-6 flex flex-column">
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
                label={`${formState.id ? "Update" : "Create"} Code`}
                outlined
                className="w-full border-round-3xl outlinedBtn text-sm"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </Sidebar>
  );
};
