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

  const fetchUserData = async () => {
    try {
      const res = await getUserData();
      setUserRes({ ...userData, ...res });
    } catch (error) {}
  };

  return { ...globalDate, loading, userData: userRes };
};
