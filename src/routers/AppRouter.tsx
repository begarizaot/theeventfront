import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "../helpers";
import { ScreenPublicRouter } from "../screens/public/router";
import { ScreenPrivateRouter } from "../screens/private/router";

export const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<ScreenPublicRouter />} />
        <Route path="manager/*" element={<ScreenPrivateRouter />} />
      </Routes>
    </>
  );
};
