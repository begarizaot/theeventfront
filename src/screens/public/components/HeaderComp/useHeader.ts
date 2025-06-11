import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../context";
import { getUserData } from "../../../../store/thunks";

export const useHeader = () => {
  const { userData } = useContext(UserContext);
  const [userRes, setUserRes] = useState<any>(userData);

  const { globalDate, loading } = useSelector(
    (state: RootState) => state.global
  );

  useEffect(() => {
    if (userData?.id) fetchUserData();
  }, [userData]);

  const [openNav, setOpenNav] = useState(false);

  const handleMediaQueryChange = (e: MediaQueryListEvent) => {
    if (e.matches) {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    if (mediaQuery.matches) {
      setOpenNav(false);
    }
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const fetchUserData = async () => {
    try {
      const res = await getUserData();
      setUserRes({ ...userData, ...res });
    } catch (error) {}
  };

  const onOpenNav = (open: boolean) => {
    setOpenNav(open);
  };

  return { ...globalDate, loading, userData: userRes, onOpenNav, openNav };
};
