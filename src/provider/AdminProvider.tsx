import { useEffect } from "react";
import { AdminContext } from "../context";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../store";
import { getAdmin } from "../store/thunks/AdminThunks";

import { getLocalStorage } from "../hooks";

interface CheckoutProviderProps {
  children: React.ReactNode;
}

export const AdminProvider = ({ children }: CheckoutProviderProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { adminDate, loading: loadingAdmin } = useSelector(
    (state: RootState) => state.admin
  );

  useEffect(() => {
    getAdminData();
  }, [dispatch]);

  const getAdminData = async () => {
    const eventShared = getLocalStorage("eventShared");
    dispatch(getAdmin(eventShared?.id_event));
  };

  return (
    <AdminContext.Provider value={{ adminDate, loadingAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
