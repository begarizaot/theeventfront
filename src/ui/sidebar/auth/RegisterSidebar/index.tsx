import "./style.scss";
import ReCAPTCHA from "react-google-recaptcha";

import { environment } from "../../../../environments/environment";

import { useRegister } from "./hooks/useRegister";
import { InputIcon } from "../../../components";

import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { InputMask } from "primereact/inputmask";

interface RegisterSidebarProps {
  visible: boolean;
  showVisible: () => void;
}

export const RegisterSidebar = ({
  showVisible,
  visible,
}: RegisterSidebarProps) => {
  const {
    passwordMust,
    checkPassword,
    handleRegister,
    onResetForm,
    formState,
    showLogin,
    onInputChange,
    onCaptchaChange,
  } = useRegister();

  return (
    <>
      <Sidebar
        visible={visible}
        position="right"
        onHide={() => {
          onResetForm();
          showVisible();
        }}
        blockScroll={true}
        maskClassName="registerSidebar"
      >
        <form
          className="grid text-white pt-3 formRegister"
          onSubmit={handleRegister}
        >
          <div className="col-12 text-4xl flex flex-column font-bold">
            Join <span className="effectPrimary">The Event Jet</span> today!
            Let's search and host amazing events together
          </div>

          <div className="col-12 mt-2">
            <div className="grid">
              <div className="col-12 flex flex-column gap-3">
                <div className="flex flex-column">
                  <span className="mb-2 text-base">First Name</span>
                  <InputIcon icon="pi-user">
                    <InputText
                      className="py-1 text-white"
                      placeholder="First Name"
                      name="firstName"
                      value={formState.firstName}
                      onChange={onInputChange}
                      autoComplete="off"
                      required
                    />
                  </InputIcon>
                </div>

                <div className="flex flex-column">
                  <span className="mb-2 text-base">Last Name</span>
                  <InputIcon icon="pi-user">
                    <InputText
                      className="py-1 text-white"
                      placeholder="Last Name"
                      name="lastName"
                      value={formState.lastName}
                      onChange={onInputChange}
                      autoComplete="off"
                      required
                    />
                  </InputIcon>
                </div>

                <div className="flex flex-column">
                  <span className="mb-2 text-base">Phone</span>
                  <InputIcon icon="pi-phone">
                    <InputMask
                      id="phone"
                      mask="(999) 999-9999"
                      placeholder="(999) 999-9999"
                      required
                      name="phone"
                      value={formState.phone}
                      onChange={onInputChange}
                      autoComplete="off"
                      className="py-1 text-white"
                    ></InputMask>
                  </InputIcon>
                </div>

                <div className="flex flex-column">
                  <span className="mb-2 text-base">Email</span>
                  <InputIcon icon="pi-envelope">
                    <InputText
                      className="py-1 text-white"
                      placeholder="user@gmail.com"
                      type="email"
                      name="email"
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
                      onChange={(e) => {
                        onInputChange(e);
                        checkPassword(e.target.value);
                      }}
                      autoComplete="new-password"
                      required
                    />
                  </InputIcon>
                </div>

                <div className="flex flex-column">
                  <span className="mb-2 text-base">Confirm Password</span>
                  <InputIcon icon="pi-lock">
                    <Password
                      inputClassName="py-1 text-white"
                      placeholder="******"
                      toggleMask
                      feedback={false}
                      name="passwordConfirm"
                      value={formState.passwordConfirm}
                      onChange={onInputChange}
                      autoComplete="new-password"
                      required
                    />
                  </InputIcon>
                </div>
              </div>

              <div className="col-12">
                <span>Your password must:</span>
                <div className="mt-2 flex flex-column gap-2">
                  {passwordMust.map((item, index) => (
                    <div
                      key={index}
                      className={`flex text-sm ${
                        item.status ? "text-green-900" : "text-white-alpha-30"
                      }`}
                    >
                      <span className="pi pi-check-circle mr-2"></span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-12">
                <ReCAPTCHA
                  sitekey={environment.CAPTCHAKEY}
                  onChange={onCaptchaChange}
                />
              </div>

              <div className="col-12 mt-3 flex flex-column gap-3">
                <Button
                  label="Register"
                  outlined
                  className="w-full border-round-3xl outlinedBtn text-sm"
                  type="submit"
                />
              </div>
            </div>
          </div>
        </form>
        <div className="flex flex-column pt-2 text-white">
          <span className="text-sm">Already have an account with us?</span>
          <span
            className="text-lg font-bold mt-1 textPrimary cursor-pointer"
            onClick={showLogin}
          >
            Log in
          </span>
        </div>
      </Sidebar>
    </>
  );
};
