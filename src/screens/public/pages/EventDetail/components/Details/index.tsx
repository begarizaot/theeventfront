import { Link } from "react-router-dom";

interface DetailsProps {
  data: any;
}
export const Details = ({ data }: DetailsProps) => {
  const Info = (data: any) => {
    return (
      <>
        <span className={`${data?.icon} textPrimary text-lg`}></span>
        <span>{data?.label}</span>
      </>
    );
  };

  return (
    <div className="grid">
      <div className="col-12 flex flex-column gap-2">
        {data?.detail?.length > 0 &&
          data?.detail?.map((item: any, index: number) =>
            item.link ? (
              <Link
                key={index}
                to={item.link}
                className="flex gap-2 align-items-center no-underline text-white"
                target="_blank"
              >
                {Info(item)}
              </Link>
            ) : (
              <div className="flex gap-2 align-items-center" key={index}>
                {Info(item)}
              </div>
            )
          )}
      </div>

      <div className="col-12 flex flex-column gap-1">
        {data?.description?.split("\n").map((item: string, index: number) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <div className="col-12">
        <span className="text-lg">Got questions about the event?</span>

        <div className="mt-2">
          <div className="flex flex-column">
            <span className="font-bold">Phone</span>
            <Link
              to={`tel:${data?.contact_phone}`}
              className="text-white no-underline"
            >
              {data?.contact_phone}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
