import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "../helpers";
import { MetaComp } from "../ui/components";

import { ScreenPublicRouter } from "../screens/public/router";

export const AppRouter = ({ ssrEvent }: { ssrEvent?: any }) => {
  return (
    <>
      <MetaComp />
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<ScreenPublicRouter ssrEvent={ssrEvent} />} />
      </Routes>
    </>
  );
};
