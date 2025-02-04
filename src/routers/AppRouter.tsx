import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "../helpers";

import { ScreenPublicRouter } from "../screens/public/router";
import { MetaComp } from "../ui/components";

export const AppRouter = () => {
  return (
    <>
      <MetaComp />
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<ScreenPublicRouter />} />
      </Routes>
    </>
  );
};
