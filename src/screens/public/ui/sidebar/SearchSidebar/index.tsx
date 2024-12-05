import "./styles.scss";
import { useSearch } from "./useSearch";

// primereact
import { InputText } from "primereact/inputtext";
import { Sidebar } from "primereact/sidebar";

// components
import { InputIcon, EventCard } from "../../../../../ui";
import { Skeleton } from "primereact/skeleton";

interface SearchSidebarProps {
  visible: boolean;
  showVisible: () => void;
}

export const SearchSidebar = ({ showVisible, visible }: SearchSidebarProps) => {
  const { onChange, onClearSearch, search, events, loading } = useSearch();

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

          <div className="mt-3 flex align-items-center">
            <InputIcon icon="pi-search">
              <InputText
                className="py-1 text-white"
                placeholder="Search events by name"
                name="search"
                autoComplete="off"
                value={search}
                onChange={onChange}
              />
            </InputIcon>
            {search.length > 0 && (
              <i
                className="pi pi-times textPrimary mx-3 cursor-pointer"
                onClick={onClearSearch}
              ></i>
            )}
          </div>
        </div>

        <div className="col-12 listEvent">
          <div className="grid">
            {loading &&
              [1, 2, 3].map((val) => (
                <div className="col-12" key={val}>
                  <Skeleton className="h-28rem"></Skeleton>
                </div>
              ))}
            {!loading &&
              events.length > 0 &&
              events.map((item: any) => (
                <div
                  className="col-12"
                  key={item.id_event}
                  onClick={() => {
                    onClearSearch();
                    showVisible();
                  }}
                >
                  <EventCard link="/event" data={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </Sidebar>
  );
};
