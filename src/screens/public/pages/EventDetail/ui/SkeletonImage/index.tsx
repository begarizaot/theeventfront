import { Skeleton } from "primereact/skeleton";

export const SkeletonImage = () => {
  return (
    <div className="grid">
      <div className="col-12">
        <div className="grid">
          <div className="col-12 sm:col-6 lg:col-4">
            <Skeleton className="h-30rem sm:h-25rem"></Skeleton>
          </div>
          <div className="col-6 lg:col-8 hidden sm:flex flex-column justify-content-center gap-4">
            {[1, 2, 3].map((val) => (
              <Skeleton className="h-2rem" key={val}></Skeleton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
