import "./styles.css";

import { EventCardComp } from "../../../../../ui/components";

import { useSearch } from "./useSearch";

import { ConfigProvider, Drawer } from "antd";

interface SearchDrawerProps {
  visible: boolean;
  onClose: () => void;
}

export const SearchDrawer = ({ onClose, visible }: SearchDrawerProps) => {
  const { events } = useSearch();

  return (
    <ConfigProvider
      drawer={{ styles: { mask: { backdropFilter: "blur(10px)" } } }}
    >
      <Drawer
        placement="right"
        onClose={onClose}
        open={visible}
        className="searchDrawer text-white"
      >
        <h2 className="font-bold text-white text-center text-2xl">
          Search <span className="effectPrimary">Events</span>
        </h2>

        <div className="grid gap-2 mt-2">
          {events.map((event: any, index: any) => (
            <EventCardComp key={index} onClick={onClose} />
          ))}
        </div>
      </Drawer>
    </ConfigProvider>
  );
};
