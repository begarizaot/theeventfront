import { InputText } from "primereact/inputtext";
import { InputIcon } from "../../../../../../components";
import { InputNumber } from "primereact/inputnumber";

export const ContactInformation = () => {
  return (
    <div className="grid">
      <div className="col-12">
        <h3 className="m-0">Contact Information</h3>
      </div>
      <div className="col-12">
        <div className="grid">
          <div className="col-12 sm:col-6 flex flex-column">
            <span className="mb-2 text-base">
              First Name <span className="textPrimary text-xl">*</span>
            </span>
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
            <span className="mb-2 text-base">
              Last Name <span className="textPrimary text-xl">*</span>
            </span>
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
          <div className="col-12 sm:col-6 flex flex-column">
            <span className="mb-2 text-base">
              Email <span className="textPrimary text-xl">*</span>
            </span>
            <InputIcon icon="pi-envelope">
              <InputText
                className="py-1 text-white"
                placeholder="user@gmail.com"
                type="email"
                name="email"
                autoComplete="off"
                required
              />
            </InputIcon>
          </div>
          <div className="col-12 sm:col-6 flex flex-column">
            <span className="mb-2 text-base">
              Phone <span className="textPrimary text-xl">*</span>
            </span>
            <InputIcon icon="pi-phone">
              <InputNumber
                inputClassName="py-1 text-white"
                placeholder="Phone Number"
                required
                useGrouping={false}
              />
            </InputIcon>
          </div>
        </div>
      </div>
    </div>
  );
};
