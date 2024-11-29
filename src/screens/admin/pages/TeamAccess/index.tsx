import { InviteTeamSidebar } from "../../ui";
import { useTeamAccess } from "./useTeamAccess";

import { Button } from "primereact/button";

export const TeamAccess = () => {
  const { isNewInvite, showInvite } = useTeamAccess();

  return (
    <>
      <InviteTeamSidebar showVisible={showInvite} visible={isNewInvite} />
      <div className="grid">
        <div className="col-12 sticky top-0 bgBody z-1">
          <div className="grid">
            <div className="col-12 text-center">
              <h2 className="m-0 effectPrimary">Team Access</h2>
            </div>
            <div className="col-12 text-sm">
              <p className="m-0">Do you have logistics staff for your event?</p>
              <p className="m-0">
                Create access for Co-Organizer or Operator users.
              </p>
              <Button
                label="Invite Team Member"
                icon="pi pi-users"
                outlined
                className="w-full sm:w-5 border-round-3xl outlinedBtn text-sm mt-3"
                onClick={showInvite}
              />
            </div>

            <div className="col-12 flex align-items-center justify-content-between">
              <p className="m-0">Team Members</p>
              <p className="m-0">(3)</p>
            </div>
          </div>
        </div>

        <div className="col-12 mt-2">
          <div className="flex flex-column">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div className="col-12">
                <div className="grid border-1 border-round p-2 bgBorder">
                  <div className="col-11 flex gap-2">
                    <span className="pi pi-user"></span>
                    <div>
                      <p className="m-0">JuanLlanos</p>
                      <p className="m-0 text-xs">Co-Organizer</p>
                    </div>
                  </div>
                  <div className="col-1 text-right">
                    <span className="pi pi-trash cursor-pointer"></span>
                  </div>

                  <div className="col-6 flex align-items-center">
                    <span className="bg-green-900 px-3 py-2 border-round text-sm">
                      Active
                    </span>
                  </div>
                  <div className="col-6 text-right">
                    <Button
                      label="Edit"
                      icon="pi pi-pencil"
                      outlined
                      className="w-full sm:w-5 border-round-3xl outlinedBtn text-sm "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
