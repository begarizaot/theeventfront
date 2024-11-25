import "./styles.scss";

import { useResetPassword } from "./useResetPassword";
import { InputIcon } from "../../../components";

import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

interface LoginSidebarProps {
  visible: boolean;
  showVisible: () => void;
}

export const ResetPasswordSidebar = ({
  showVisible,
  visible,
}: LoginSidebarProps) => {
  const {
    handleResetPassword,
    formState,
    onResetForm,
    onInputChange,
    showLogin,
  } = useResetPassword();

  return (
    <Sidebar
      visible={visible}
      position="right"
      onHide={() => {
        onResetForm();
        showVisible();
      }}
      blockScroll={true}
      maskClassName="ResetPasswordSidebar"
    >
      <form
        className="formResetPassword grid text-white pt-3 align-content-start"
        onSubmit={handleResetPassword}
      >
        <div className="col-12 text-4xl flex flex-column font-bold">
          No worries! Enter your email address, and
          <span className="effectPrimary">
            we'll send you a link to reset your password.
          </span>
        </div>

        <div className="col-12 mt-5">
          <div className="grid">
            <div className="col-12 flex flex-column gap-4">
              <div className="flex flex-column">
                <span className="mb-2 text-base">Email</span>
                <InputIcon icon="pi-envelope">
                  <InputText
                    className="py-1 text-white"
                    placeholder="user@gmail.com"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={onInputChange}
                    autoComplete="off"
                    required
                  />
                </InputIcon>
              </div>
            </div>

            <div className="col-12 mt-3 flex flex-column gap-3">
              <Button
                label="Reset password"
                outlined
                className="w-full border-round-3xl outlinedBtn text-sm"
                type="submit"
              />
            </div>
          </div>
        </div>
      </form>

      <div className="flex flex-column pt-2 text-white">
        <span className="text-sm">Already know your password?</span>
        <span
          className="text-lg font-bold mt-1 textPrimary cursor-pointer"
          onClick={showLogin}
        >
          Go back to Log in
        </span>
      </div>
    </Sidebar>
  );
};
