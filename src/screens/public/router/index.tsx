import { Route, Routes } from "react-router-dom";
import { FooterComp, HeaderComp } from "../ui/components";

import { EventAllPage, EventDetailPage, HomePage } from "../pages";

export const ScreenPublicRouter = ({ ssrEvent }: { ssrEvent?: any }) => {
  return (
    <>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventAllPage />} />
        <Route
          path="event/:id"
          element={<EventDetailPage ssrEvent={ssrEvent} />}
        />
      </Routes>
      <FooterComp />
    </>
  );
};
