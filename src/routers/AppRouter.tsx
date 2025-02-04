import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "../helpers";

import { ScreenPublicRouter } from "../screens/public/router";

export const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<ScreenPublicRouter />} />
      </Routes>
    </>
  );
};
