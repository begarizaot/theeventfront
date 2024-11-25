import { Link } from "react-router-dom";

interface DetailsProps {
  data: any;
}
export const Details = ({ data }: DetailsProps) => {
  const Info = (data: any) => {
    return (
      <>
        <span className={`${data.icon} textPrimary text-lg`}></span>
        <span>{data.label}</span>
      </>
    );
  };

  return (
    <div className="grid">
      <div className="col-12 flex flex-column gap-2">
        {data.detail.map((item: any, index: number) =>
          item.link ? (
            <Link
              key={index}
              to={item.link}
              className="flex gap-2 align-items-center no-underline text-white"
              target="_blank"
            >
              {Info(data)}
            </Link>
          ) : (
            <div className="flex gap-2 align-items-center" key={index}>
              {Info(data)}
            </div>
          )
        )}
      </div>

      <div className="col-12 flex flex-column">
        <span>Directo desde la República Dominicana</span>
        <span>Secreto “El Famoso Biberón”</span>
        <span>Para mesas contactar 813-625-0599</span>
        <span>ALL TICKETS ARE NON REFUNDABLE UNLESS EVENT GETS CANCELLED</span>
      </div>

      <div className="col-12">
        <span className="text-lg">Got questions about the event?</span>

        <div className="mt-2">
          <div className="flex flex-column">
            <span className="font-bold">Phone</span>
            <Link to={`tel:+34678567876`} className="text-white no-underline">
              +17867179768
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
