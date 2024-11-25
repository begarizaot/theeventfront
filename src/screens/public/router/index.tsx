import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, Header } from "../ui";

import { SearchProvider } from "../context";

import { PrivateRouter } from "./PrivateRouter";
import { Error404Page } from "../../pages";
import {
  AllEventsPage,
  ContactPage,
  EventDetailPage,
  HomePages,
  MyTicketDetail,
  MyTickets,
  PrivacyPolicyPage,
  TermsAndConditionPage,
} from "../pages";

export const ScreenPublicRouter = () => {
  return (
    <SearchProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/events" element={<AllEventsPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />

        <Route
          path="/terms-and-condition"
          element={<TermsAndConditionPage />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/contact-us" element={<ContactPage />} />

        <Route
          path="tickets/*"
          element={
            <PrivateRouter>
              <Route path="/*" element={<MyTickets />} />
            </PrivateRouter>
          }
        />
        <Route
          path="ticket/:id/*"
          element={
            <PrivateRouter>
              <Route path="/*" element={<MyTicketDetail />} />
            </PrivateRouter>
          }
        />

        <Route path="404" element={<Error404Page />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </SearchProvider>
  );
};
