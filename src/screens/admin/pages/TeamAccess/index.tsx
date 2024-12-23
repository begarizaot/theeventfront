import { Skeleton } from "primereact/skeleton";
import { InviteTeamSidebar } from "../../ui";
import { useTeamAccess } from "./hooks/useTeamAccess";

import { Button } from "primereact/button";

export const TeamAccess = () => {
  const {
    isNewInvite,
    eventId,
    data,
    loading,
    editData,
    showInvite,
    onCreateTeam,
    onUpdateStatus,
    onEditTicket,
    onDeleteTicket,
  } = useTeamAccess();

  return (
    <>
      <InviteTeamSidebar
        data={editData}
        eventId={eventId}
        showVisible={showInvite}
        visible={isNewInvite}
        createTeam={onCreateTeam}
      />
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
                onClick={() => onEditTicket(null)}
              />
            </div>

            <div className="col-12 flex align-items-center justify-content-between">
              <p className="m-0">Team Members</p>
              <p className="m-0">({loading ? 0 : data.length || 0})</p>
            </div>
          </div>
        </div>

        {loading &&
          [1, 2, 3].map((val) => (
            <div className="col-12" key={val}>
              <Skeleton className="h-8rem"></Skeleton>
            </div>
          ))}

        <div className="col-12 mt-2">
          <div className="flex flex-column">
            {!loading &&
              data?.map((item: any) => (
                <div className="col-12" key={item?.id}>
                  <div className="grid border-1 border-round p-2 bgBorder">
                    <div className="col-11 flex gap-2">
                      <span className="pi pi-user"></span>
                      <div>
                        <p className="m-0 flex gap-1">
                          {item?.user_id?.firstname ? (
                            <>
                              <span className="firstLetter">
                                {item?.user_id?.firstname}
                              </span>
                              <span className="firstLetter">
                                {item?.user_id?.lastname}
                              </span>
                            </>
                          ) : (
                            <span className="firstLetter">
                              {item?.user_id?.email}
                            </span>
                          )}
                        </p>
                        <p className="m-0 text-xs">
                          {item?.team_type_role_id?.name}
                        </p>
                      </div>
                    </div>
                    <div className="col-1 text-right">
                      <span
                        className="pi pi-trash cursor-pointer"
                        onClick={() => onDeleteTicket(item)}
                      ></span>
                    </div>

                    <div className="col-6 flex align-items-center">
                      <span
                        className={`${
                          item?.state ? "bg-green-900" : "bg-red-900"
                        } px-3 py-2 border-round text-sm cursor-pointer`}
                        onClick={() => onUpdateStatus(item)}
                      >
                        {item?.state ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <div className="col-6 text-right">
                      <Button
                        label="Edit"
                        icon="pi pi-pencil"
                        outlined
                        className="w-full sm:w-5 border-round-3xl outlinedBtn text-sm "
                        onClick={() => onEditTicket(item)}
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
