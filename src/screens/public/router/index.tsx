import { Route, Routes } from "react-router-dom";
import { FooterComp, HeaderComp } from "../ui/components";

import { SearchProvider } from "../context/Search";
import {
  EventAllPage,
  EventDetailPage,
  HomePage,
  TermsConditionPage,
  PrivacyPolicyPage,
  ContactUsPage,
} from "../pages";

export const ScreenPublicRouter = () => {
  return (
    <SearchProvider>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events_all" element={<EventAllPage />} />
        <Route path="event/:id" element={<EventDetailPage />} />

        <Route path="terms_and_condition" element={<TermsConditionPage />} />
        <Route path="privacy_policy" element={<PrivacyPolicyPage />} />
        <Route path="contact_us" element={<ContactUsPage />} />
      </Routes>
      <FooterComp />
    </SearchProvider>
  );
};
