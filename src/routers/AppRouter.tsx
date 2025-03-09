import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "../helpers";

import { AuthRouter } from "../screens/auth/routers";
import { PubliRouter } from "../screens/public/routers";

export const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<PubliRouter />} />
        <Route path="auth/*" element={<AuthRouter />} />
      </Routes>
    </>
  );
};
