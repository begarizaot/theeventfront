import "./styles.scss";
import { Dialog } from "primereact/dialog";

interface LoadingDialogProps {
  visible: boolean;
}

export const LoadingDialog = ({ visible }: LoadingDialogProps) => {
  return (
    <Dialog
      className="loadingDialog"
      visible={visible}
      onHide={() => {}}
      showHeader={false}
      blockScroll={true}
    >
      <img
        src="https://res.cloudinary.com/dii5f60xx/image/upload/v1732297524/favicon_j59dkq.ico"
        alt=""
        className="w-10rem animate__animated animate__bounce animate__infinite"
      />
    </Dialog>
  );
};
