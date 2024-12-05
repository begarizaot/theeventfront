import { InputIcon } from "../../../../../components";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";

interface ContactInformationProps {
  data: any;
  changeUser: (ev: any) => void;
}

export const ContactInformation = ({
  changeUser,
  data,
}: ContactInformationProps) => {
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
                value={data?.firstName}
                onChange={changeUser}
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
                value={data?.lastName}
                onChange={changeUser}
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
                value={data?.email}
                onChange={changeUser}
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
                name="phone"
                required
                useGrouping={false}
                value={data?.phone}
                onChange={changeUser}
              />
            </InputIcon>
          </div>
        </div>
      </div>
    </div>
  );
};
