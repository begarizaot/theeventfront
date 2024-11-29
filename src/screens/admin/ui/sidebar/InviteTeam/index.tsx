import { InputIcon } from "../../../../../ui";

import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

interface InviteTeamSidebarProps {
  visible: boolean;
  showVisible: () => void;
}

export const InviteTeamSidebar = ({
  showVisible,
  visible,
}: InviteTeamSidebarProps) => {
  return (
    <Sidebar
      visible={visible}
      position="right"
      onHide={() => {
        showVisible();
      }}
      blockScroll={true}
      maskClassName="inviteTeamSidebar"
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
              <InputIcon icon="pi-envelope">
                <InputText
                  className="py-1 text-white"
                  placeholder="user@gmail.com"
                  name="email"
                  type="email"
                  autoComplete="off"
                  required
                />
              </InputIcon>
            </div>
            <div className="col-12">
              <InputIcon>
                <Dropdown
                  options={[{ label: "Category", value: null }]}
                  placeholder="Choose a Type Role"
                  className="text-white"
                />
              </InputIcon>
            </div>
            <div className="col-12">
              <div className="border-1 border-round bgBorder p-3 flex flex-column gap-2">
                <p className="m-0 text-sm">
                  <span className="text-base textPrimary mr-1">
                    Co-Organizer:
                  </span>
                  Read access to all modules of the event including QR code
                  reading.
                </p>
                <p className="m-0 text-sm">
                  <span className="text-base textPrimary mr-1">Operator:</span>
                  Unique access to the logistics module for reading QR codes.
                </p>
              </div>
            </div>

            <div className="col-12">
              <Button
                label="Create Access"
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
