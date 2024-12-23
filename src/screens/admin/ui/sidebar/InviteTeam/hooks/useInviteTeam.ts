import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "../../../../../../hooks";
import { LoadingContext } from "../../../../../../context";

import {
  getTeamTypeRoles,
  postCreateTeamAccess,
  putUpdateTeamAccess,
} from "../../../../../../store/slices";

export const useInviteTeam = ({
  eventId,
  showVisible,
  createTeam,
  data,
}: any) => {
  const { showLoading } = useContext(LoadingContext);

  const errorRes = useRef<any>(null);

  const [teamRoles, setTeamRoles] = useState([]);
  const { formState, onInputChange, onResetForm, onSetInput } = useForm({
    idTicket: null,
    email: "",
    team_type_role: null,
  });

  useEffect(() => {
    fetchTeamTypeRoles();
  }, []);

  useEffect(() => {
    data?.id_teamAcces &&
      onSetInput({
        idTicket: data?.id_teamAcces,
        email: data?.user_id?.email,
        team_type_role: data?.team_type_role_id?.id,
      });

    return () => {
      onResetForm();
    };
  }, [data]);

  const fetchTeamTypeRoles = async () => {
    try {
      const { data } = await getTeamTypeRoles();
      setTeamRoles(data);
    } catch (error) {
      return error;
    }
  };

  const fetchCreateTeam = async (e: any) => {
    e.preventDefault();

    showLoading(true);

    try {
      await postCreateTeamAccess(eventId, formState);
      showLoading(false);
      onResetForm();
      showVisible();
      createTeam();
    } catch (error) {
      showLoading(false);
      errorRes.current.show({
        severity: "error",
        summary: "Error",
        detail: error,
        life: 3000,
      });
    }
  };

  const fetchUpdateTeam = async (e: any) => {
    e.preventDefault();

    showLoading(true);

    try {
      await putUpdateTeamAccess(eventId, formState);
      showLoading(false);
      onResetForm();
      showVisible();
      createTeam();
    } catch (error) {
      showLoading(false);
      errorRes.current.show({
        severity: "error",
        summary: "Error",
        detail: error,
        life: 3000,
      });
    }
  };

  return {
    teamRoles,
    formState,
    errorRes,
    onInputChange,
    fetchCreateTeam,
    fetchUpdateTeam,
  };
};
