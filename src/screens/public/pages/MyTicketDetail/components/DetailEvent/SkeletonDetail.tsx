import { Skeleton } from "primereact/skeleton";

export const SkeletonDetail = () => {
  return (
    <div className="grid">
      <div className="col-12 sm:col-6 lg:col-4 h-25rem">
        <Skeleton className="h-25rem"></Skeleton>
      </div>
      <div className="flex flex-column gap-2 justify-content-center col-12 sm:col-6 lg:col-8">
        <Skeleton className="h-2rem"></Skeleton>
        <Skeleton className="h-2rem"></Skeleton>
        <Skeleton className="h-2rem"></Skeleton>
        <Skeleton className="h-2rem"></Skeleton>
      </div>
    </div>
  );
};
