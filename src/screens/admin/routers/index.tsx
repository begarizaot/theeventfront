import { Route, Routes } from "react-router-dom";

import { HeaderComp, NavAdminComp } from "../components";
import { EventDetailsPage, TicketControlPage } from "../pages";
import { Drawer } from "antd";
import { useState } from "react";

export const AdminRouter = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <Drawer
        closable={false}
        onClose={() => setOpenNav(false)}
        open={openNav}
        classNames={{
          body: "p-0! border-none!",
          mask: "backdrop-blur-xs",
        }}
        placement="left"
      >
        <NavAdminComp onShowNav={() => setOpenNav(false)} />
      </Drawer>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-1 hidden sm:block">
          <NavAdminComp onShowNav={() => setOpenNav(false)} />
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-4">
          <HeaderComp onShowNav={() => setOpenNav(true)} />
          <Routes>
            <Route path="/eventDetails/:id" element={<EventDetailsPage />} />
            <Route path="/ticketControl/:id" element={<TicketControlPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
