import { useState } from "react";

export const useTeamAccess = () => {
  const [isNewInvite, setIsNewInvite] = useState(false);

  const showInvite = () => {
    setIsNewInvite(!isNewInvite);
  };

  return { isNewInvite, showInvite };
};
