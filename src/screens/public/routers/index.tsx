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
  SearchPage,
} from "../pages";
import { Error404Page } from "../../Error404";

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
        <Route path="/cotegory/:category" element={<AllEventsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
      <FooterComp />
    </>
  );
};
