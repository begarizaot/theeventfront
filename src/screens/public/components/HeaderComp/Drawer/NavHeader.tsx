import { Drawer } from "antd";
import { ItemNavsComp } from "../components";

interface NavHeaderProps {
  data: any;
  openNav: boolean;
  setOpenNav: (open: boolean) => void;
}

export const NavHeader = ({ data, openNav, setOpenNav }: NavHeaderProps) => {
  return (
    <Drawer
      onClose={() => {
        setOpenNav(false);
      }}
      open={openNav}
      classNames={{
        body: "p-0! border-none! bg-nav",
        mask: "backdrop-blur-xs",
        header: "bg-nav",
      }}
      placement="right"
      maskClosable={false}
      className="createEditTicketTable"
    >
      <div className="px-4 py-3 h-full! flex flex-col justify-between">
        <ItemNavsComp
          {...data}
          className="flex-col gap-3"
          classNameItems="w-full text-center"
          onClose={setOpenNav}
        />
      </div>
    </Drawer>
  );
};
