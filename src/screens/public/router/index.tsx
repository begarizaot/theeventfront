import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, Header } from "../ui";

import { SearchProvider } from "../context";
import { PrivateRouter } from "../../../routers";

import { Error404Page, ScannerPage } from "../../pages";
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

        <Route element={<PrivateRouter />}>
          <Route path="/tickets" element={<MyTickets />} />
          <Route path="/ticket/:id" element={<MyTicketDetail />} />
        </Route>

        <Route path="404" element={<Error404Page />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </SearchProvider>
  );
};
