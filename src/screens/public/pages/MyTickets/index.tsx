import { Paginator } from "primereact/paginator";
import "./style.scss";
import { Link } from "react-router-dom";

export const MyTickets = () => {
  return (
    <div className="contMyTickets grid max-width-80 mx-auto px-4 align-content-start sm:px-6 pt-8 text-white">
      <div className="col-12 text-center">
        <h1 className="m-0">My Tickets</h1>
        <p className="m-0">Purchase history</p>
      </div>
      {/* <div className="col-12 mt-8 flex align-items-center justify-content-center flex-column">
        <span className="pi pi-file-arrow-up textPrimary text-5xl mb-2"></span>
        <p className="m-0">You currently have no tickets purchased.</p>
      </div> */}

      <div className="col-12">
        <div className="grid">
          <div className="col-12 border-top-1 bgBorder">
            <div className="grid">
              <div className="col-12 font-bold text-lg">
                Secreto en Concierto
              </div>
              <div className="col-12 sm:col-6 flex align-items-center gap-2">
                <span className="pi pi-calendar textPrimary"></span>
                <p className="m-0">Saturday, November 23, 2024</p>
              </div>
              <div className="col-12 flex-order-0 sm:col-6 text-right ">
                ID: <span>5451d8a5d6a4740c1b</span>
              </div>
              <div className="col-4 sm:col-6">
                <span className="text-xs">Amount paid</span>
                <h3 className="m-0">$142.43</h3>
              </div>
              <div className="col-8 sm:col-6 flex align-items-center justify-content-end">
                <Link
                  to="/ticket/5451d8a5d6a4740c1b"
                  className="w-full sm:w-8 border-round-3xl no-underline text-white border-1 flex align-items-center justify-content-center h-2rem"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
        <Paginator
          first={1}
          rows={10}
          totalRecords={20}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
};
