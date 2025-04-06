import { Button, Modal } from "antd";
import { Link } from "react-router-dom";

interface SuccessOrderModlProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessOrderModl = ({
  isOpen,
  onClose,
}: SuccessOrderModlProps) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      centered
      footer={false}
      maskClosable={false}
      classNames={{
        content: "w-full bgModal bg-cover text-white rounded-2xl! border!",
        mask: "backdrop-blur-xs",
      }}
      closeIcon={<span className="pi pi-times bg-white text-black p-1 text-[9px] rounded-full"></span>}
    >
      <div className="grid">
        <div className="text-center">
          <h1 className="font-bold text-5xl bebasNeue textGradientPrimary">
            Success!
          </h1>
          <h2 className="text-xl bebasNeue">Your purchase is complete</h2>
        </div>

        <p className="text-xs text-center mt-3 mb-2">
          Thank you for your order. You tickets will arrive shortly, to the
          email you provided.{" "}
        </p>

        <h2 className="text-lg text-center bebasNeue">
          Please allow up to 5 minutes for delivery!{" "}
        </h2>

        <p className="text-xs text-center">
          If you experience any issues, please send us a message
          <Link to={""} className="mx-1 text-primary">
            here
          </Link>
          and one of our team members will make sure to quickly respond.
        </p>

        <div className="text-center mt-4">
          <Button className="w-full sm:w-38 lg:w-50 rounded-3xl! uppercase btnStyle" onClick={onClose}>
            <span className="font-bold text-xs">Download Tickets</span>
          </Button>
        </div>
      </div>
    </Modal>
  );
};
