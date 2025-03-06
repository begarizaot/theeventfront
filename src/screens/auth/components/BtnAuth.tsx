import "../scss/components/btnAuth.scss";
import { Button } from "antd";

export const BtnAuth = () => {
  return (
    <>
      <p className="separator my-3 sm:my-5">Or login with</p>
      <div className="grid grid-cols-3 gap-3">
        <Button
          className="rounded-3xl! uppercase btnStyle"
          icon={<span className="pi pi-facebook"></span>}
        >
          <span className="font-bold text-xs hidden sm:block">Facebook</span>
        </Button>
        <Button
          className="rounded-3xl! uppercase btnStyle"
          icon={<span className="pi pi-apple"></span>}
        >
          <span className="font-bold text-xs hidden sm:block">Apple</span>
        </Button>

        <Button
          className="rounded-3xl! uppercase btnStyle"
          icon={<span className="pi pi-facebook"></span>}
        >
          <span className="font-bold text-xs hidden sm:block">Facebook</span>
        </Button>
      </div>
    </>
  );
};
