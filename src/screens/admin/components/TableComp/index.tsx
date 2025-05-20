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
}

export const TableComp = ({
  data,
  title,
  columns,
  totalData,
  loading,
  onPageChange,
  onSearch,
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
      <div className="col-span-1 bg-nav px-3 py-2 rounded-tl-xl rounded-tr-xl flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1/4">
          <p className="text-sm sm:text-base font-bold">{title}</p>
          <p className="bg-white text-black px-2 rounded-full text-xs sm:text-sm">
            {totalData || 0}
          </p>
        </div>

        <div className="flex-1/3 flex items-center justify-end gap-2">
          <div className="bg-white rounded-full items-center pr-2 hidden sm:flex">
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

          <Button className="rounded-full! bg-white! border-transparent! h-7! text-black! flex px-2! sm:px-4! sm:hidden!">
            <span className="pi pi-search text-xs"></span>
          </Button>
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
