import { Avatar, Badge, Dropdown } from "antd";
import { useHeader } from "./useHeader";

interface HeaderCompProp {
  onShowNav: () => void;
}

export const HeaderComp = ({ onShowNav }: HeaderCompProp) => {
  const { navUser } = useHeader();

  return (
    <div className="bg-nav px-4 sm:px-6 py-2 flex items-center justify-between sticky top-0 z-10">
      <div className="grid">
        <span
          className="sm:hidden! pi pi-bars p-[10px] rounded-full text-xl cursor-pointer"
          onClick={onShowNav}
        ></span>

        <div className="hidden sm:block">
          <h1 className="font-bold bebasNeue text-2xl">Good Morning, Admin</h1>
          <p className="text-xs">Here is your daily preview</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="pi pi-search bg-white p-[10px] rounded-full text-black text-sm cursor-pointer"></span>
        <span className="pi pi-bell bg-white p-[10px] rounded-full text-black text-sm cursor-pointer relative">
          <Badge status="error" className="absolute! top-[2px] right-[8px]" />
        </span>

        <Dropdown
          className="sm:ml-4!"
          menu={{ items: navUser }}
          trigger={["click"]}
        >
          <div className="flex items-center gap-1 cursor-pointer">
            <Avatar
              icon={<span className="pi pi-user"></span>}
              className="bg-white! text-black! border-2!"
            />
            <span className="pi pi-angle-down"></span>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};
