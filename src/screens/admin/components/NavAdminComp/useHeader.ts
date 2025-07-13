import { useContext } from "react";
import { AdminContext } from "../../../../context";
import { useNavigate } from "react-router-dom";

export const useHeader = () => {
  const navigate = useNavigate();
  const { adminDate, loadingAdmin } = useContext(AdminContext);

  const onBack = () => {
    navigate("/profile", { replace: true });
  };

  return { adminDate, loadingAdmin, onBack };
};
