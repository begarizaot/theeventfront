import { Navigate, Route, Routes } from "react-router-dom";

import { Header } from "../ui";

import { PrivateRouter } from "../../../routers";

import { Error404Page } from "../../pages";
import { CreateEventPage, MyEventsPage } from "../pages";

export const ScreenPrivateRouter = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-width-80 px-4 align-content-start sm:px-6 pt-7 text-white">
        <Routes>
          <Route element={<PrivateRouter />}>
            <Route path="/myEvents" element={<MyEventsPage />} />
            <Route path="/createEvent" element={<CreateEventPage />} />
          </Route>

          <Route path="404" element={<Error404Page />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
};
