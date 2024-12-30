import "./styles.scss";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { PrivateRouter } from "../../../routers";
import { Header, NavBar } from "../ui";

import { NavbarContext } from "../context";

import {
  TicketControl,
  DiscountCode,
  EventDetails,
  FreeTickets,
  TeamAccess,
} from "../pages";
import { Error404Page } from "../../pages";

export const Nav = () => {
  const { isNav, mdTable } = useContext(NavbarContext);
  return (
    <div className="NavCom flex flex-column h-screen text-white">
      <div className="col-12 p-0">
        <Header />
      </div>
      <div className="col-12 p-0 heightMenu">
        <div className="flex h-full">
          <NavBar />
          <div
            className={`${
              isNav && !mdTable ? "col-8 xl:col-9" : "col-12"
            } pt-0 pb-3 transition z-1 overflow-auto px-2 sm:px-4 xl:px-6`}
          >
            <Routes>
              <Route element={<PrivateRouter />}>
                <Route path="/:id/ticketControl" element={<TicketControl />} />
                <Route path="/:id/eventDetail" element={<EventDetails />} />
                <Route path="/:id/teamAccess" element={<TeamAccess />} />
                <Route path="/:id/freeTickets" element={<FreeTickets />} />
                <Route path="/:id/discountCode" element={<DiscountCode />} />
              </Route>

              <Route path="404" element={<Error404Page />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
