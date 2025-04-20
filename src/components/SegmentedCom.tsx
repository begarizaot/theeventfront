import { ConfigProvider, Segmented } from "antd";

import { SegmentedOptions } from "antd/es/segmented";
import { valueType } from "antd/es/statistic/utils";

interface SegmentedProps {
  options?: any[] | SegmentedOptions<valueType>;
  onChange?: (value: valueType) => void;
}

export const SegmentedCom = ({ options, onChange }: SegmentedProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Segmented: {
            itemSelectedBg: "var(--ant-color-primary)",
            itemSelectedColor: "var(--text-color)",
            itemHoverBg: "transparent",
            borderRadiusSM: 20,
          },
        },
      }}
    >
      {options && options?.length > 0 && (
        <Segmented
          options={options || []}
          className="p-1! rounded-full! "
          onChange={onChange}
        />
      )}
    </ConfigProvider>
  );
};
