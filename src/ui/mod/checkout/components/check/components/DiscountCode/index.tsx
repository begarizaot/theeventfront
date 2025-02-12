import { Input } from "antd";

import { ButtonComp } from "../../../../../../components";
import { useDiscountCode } from "./useDiscountCode";
import { DiscountCodeCompProps } from "./interfaces";

export const DiscountCodeComp = (props: DiscountCodeCompProps) => {
  const { code, loading, onApply, onChange } = useDiscountCode(props);

  return (
    <>
      <p className="text-base mb-1">Discount Code</p>
      <Input
        placeholder="Code"
        className="rounded-full! bg-transparent! border-white! text-white!"
        classNames={{
          input: "placeholder-white/20! py-[2px]!",
        }}
        prefix={<span className="pi pi-tag mr-1 textPrimary"></span>}
        suffix={
          <ButtonComp lable="Apply" onClick={onApply} loading={loading} />
        }
        value={code}
        onChange={onChange}
        disabled={loading}
        autoComplete="off"
      />
    </>
  );
};
