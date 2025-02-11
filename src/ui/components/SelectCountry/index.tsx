import "./styles.css";
import { Select, Space } from "antd";
import { useSelectCountry } from "./useSelectCountry";

interface SelectCountryProps {
  onChange: (value: string) => void;
}

export const SelectCountry = ({onChange}:SelectCountryProps) => {
  const { countries } = useSelectCountry();

  return (
    <Select
      showSearch={countries.length > 10}
      className="selectCountry selectStyle"
      placeholder="Select Country"
      onChange={onChange}
      options={countries}
      optionRender={(option) => (
        <Space className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            <span role="img" aria-label={option.data.name}>
              {option.data.emoji}
            </span>
            {option.data.name}
          </div>
          <div>{option.data.desc}</div>
        </Space>
      )}
    />
  );
};
