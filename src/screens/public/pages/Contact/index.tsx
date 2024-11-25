import ReCAPTCHA from "react-google-recaptcha";

import { useContact } from "./useContact";
import { InputIcon } from "../../../../ui";
import { environment } from "../../../../environments/environment";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";

export const ContactPage = () => {
  const { formState, onInputChange, handleSutmit } = useContact();

  return (
    <div className="ContactPage grid max-width-80 mx-auto px-4 align-content-start sm:px-6 pt-8 sm:h-screen">
      <div className="col-12 text-center pt-5">
        <h1 className="effectPrimary m-0">Contact Us</h1>
      </div>
      <div className="col-12 mt-4 text-white">
        <form className="grid" onSubmit={handleSutmit}>
          <div className="col-12 sm:col-6">
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
          </div>
          <div className="col-12 sm:col-6">
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
          </div>
          <div className="col-12">
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
          </div>
          <div className="col-12">
            <div className="flex flex-column">
              <span className="mb-2 text-base">Message</span>
              <InputIcon>
                <InputTextarea
                  value={formState.message}
                  name="message"
                  onChange={onInputChange}
                  rows={5}
                  required
                  placeholder="Write your message here..."
                />
              </InputIcon>
            </div>
          </div>

          <div className="col-12">
            <ReCAPTCHA sitekey={environment.CAPTCHAKEY} />
          </div>

          <div className="col-12 mt-3 flex flex-column">
            <Button
              label="Submit"
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
