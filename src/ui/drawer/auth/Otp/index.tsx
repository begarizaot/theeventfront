import { ButtonComp } from "../../../components";
import "./styles.css";
import { ConfigProvider, Drawer, Input } from "antd";

interface OtpDrawerProps {
  visible: boolean;
  onClose: () => void;
}

export const OtpDrawer = ({ onClose, visible }: OtpDrawerProps) => {
  return (
    <ConfigProvider
      drawer={{ styles: { mask: { backdropFilter: "blur(10px)" } } }}
    >
      <Drawer
        placement="right"
        onClose={() => {
          onClose();
        }}
        open={visible}
        className="drawer text-white"
      >
        <div className="flex flex-col h-full">
          <h1 className="text-2xl font-bold">
            Confirm
            <span className="effectPrimary mx-1">One-Time</span>
            code
          </h1>

          <p className="my-4 flex flex-col">
            Please enter the one-time code sent to{" "}
            <span className="effectPrimary">(301) 544-4439.</span>
          </p>
          <div className="optInpust w-72 mx-auto my-3">
            <Input.OTP length={4} onChange={(e) => console.log(e)} />
          </div>

          <div className="text-center">
            <p className="flex gap-1 text-base justify-center">
              Send again in
              <span className="effectPrimary">00:00</span>
            </p>
            <p className="text-xs">Your one-time code has expired</p>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <ButtonComp className="mt-1" lable="Continue" />
            <ButtonComp className="mt-1" lable="Send again" />
          </div>
        </div>
      </Drawer>
    </ConfigProvider>
  );
};
