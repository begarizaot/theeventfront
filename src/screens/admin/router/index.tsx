import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { SplitText } from "../../../helpers";

import { NavbarProvider } from "../context";
import { Nav } from "./nav";

export const ScreenAdminRouter = () => {
  const res = useParams();
  useEffect(() => {
    localStorage.setItem("eventId", SplitText(res["*"], "/"));
  }, []);

  return (
    <NavbarProvider>
      <Nav />
    </NavbarProvider>
  );
};
