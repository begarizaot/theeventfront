import { Sidebar } from "primereact/sidebar";

// components
import { Nav } from "../../components";
import { LogoLink } from "../../../../../ui";

interface NavBarSidebarProps {
  visible: boolean;
  showVisible: () => void;
}

export const NavBarSidebar = ({ showVisible, visible }: NavBarSidebarProps) => {
  return (
    <Sidebar
      visible={visible}
      onHide={showVisible}
      blockScroll={true}
      maskClassName="navBarSidebar"
    >
      <LogoLink className="w-8" />
      <div className="flex flex-column gap-3 mt-2 border-top-1 pt-3">
        <Nav onCLick={showVisible} />
      </div>
    </Sidebar>
  );
};
