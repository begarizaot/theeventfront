import { useEffect, useState } from "react";
import { UserContext } from "../context";
import { setLocalStorage, getLocalStorage } from "../hooks";

interface CheckoutProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: CheckoutProviderProps) => {
  // !informacion del usuario
  const [userData, setUserData] = useState<any>({});

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const data = await getLocalStorage("userData");
    data?.id && setUserData(data);
  };

  const onValueUser = async (value: string) => {
    await setLocalStorage("userData", value);
    setUserData(value);
  };

  return (
    <UserContext.Provider value={{ onValueUser, userData }}>
      {children}
    </UserContext.Provider>
  );
};
