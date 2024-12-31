import { InputText } from "primereact/inputtext";
import { InputIcon } from "../../../../ui";

import { useProfile } from "./hooks/useProfile";

import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { InputMask } from "primereact/inputmask";

export const ProfilePage = () => {
  const {
    errorRes,
    formState,
    passwordMust,
    checkPassword,
    onInputChange,
    onUpdateProfile,
    onLogout,
  } = useProfile();

  return (
    <>
      <Toast ref={errorRes} />
      <div className="grid mt-3">
        <div className="col-12 flex justify-content-end">
          <div
            className="flex gap-2 align-items-center cursor-pointer"
            onClick={onLogout}
          >
            <span>Sign out</span>
            <span className="pi pi-sign-out"></span>
          </div>
        </div>
        <div className="col-12 flex justify-content-center">
          <div className="stylePerfil border-3 p-1 border-circle cursor-pointer">
            <i className="pi pi-user text-3xl bg-white p-3 text-black-alpha-50 border-circle pointer-events-none"></i>
          </div>
        </div>
        <div className="col-12 text-center">
          <h3 className="m-0">{formState.username}</h3>
        </div>
        <div className="col-12 mt-2">
          <form className="grid" onSubmit={onUpdateProfile}>
            <div className="col-12 sm:col-6 flex flex-column">
              <span className="mb-2 text-base">First Name</span>
              <InputIcon icon="pi-user">
                <InputText
                  className="py-1 text-white"
                  placeholder="First Name"
                  name="firstname"
                  autoComplete="off"
                  required
                  value={formState.firstname}
                  onChange={onInputChange}
                />
              </InputIcon>
            </div>
            <div className="col-12 sm:col-6 flex flex-column">
              <span className="mb-2 text-base">Last Name</span>
              <InputIcon icon="pi-user">
                <InputText
                  className="py-1 text-white"
                  placeholder="Last Name"
                  name="lastname"
                  autoComplete="off"
                  required
                  value={formState.lastname}
                  onChange={onInputChange}
                />
              </InputIcon>
            </div>
            <div className="col-12 sm:col-7 flex flex-column">
              <span className="mb-2 text-base">Email</span>
              <InputIcon icon="pi-envelope">
                <InputText
                  className="py-1 text-white"
                  placeholder="user@gmail.com"
                  type="email"
                  name="email"
                  autoComplete="off"
                  disabled
                  value={formState.email}
                />
              </InputIcon>
            </div>
            <div className="col-12 sm:col-5 flex flex-column">
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
                  className="py-1 text-white"
                  autoComplete="off"
                ></InputMask>
              </InputIcon>
            </div>
            <div className="col-12 sm:col-6 flex flex-column">
              <span className="mb-2 text-base">Password</span>
              <InputIcon icon="pi-lock">
                <Password
                  inputClassName="py-1 text-white"
                  placeholder="******"
                  toggleMask
                  feedback={false}
                  name="password"
                  autoComplete="new-password"
                  value={formState.password}
                  onChange={(e) => {
                    onInputChange(e);
                    checkPassword(e.target.value);
                  }}
                />
              </InputIcon>
            </div>
            <div className="col-12 sm:col-6 flex flex-column">
              <span className="mb-2 text-base">Confirm Password</span>
              <InputIcon icon="pi-lock">
                <Password
                  inputClassName="py-1 text-white"
                  placeholder="******"
                  toggleMask
                  feedback={false}
                  name="passwordConfirm"
                  autoComplete="new-password"
                  value={formState.passwordConfirm}
                  onChange={onInputChange}
                />
              </InputIcon>
            </div>

            <div className="col-12 text-center">
              <span>Your password must:</span>
              <div className="mt-2 flex flex-column align-items-center gap-2">
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

            <div className="col-12 mt-2">
              <Button
                label="Update"
                outlined
                className="w-full border-round-3xl outlinedBtn text-sm"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
