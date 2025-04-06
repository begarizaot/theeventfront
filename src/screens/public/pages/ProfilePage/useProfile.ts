import { useEffect, useState } from "react";
import { dataListEvents } from "../../../../data/listEvents";

export const useProfile = () => {
  const [navProfile, setNavProfile] = useState<any[]>([]);
  const [navActive, setNavActive] = useState(1);

  const [listEvents, setlistEvents] = useState<any>([]);

  useEffect(() => {
    fetchProfile();
    fetchListEvents();
  }, []);

  const fetchProfile = async () => {
    setNavProfile([
      { id: 1, name: "my events", active: true },
      { id: 2, name: "about me", active: false },
      { id: 3, name: "contact info", active: false },
    ]);
  };

  const fetchListEvents = async () => {
    setlistEvents([...dataListEvents].slice(0, 2));
  };

  const handleActive = (id: number) => {
    const updatedNavProfile = navProfile.map((item) =>
      item.id === id ? { ...item, active: true } : { ...item, active: false }
    );
    setNavProfile(updatedNavProfile);
    setNavActive(id);
  };

  return { navProfile, navActive, listEvents, handleActive };
};
