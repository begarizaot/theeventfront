import "./styles.css";
import { ConfigProvider, Drawer } from "antd";

interface NavsDrawerProps {
  navs: any[];
  visible: boolean;
  onClose: () => void;
}

export const NavsDrawer = ({ onClose, visible, navs }: NavsDrawerProps) => {
  return (
    <ConfigProvider
      drawer={{ styles: { mask: { backdropFilter: "blur(10px)" } } }}
    >
      <Drawer
        placement="right"
        onClose={onClose}
        open={visible}
        zIndex={10}
        className="navsDrawer text-white"
      >
        {navs.map((res, index) => {
          return (
            <p className={res.class} key={index}>
              {res.label}
            </p>
          );
        })}
      </Drawer>
    </ConfigProvider>
  );
};
