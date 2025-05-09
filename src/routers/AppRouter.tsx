import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "../helpers";

import { PrivateUserRouter } from "./PrivateRouter";

import { AuthRouter } from "../screens/auth/routers";
import { PubliRouter } from "../screens/public/routers";
import { AdminRouter } from "../screens/admin/routers";

export const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<PubliRouter />} />
        <Route path="auth/*" element={<AuthRouter />} />
        <Route element={<PrivateUserRouter redirectPath="/" />}>
          <Route path="admin/*" element={<AdminRouter />} />
        </Route>
      </Routes>
    </>
  );
};
