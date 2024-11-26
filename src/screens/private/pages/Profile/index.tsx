import { InputText } from "primereact/inputtext";
import { InputIcon } from "../../../../ui";
import { Password } from "primereact/password";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

export const ProfilePage = () => {
  return (
    <div className="grid mt-3">
      <div className="col-12 flex justify-content-center">
        <div className="stylePerfil border-3 p-1 border-circle cursor-pointer">
          <i className="pi pi-user text-3xl bg-white p-3 text-black-alpha-50 border-circle pointer-events-none"></i>
        </div>
      </div>
      <div className="col-12 text-center">
        <h3 className="m-0">Brayan Garizao</h3>
      </div>
      <div className="col-12 mt-2">
        <form className="grid">
          <div className="col-12 sm:col-6 flex flex-column">
            <span className="mb-2 text-base">First Name</span>
            <InputIcon icon="pi-user">
              <InputText
                className="py-1 text-white"
                placeholder="First Name"
                name="firstName"
                autoComplete="off"
                required
              />
            </InputIcon>
          </div>
          <div className="col-12 sm:col-6 flex flex-column">
            <span className="mb-2 text-base">Last Name</span>
            <InputIcon icon="pi-user">
              <InputText
                className="py-1 text-white"
                placeholder="Last Name"
                name="lastName"
                autoComplete="off"
                required
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
              />
            </InputIcon>
          </div>
          <div className="col-12 sm:col-5 flex flex-column">
            <span className="mb-2 text-base">Phone</span>
            <InputIcon icon="pi-phone">
              <InputNumber
                inputClassName="py-1 text-white"
                placeholder="Phone Number"
                required
                useGrouping={false}
              />
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
                required
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
                required
              />
            </InputIcon>
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
  );
};
