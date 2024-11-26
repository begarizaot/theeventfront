import "./styles.scss";

// primereact
import { InputText } from "primereact/inputtext";
import { Sidebar } from "primereact/sidebar";

// components
import { InputIcon, EventCard } from "../../../../../ui";

interface SearchSidebarProps {
  visible: boolean;
  showVisible: () => void;
}

export const SearchSidebar = ({ showVisible, visible }: SearchSidebarProps) => {
  return (
    <Sidebar
      visible={visible}
      position="right"
      onHide={showVisible}
      blockScroll={true}
      maskClassName="searchSidebar"
    >
      <div className="grid">
        <div className="col-12">
          <h2 className="m-0 text-white text-center text-xl sm:text-2xl">
            Search <span className="effectPrimary">Events</span>
          </h2>

          <form className="mt-3">
            <InputIcon icon="pi-search">
              <InputText
                className="py-1 text-white"
                placeholder="Search events by name, artist or genre"
                name="search"
                autoComplete="off"
              />
            </InputIcon>
          </form>
        </div>

        <div className="col-12 listEvent">
          <div className="grid">
            {[1, 2, 3, 4].map((item) => (
              <div className="col-12" key={item} onClick={showVisible}>
                <EventCard link="event" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Sidebar>
  );
};
