import { NavbarProvider } from "../context";
import { Nav } from "./nav";

export const ScreenAdminRouter = () => {
  return (
    <NavbarProvider>
      <Nav />
    </NavbarProvider>
  );
};
