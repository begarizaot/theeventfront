import { ConfigProvider, Modal } from "antd";
import { CheckComp, SelectComp } from "./components";
import { useCheckout } from "./useCheckout";

interface CheckoutModalProps {
  visible: boolean;
  onClose: () => void;
}

export const CheckoutModal = ({ onClose, visible }: CheckoutModalProps) => {
  const { view, selectTicket, onShowView, onHiddenAll, onCheckTicket } =
    useCheckout();

  return (
    <ConfigProvider
      modal={{
        styles: {
          mask: { backdropFilter: "blur(10px)" },
          content: { height: "93vh", overflow: "auto" },
          body: { height: "98%", overflow: "auto" },
        },
      }}
    >
      <Modal
        open={visible}
        onCancel={() => {
          console.log("first");
          onHiddenAll();
        }}
        maskClosable={false}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        width={{
          xs: "92%",
          sm: "95%",
          xl: "90%",
          xxl: "90%",
        }}
        style={{ top: 20 }}
      >
        <div className="h-full flex flex-col">
          <div className="text-white text-center text-xl sm:text-2xl font-bold border-b-2 pb-2">
            Teodoro Reyes en concierto Tampa
          </div>
          {view == "select" && <SelectComp onCheckTicket={onCheckTicket} />}
          {view == "checkout" && <CheckComp />}
        </div>
      </Modal>
    </ConfigProvider>
  );
};
