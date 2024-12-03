import { Skeleton } from "primereact/skeleton";

export const SkeletonDetail = () => {
  return (
    <div className="grid">
      <div className="col-12 flex flex-column gap-2">
        {[1, 2, 3, 4].map((val) => (
          <Skeleton className="h-2rem" key={val}></Skeleton>
        ))}
      </div>

      <div className="col-12">
        <Skeleton className="h-7rem"></Skeleton>
      </div>
    </div>
  );
};
