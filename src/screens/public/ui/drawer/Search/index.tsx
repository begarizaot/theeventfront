import "./styles.css";

import { EventCardComp } from "../../../../../ui/components";

import { useSearch } from "./useSearch";

import { ConfigProvider, Drawer, Input } from "antd";

interface SearchDrawerProps {
  visible: boolean;
  onClose: () => void;
}

export const SearchDrawer = ({ onClose, visible }: SearchDrawerProps) => {
  const { events, search, loading, onClearSearch, onChangeSearch } =
    useSearch();

  return (
    <ConfigProvider
      drawer={{ styles: { mask: { backdropFilter: "blur(10px)" } } }}
    >
      <Drawer
        placement="right"
        onClose={() => {
          onClearSearch();
          onClose();
        }}
        open={visible}
        className="searchDrawer text-white"
      >
        <h2 className="font-bold text-white text-center text-2xl">
          Search <span className="effectPrimary">Events</span>
        </h2>

        <Input
          placeholder="Search events by name, artist, or genre"
          className="rounded-full! bg-transparent! border-white! text-white! my-1"
          classNames={{
            input: "placeholder-white/20!",
          }}
          prefix={<span className="pi pi-search mr-1 textPrimary"></span>}
          suffix={
            loading ? (
              <span className="pi pi-spin pi-spinner text-white"></span>
            ) : search && (
              <span
                className="pi pi-times text-white cursor-pointer"
                onClick={onClearSearch}
              ></span>
            )
          }
          inputMode="search"
          autoComplete="off"
          value={search}
          onChange={onChangeSearch}
        />

        <div className="grid gap-2 mt-2">
          {events.map((event: any, index: any) => (
            <EventCardComp key={index} onClick={onClose} />
          ))}
        </div>
      </Drawer>
    </ConfigProvider>
  );
};
