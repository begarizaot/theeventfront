import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LoadingContext } from "../../../../../context";
import { useEventId } from "../../../hooks";

import { AppDispatch, RootState } from "../../../../../store";
import {
  delRemoveTeamAccess,
  getTeamAccessList,
  putUpdateTeamAccess,
} from "../../../../../store/slices";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const useTeamAccess = () => {
  const { showLoading } = useContext(LoadingContext);

  const { eventId } = useEventId();

  const [isNewInvite, setIsNewInvite] = useState(false);
  const [editData, setEditData] = useState({});

  const dispatch: AppDispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.teamAccess);

  useEffect(() => {
    eventId && fetchTeamAccess();
  }, [dispatch, eventId]);

  const fetchTeamAccess = async () => {
    dispatch(getTeamAccessList(eventId));
  };

  const fetchDeleteTeamAccess = async (req: any) => {
    showLoading(true);
    try {
      await delRemoveTeamAccess(eventId, req.id_teamAcces);
      showLoading(false);
      fetchTeamAccess();
    } catch (error) {
      showLoading(false);
    }
  };

  const onUpdateStatus = async (req: any) => {
    showLoading(true);
    try {
      await putUpdateTeamAccess(eventId, {
        state: !req.state ? 1 : 2,
        id: req.id_teamAcces,
      });
      showLoading(false);
      fetchTeamAccess();
    } catch (error) {
      showLoading(false);
    }
  };

  const showInvite = () => {
    setIsNewInvite(!isNewInvite);
  };

  const onCreateTeam = () => {
    fetchTeamAccess();
  };

  const onEditTicket = (req: any) => {
    setEditData(req);
    showInvite();
  };

  const onDeleteTicket = async (req: any) => {
    MySwal.fire({
      title: "are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        fetchDeleteTeamAccess(req);
      }
    });
  };

  return {
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
  };
};
