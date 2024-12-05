import { useLogin } from "./hooks/useLogin";
import { InputIcon } from "../../../components";

import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

interface LoginSidebarProps {
  visible: boolean;
  showVisible: () => void;
}

export const LoginSidebar = ({ showVisible, visible }: LoginSidebarProps) => {
  const {
    handleLogin,
    formState,
    onInputChange,
    onResetForm,
    showRegister,
    showResetPassword,
  } = useLogin();

  return (
    <Sidebar
      visible={visible}
      position="right"
      onHide={() => {
        onResetForm();
        showVisible();
      }}
      blockScroll={true}
      maskClassName="loginSidebar"
    >
      <form className="grid text-white pt-3" onSubmit={handleLogin}>
        <div className="col-12 text-4xl flex flex-column font-bold">
          Log in to your <span className="effectPrimary">Event Hub.</span>
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

              <div className="flex flex-column">
                <span className="mb-2 text-base">Password</span>
                <InputIcon icon="pi-lock">
                  <Password
                    inputClassName="py-1 text-white"
                    placeholder="******"
                    toggleMask
                    feedback={false}
                    name="password"
                    value={formState.password}
                    onChange={onInputChange}
                    autoComplete="new-password"
                    required
                  />
                </InputIcon>
              </div>
            </div>

            <div className="col-12 mt-3 flex flex-column gap-3">
              <Button
                label="Log In"
                outlined
                className="w-full border-round-3xl outlinedBtn text-sm"
                type="submit"
              />
              <Button
                label="Forgot Password?"
                outlined
                className="w-full border-round-3xl outlinedBtn text-sm"
                type="button"
                onClick={showResetPassword}
              />
            </div>

            <div className="col-12 text-center mt-4">
              <span className="text-lg font-bold">
                New to <span className="effectPrimary">The Event Jet?</span>
              </span>

              <Button
                label="Register"
                outlined
                className="w-full border-round-3xl outlinedBtn text-sm mt-3"
                type="button"
                onClick={showRegister}
              />
            </div>
          </div>
        </div>
      </form>
    </Sidebar>
  );
};
