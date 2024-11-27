import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "../helpers";
import { ScreenPublicRouter } from "../screens/public/router";
import { ScreenPrivateRouter } from "../screens/private/router";
import { ScreenAdminRouter } from "../screens/admin/router";

export const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<ScreenPublicRouter />} />
        <Route path="manager/*" element={<ScreenPrivateRouter />} />
        <Route path="admin/*" element={<ScreenAdminRouter />} />
      </Routes>
    </>
  );
};
