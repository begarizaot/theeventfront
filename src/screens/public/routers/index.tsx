import { Route, Routes } from "react-router-dom";

import { FooterComp, HeaderComp } from "../components";
import {
  AllEventsPage,
  BookTicketsPage,
  ContactUsPage,
  EventDetailsPage,
  HomePage,
} from "../pages";

export const PubliRouter = () => {
  return (
    <>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allEvents" element={<AllEventsPage />} />
        <Route path="/event/:id" element={<EventDetailsPage />} />
        <Route path="/book-tickets/:id" element={<BookTicketsPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
      </Routes>
      <FooterComp />
    </>
  );
};
