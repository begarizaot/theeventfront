import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../context";
import { useNavigate } from "react-router-dom";

export const useProfile = () => {
  const navigate = useNavigate();
  const { userData, onValueUser } = useContext(UserContext);

  const [navProfile, setNavProfile] = useState<any[]>([]);
  const [navActive, setNavActive] = useState(1);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    setNavProfile([
      { id: 1, name: "my events", active: true },
      { id: 2, name: "My Tickets", active: false },
      // { id: 3, name: "about me", active: false },
      // { id: 4, name: "contact info", active: false },
    ]);
  };

  const handleActive = (id: number) => {
    const updatedNavProfile = (navProfile ?? []).map((item) =>
      item.id === id ? { ...item, active: true } : { ...item, active: false }
    );
    setNavProfile(updatedNavProfile);
    setNavActive(id);
  };

  const onLogout = async () => {
    await onValueUser({});
    navigate("/", { replace: true });
  };

  return {
    userData,
    navProfile,
    navActive,
    handleActive,
    onLogout,
  };
};
