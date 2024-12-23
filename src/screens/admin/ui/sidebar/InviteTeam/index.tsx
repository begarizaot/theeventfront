import { InputIcon } from "../../../../../ui";
import { useInviteTeam } from "./hooks/useInviteTeam";

import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

interface InviteTeamSidebarProps {
  data?: any;
  eventId: string;
  visible: boolean;
  showVisible: () => void;
  createTeam?: () => void;
}

export const InviteTeamSidebar = (data: InviteTeamSidebarProps) => {
  const { visible, showVisible } = data;
  const {
    teamRoles,
    formState,
    errorRes,
    onInputChange,
    fetchCreateTeam,
    fetchUpdateTeam,
  } = useInviteTeam(data);

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
      <Toast ref={errorRes} className="z-5" />

      <div className="grid text-white">
        <div className="col-12">
          <h2 className="m-0">
            Invite <span className="effectPrimary">Team</span>
          </h2>
        </div>
        <div className="col-12 mt-3">
          <form
            className="grid"
            onSubmit={formState.idTicket ? fetchUpdateTeam : fetchCreateTeam}
          >
            <div className="col-12 flex flex-column">
              <InputIcon icon="pi-envelope">
                <InputText
                  className="py-1 text-white"
                  placeholder="user@gmail.com"
                  name="email"
                  type="email"
                  autoComplete="off"
                  required
                  value={formState.email}
                  disabled={formState.idTicket ? true : false}
                  onChange={onInputChange}
                />
              </InputIcon>
            </div>
            <div className="col-12">
              <InputIcon>
                <Dropdown
                  options={teamRoles}
                  placeholder="Choose a Type Role"
                  className="text-white"
                  required
                  name="team_type_role"
                  value={formState.team_type_role}
                  onChange={onInputChange}
                />
              </InputIcon>
            </div>
            <div className="col-12">
              <div className="border-1 border-round bgBorder p-3 flex flex-column gap-2">
                {teamRoles.map((role: any, index) => (
                  <p className="m-0 text-sm" key={index}>
                    <span className="text-base textPrimary mr-1">
                      {role?.label || ""}:
                    </span>
                    {role?.description || ""}
                  </p>
                ))}
              </div>
            </div>

            <div className="col-12">
              <Button
                label={`${formState.idTicket ? "Update" : "Create"} Access`}
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
