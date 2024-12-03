import { ArrowRight } from "../../../../../../icons";

export const Ticket = () => {
  return (
    <div className="grid h-full align-content-start overflow-auto">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
        <div className="col-12" key={value}>
          <div className="grid">
            <div className="col-1 flex align-items-center">
              <ArrowRight color="#ff0000" />
            </div>
            <div className="col-9">
              <div className="flex align-items-center gap-2">
                <p className="m-0 text-sm">GA</p>
                <span className="font-bold text-lg">$55</span>
              </div>
              <div className="text-sm flex flex-column sm:block">
                <span>
                  RSVP is NOT required for this ticket purchase Ticket delante
                  de tarima
                </span>
                <span>No incluye asiento</span>
                <span>Non refundable</span>
              </div>
            </div>
            <div className="col-2 flex align-items-center">
              <select className="selectStyle h-2rem w-4rem bg-transparent text-white text-center border-round bgBorder">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
