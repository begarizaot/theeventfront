import { Navigate, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "../helpers";

import { AuthRouter } from "../screens/auth/routers";

export const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="auth/*" element={<AuthRouter />} />
        <Route path="*" element={<Navigate to="auth/login" replace />} />
      </Routes>
    </>
  );
};
