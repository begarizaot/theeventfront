import "./style.scss";
import { Link } from "react-router-dom";
import { useMyTickets } from "./hooks/useMyTickets";

import { Paginator } from "primereact/paginator";
import { NumberFormat } from "../../../../helpers";
import moment from "moment";
import { Skeleton } from "primereact/skeleton";

export const MyTickets = () => {
  const { data, loading, onPageChange, pages, pagination } = useMyTickets();

  return (
    <div className="contMyTickets grid max-width-80 mx-auto px-4 align-content-start sm:px-6 pt-8 text-white">
      <div className="col-12 text-center">
        <h1 className="m-0">My Tickets</h1>
        <p className="m-0">Purchase history</p>
      </div>
      {!loading && data.length == 0 && (
        <div className="col-12 mt-8 flex align-items-center justify-content-center flex-column">
          <span className="pi pi-file-arrow-up textPrimary text-5xl mb-2"></span>
          <p className="m-0">You currently have no tickets purchased.</p>
        </div>
      )}

      {loading &&
        [1, 2, 3].map((val) => (
          <div className="col-12" key={val}>
            <Skeleton className="h-6rem"></Skeleton>
          </div>
        ))}

      <div className="col-12">
        <div className="grid">
          {!loading &&
            data.length > 0 &&
            data.map((ticket: any) => (
              <div className="col-12 border-top-1 bgBorder" key={ticket.id}>
                <div className="grid">
                  <div className="col-12 font-bold text-lg">
                    {ticket?.event_id?.event_name}
                  </div>
                  <div className="col-12 sm:col-6 flex align-items-center gap-2">
                    <span className="pi pi-calendar textPrimary"></span>
                    <p className="m-0">
                      {moment(ticket?.event_id?.start_date).format(
                        "dddd MMMM DD, YYYY"
                      )}
                    </p>
                  </div>
                  <div className="col-12 flex-order-0 sm:col-6 text-right ">
                    ID: <span>{ticket?.id_order}</span>
                  </div>
                  <div className="col-4 sm:col-6">
                    <span className="text-xs">Amount paid</span>
                    <h3 className="m-0">${NumberFormat(ticket.total_price)}</h3>
                  </div>
                  <div className="col-8 sm:col-6 flex align-items-center justify-content-end">
                    <Link
                      to={`/ticket/${ticket?.id_order}`}
                      className="w-full sm:w-8 border-round-3xl no-underline text-white border-1 flex align-items-center justify-content-center h-2rem"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {pagination?.total > 6 && (
        <div className="col-12 ">
          <Paginator
            first={pages?.first || 0}
            rows={6}
            totalRecords={10}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
};
