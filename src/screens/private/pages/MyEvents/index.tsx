import "./styles.scss";
import { EventCard } from "../../../../ui";
import { useMyEvents } from "./useMyEvents";

import { TabMenu } from "primereact/tabmenu";
import { Paginator } from "primereact/paginator";

export const MyEventsPage = () => {
  const { itemsMenu } = useMyEvents();

  return (
    <div className="grid myEventsPage">
      <div className="col-12">
        <TabMenu className="tabMenuMyEvent" model={itemsMenu} />
      </div>

      <div className="col-12">
        <div className="grid">
          <div className="col-12 sm:col-6 lg:col-4">
            <EventCard link="/admin" sublink="analytics" manager={true} />
          </div>
        </div>
      </div>

      <div className="col-12">
        <Paginator
          first={1}
          rows={10}
          totalRecords={20}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
};
