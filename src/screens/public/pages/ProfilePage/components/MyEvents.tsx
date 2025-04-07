import { useState } from "react";
import { Link } from "react-router-dom";
import { CardEventCom } from "../../../../../ui/components";

interface NavMyEvents {
  listEvents: any[];
}

export const MyEventsComp = ({ listEvents }: NavMyEvents) => {
  const [navMyEvents, setNavMyEvents] = useState([
    { id: 1, name: "Events", active: true },
    { id: 2, name: "Tickes", active: false },
  ]);
  const [navActive, setNavActive] = useState(1);

  const handleActive = (id: number) => {
    const updatedNavMyEvents = navMyEvents.map((item) =>
      item.id === id ? { ...item, active: true } : { ...item, active: false }
    );
    setNavMyEvents(updatedNavMyEvents);
    setNavActive(id);
  };

  return (
    <div className="grid">
      <div className="flex">
        {navMyEvents.map((item) => (
          <div
            key={item.id}
            className={`px-6 cursor-pointer border-b ${
              item.active ? "bgActiveNavElement text-white" : "text-white/20"
            }`}
            onClick={() => handleActive(item.id)}
          >
            <span className="text-lg ">{item.name}</span>
          </div>
        ))}
      </div>

      {navActive == 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
          {listEvents?.map((event: any) => (
            <Link key={event.id} to={`/admin/eventDetails/1`} className="col-span-1">
              <CardEventCom
                {...event}
                classNameContainer="h-100! lg:h-80! hover:shadow-none!"
                classTitle="text-xl! lg:text-2xl! font-bold!"
                hiddenBtnPrice
                showBtn
              />
            </Link>
          ))}
          <Link to={``} className="col-span-1">
            <div className="h-100! lg:h-80! bgExploreMore rounded-2xl flex flex-col justify-center items-center gap-2 text-white px-10">
              <span className="pi pi-compass text-7xl"></span>
              <p className="text-3xl/8 text-center font-bold uppercase">Explore More Events</p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};
