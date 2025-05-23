import { useState } from "react";
import "./styles.scss";
import { Button, Input, Pagination, Table } from "antd";

interface TableCompProps {
  title?: string;
  data: any[];
  columns: any[];
  totalData?: number;
  loading?: boolean;
  onPageChange: (page: number) => void;
  onSearch?: (search: string) => void;
  onRefresh?: () => void;
}

export const TableComp = ({
  data,
  title,
  columns,
  totalData,
  loading,
  onPageChange,
  onSearch,
  onRefresh,
}: TableCompProps) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page: number) => {
    setPage(page);
    onPageChange(page);
  };

  const handleSearch = (value: string) => {
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="grid grid-cols-1 containerTable">
      {/* header table */}
      <div className="col-span-1 bg-nav px-3 py-2 rounded-tl-xl rounded-tr-xl grid sm:flex sm:items-center sm:justify-between gap-2 w-full">
        <div className="flex items-center gap-3">
          <p className="text-sm sm:text-base font-bold">{title}</p>
          <p className="bg-white text-black px-2 rounded-full text-xs sm:text-sm">
            {totalData || 0}
          </p>
        </div>

        <div className="flex items-center justify-end gap-2">
          {onRefresh && (
            <Button
              className="bg-white text-black px-2 rounded-full! text-xs sm:text-sm w-7! h-7! "
              onClick={onRefresh}
            >
              <span className="pi pi-refresh"></span>
            </Button>
          )}
          <div className="bg-white rounded-full items-center pr-2 flex">
            <Input
              placeholder="Search..."
              className="focus:shadow-none! bg-transparent! border-transparent!"
              classNames={{
                input: "placeholder-black/40! py-[2px]!",
              }}
              inputMode="text"
              autoComplete="off"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <span className="pi pi-search text-black/40 text-xs"></span>
          </div>
        </div>
      </div>
      {/* body table */}
      <div className="col-span-1">
        <Table
          columns={columns}
          dataSource={data}
          className="contTable"
          bordered
          rowHoverable={false}
          size="small"
          scroll={{ x: "100vw" }}
          pagination={false}
          loading={loading}
        />
      </div>
      {/* footer table */}
      <div className="col-span-1 mt-5 mb-3">
        <Pagination
          align="center"
          defaultCurrent={page}
          total={totalData}
          onChange={(ev) => handlePageChange(ev)}
        />
      </div>
    </div>
  );
};
