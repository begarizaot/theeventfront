import { Skeleton } from "antd";
import { Link } from "react-router-dom";
import { TextPrimary } from "../../../../../components";

interface listCategoriesProp {
  list: any[];
  loading?: boolean;
}

export const ListCategoriesComp = ({ list, loading }: listCategoriesProp) => {
  return (
    <div className="col-span-1 my-6 bg-[linear-gradient(0deg,rgba(34,2,0,0)_0%,#420502_50%,rgba(34,2,0,0)_100%)]">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-4 sm:px-6 mx-auto max-w-[80rem]">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl sm:text-3xl font-bold bebasNeue text-center sm:text-start">
            Browse
            <TextPrimary
              label="Categories"
              className="uppercase bebasNeue ml-1"
            />
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-[80rem] px-6 mt-3 relative">
        {loading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div className="col-span-1 h-15 sm:h-17" key={i}>
              <Skeleton.Node
                key={i}
                active
                className="bg-white/20 w-full! rounded-xl h-full!"
              />
            </div>
          ))}

        {!loading &&
          (list ?? [])?.map((category) => (
            <div className="col-span-1" key={category?.id}>
              <Link
                to={`/cotegory/${category?.slug}`}
                className="group relative"
              >
                <div className="bg-[linear-gradient(90deg,#80001F_0%,rgba(128,0,31,0)_100%)] inset-0 z-10 absolute opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></div>
                <div
                  className="h-15 sm:h-17 bg-amber-200 bg-cover bg-center rounded-lg shadow flex items-center pl-3 justify-center"
                  style={{
                    backgroundImage: `linear-gradient(85.04deg, #000000 32.83%, rgba(0, 0, 0, 0) 98.45%),url(${category?.url_image})`,
                  }}
                >
                  <p className="text-base sm:text-lg z-10">{category?.title}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
