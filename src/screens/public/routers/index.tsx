import { Route, Routes } from "react-router-dom";

import { FooterComp, HeaderComp } from "../components";
import {
  AllArtistPage,
  AllEventsPage,
  ArtistDetailsPage,
  BookTicketsPage,
  ContactUsPage,
  CreateEventPage,
  EventDetailsPage,
  HomePage,
  ProfilePage,
} from "../pages";

export const PubliRouter = () => {
  return (
    <>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allEvents" element={<AllEventsPage />} />
        <Route path="/event/:id" element={<EventDetailsPage />} />
        <Route path="/allArtist" element={<AllArtistPage />} />
        <Route path="/artist/:id" element={<ArtistDetailsPage />} />
        <Route path="/book-tickets/:id" element={<BookTicketsPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/createEvent" element={<CreateEventPage />} />
        <Route path="/editEvent/:id" element={<CreateEventPage />} />
      </Routes>
      <FooterComp />
    </>
  );
};
