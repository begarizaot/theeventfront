import { Navigate, Outlet } from "react-router-dom";
import { useHeader } from "../components/NavAdminComp/useHeader";
import { getLocalStorage } from "../../../hooks";

function extractAndReplacePaths(navData: any[], idEvent: string): string[] {
  const paths: string[] = [];

  navData.forEach((item) => {
    const menuPath = item.menu?.path;
    if (menuPath) {
      paths.push(menuPath.replace("{idEvent}", idEvent || ""));
    }

    const menuItems = item.menuItems ?? [];
    menuItems.forEach((subItem: any) => {
      if (subItem.path) {
        paths.push(subItem.path.replace("{idEvent}", idEvent || ""));
      }
    });
  });

  return paths;
}

export const NavRouter = () => {
  const { adminDate, loadingAdmin } = useHeader();
  const eventShared = getLocalStorage("eventShared");
  const { id_event } = eventShared || {};
  const currentPath = location.pathname;
  // Mientras se carga la información de admin
  if (loadingAdmin) {
    return null; // O puedes retornar un spinner si lo deseas
  }

  const allowedPaths = extractAndReplacePaths(adminDate?.Nav || [], id_event);
  const hasAccess = allowedPaths.some((path) => currentPath.startsWith(path));

  if (!hasAccess) {
    return (
      <Navigate to={`/admin/eventDetails/${id_event || "default"}`} replace />
    );
  }

  return <Outlet />;
};
