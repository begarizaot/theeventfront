import { useContext } from "react";
import { AdminContext } from "../../../../context";

export const useHeader = () => {
  const { adminDate, loadingAdmin } = useContext(AdminContext);

  return { adminDate, loadingAdmin };
};
