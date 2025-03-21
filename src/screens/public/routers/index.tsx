import { Route, Routes } from "react-router-dom";

import { FooterComp, HeaderComp } from "../components";
import { AllEventsPage, ContactUsPage, HomePage } from "../pages";

export const PubliRouter = () => {
  return (
    <>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allEvents" element={<AllEventsPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
      </Routes>
      <FooterComp />
    </>
  );
};
