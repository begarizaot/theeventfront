import { InputIcon } from "../../../../../ui";

import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";

interface CreateCodeSidebarProps {
  visible: boolean;
  showVisible: () => void;
}

export const CreateCodeSidebar = ({
  showVisible,
  visible,
}: CreateCodeSidebarProps) => {
  return (
    <Sidebar
      visible={visible}
      position="right"
      onHide={() => {
        showVisible();
      }}
      blockScroll={true}
      maskClassName="CreateCodeSidebar"
    >
      <div className="grid text-white">
        <div className="col-12">
          <h2 className="m-0">
            Invite <span className="effectPrimary">Team</span>
          </h2>
        </div>
        <div className="col-12 mt-3">
          <form className="grid">
            <div className="col-12 flex flex-column">
              <InputIcon icon="pi-bullseye">
                <InputText
                  className="py-1 text-white"
                  placeholder="Name"
                  name="email"
                  autoComplete="off"
                  required
                />
              </InputIcon>
            </div>
            <div className="col-12">
              <InputIcon>
                <Dropdown
                  options={[{ label: "Category", value: null }]}
                  placeholder="Choose a Discount Type"
                  className="text-white"
                />
              </InputIcon>
            </div>
            <div className="col-12 flex flex-column">
              <InputIcon icon="pi-hashtag">
                <InputNumber
                  inputClassName="py-1 text-white"
                  placeholder="Value"
                  required
                />
              </InputIcon>
            </div>
            <div className="col-12 flex flex-column">
              <InputIcon icon="pi-hashtag">
                <InputNumber
                  inputClassName="py-1 text-white"
                  placeholder="Number of Uses"
                  required
                />
              </InputIcon>
            </div>

            <div className="col-12">
              <Button
                label="Create Code"
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
