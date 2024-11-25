import { Button } from "primereact/button";
import { TicketQrDialog } from "../../ui/dialog";
import { useMyTicketDetail } from "./useMyTicketDetail";

export const MyTicketDetail = () => {
  const { isQr, showQr, onTicketsQr } = useMyTicketDetail();

  return (
    <>
      <TicketQrDialog
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        visible={isQr}
        showVisible={showQr}
      />
      <div className="grid max-width-80 mx-auto px-4 align-content-start sm:px-6 pt-8 text-white">
        <div className="col-12">
          <div className="grid">
            <div className="col-12 sm:col-6 lg:col-4 h-25rem">
              <div className="effectBorder p-1 border-round w-full h-full relative">
                <div
                  className="bgFull bg-center bg-no-repeat absolute w-full h-full border-round"
                  style={{
                    backgroundImage: `url("https://res.cloudinary.com/dii5f60xx/image/upload/v1727559209/events/event_Id_4_8e1f2afeb0.png")`,
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-column gap-2 justify-content-center col-12 sm:col-6 lg:col-8">
              <h3 className="m-0 text-center">Secreto en Concierto</h3>

              <div className="flex flex-column gap-2">
                <div className="text-sm flex align-items-center gap-2">
                  <span className="pi pi-map-marker textPrimary"></span>
                  3710 W Waters Ave, Tampa, FL 33614
                </div>
                <div className="text-sm flex align-items-center gap-2">
                  <span className="pi pi-calendar textPrimary"></span>
                  Saturday, November 23
                </div>
              </div>

              <h4 className="m-0 mt-3">Details</h4>
              <div className="flex flex-column gap-1">
                <p className="m-0 text-xs">
                  Doors:
                  <span className="text-sm ml-1">9:00 PM - 3:00 AM</span>
                </p>
                <p className="m-0 text-xs">
                  Event Category:
                  <span className="text-sm ml-1">Concerts</span>
                </p>
                <p className="m-0 text-xs">
                  Age:
                  <span className="text-sm ml-1">21+</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* tickets */}
        <div className="col-12">
          <div className="grid">
            <div className="col-12">
              <h3 className="m-0">Tickets</h3>
            </div>

            <div className="col-12">
              <div className="grid">
                {[
                  { id: 1, lavel: "GA", amout: 1, value: 44 },
                  { id: 2, lavel: "VIP", amout: 2, value: 55 },
                ].map((item, index) => (
                  <div className="col-12 border-bottom-1 bgBorder" key={index}>
                    <div className="grid">
                      <div className="col-4 sm:col-8 lg:col-9 flex align-items-center">
                        {item.lavel}
                      </div>
                      <div className="col-8 sm:col-4 lg:col-3 flex align-items-center justify-content-end gap-2">
                        <span className="pi pi-ticket textPrimary"></span>
                        <p className="m-0">
                          <span className="text-sm">{item.amout} x</span> $
                          {item.value}
                        </p>

                        <Button
                          icon="pi pi-qrcode"
                          outlined
                          className=" border-round-3xl outlinedBtn text-sm h-1rem"
                          type="button"
                          onClick={onTicketsQr}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 flex-column flex gap-1 border-bottom-1 bgBorder">
          <div className="flex align-items-center justify-content-between">
            <span className="text-sm">Subtotal</span> <strong>$120</strong>
          </div>
          <div className="flex align-items-center justify-content-between">
            <span className="text-sm">Service Fee</span> <strong>$18</strong>
          </div>
          <div className="flex align-items-center justify-content-between">
            <span className="text-sm">Processing Fee</span>{" "}
            <strong>$4.43</strong>
          </div>
        </div>

        <div className="col-12 flex align-items-center justify-content-between">
          <span className="text-base">Total</span>{" "}
          <strong className="text-xl">$120</strong>
        </div>
      </div>
    </>
  );
};
