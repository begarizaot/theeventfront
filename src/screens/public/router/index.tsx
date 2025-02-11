import { Route, Routes } from "react-router-dom";
import { FooterComp, HeaderComp } from "../ui/components";

import { SearchProvider } from "../context/Search";
import { EventAllPage, EventDetailPage, HomePage } from "../pages";


export const ScreenPublicRouter = () => {
  return (
    <SearchProvider>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events_all" element={<EventAllPage />} />
        <Route path="event/:id" element={<EventDetailPage />} />
      </Routes>
      <FooterComp />
    </SearchProvider>
  );
};
