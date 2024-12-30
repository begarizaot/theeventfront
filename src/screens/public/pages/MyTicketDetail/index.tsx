import { TicketQrDialog } from "../../ui/dialog";

import { useMyTicketDetail } from "./hooks/useMyTicketDetail";

import { DetailEvent, SkeletonDetail } from "./components";
import { NumberFormat } from "../../../../helpers";

import { Button } from "primereact/button";
import { Skeleton } from "primereact/skeleton";

export const MyTicketDetail = () => {
  const { isQr, dataQr, selectedTicket, loading, showQr, onTicketsQr } =
    useMyTicketDetail();

  return (
    <>
      <TicketQrDialog data={dataQr} visible={isQr} showVisible={showQr} />
      <div className="grid max-width-80 mx-auto px-4 align-content-start sm:px-6 pt-8 text-white">
        <div className="col-12">
          {loading && <SkeletonDetail />}
          {!loading && selectedTicket?.event?.id && (
            <DetailEvent data={selectedTicket.event} />
          )}
        </div>

        {/* tickets */}
        <div className="col-12">
          <div className="grid">
            <div className="col-12">
              <h3 className="m-0">Tickets</h3>
            </div>

            <div className="col-12">
              <div className="grid">
                {loading &&
                  [1, 2, 3].map((val) => (
                    <div className="col-12" key={val}>
                      <Skeleton className="h-2rem"></Skeleton>
                    </div>
                  ))}
                {!loading &&
                  selectedTicket?.tickets?.map((item: any) => (
                    <div
                      className="col-12 border-bottom-1 bgBorder"
                      key={item.id_ticket}
                    >
                      <div className="grid">
                        <div className="col-4 sm:col-8 lg:col-9 flex align-items-center">
                          {item.name}
                        </div>
                        <div className="col-8 sm:col-4 lg:col-3 flex align-items-center justify-content-end gap-2">
                          <span className="pi pi-ticket textPrimary"></span>
                          <p className="m-0">
                            <span className="text-sm">{item.amount} x</span> $
                            {item.price}
                          </p>

                          <Button
                            icon="pi pi-qrcode"
                            outlined
                            className=" border-round-3xl outlinedBtn text-sm h-1rem"
                            type="button"
                            onClick={() => onTicketsQr(item)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {loading &&
          [1, 2, 3, 4].map((val) => (
            <div className="col-12" key={val}>
              <Skeleton className="h-2rem"></Skeleton>
            </div>
          ))}

        {!loading && (
          <>
            <div className="col-12 flex-column flex gap-1 border-bottom-1 bgBorder">
              <div className="flex align-items-center justify-content-between">
                <span className="text-sm">Subtotal</span>
                <strong>
                  ${NumberFormat(selectedTicket?.price?.subTotal || 0, 2) || 0}
                </strong>
              </div>
              <div className="flex align-items-center justify-content-between">
                <span className="text-sm">Service Fee</span>
                <strong>
                  $
                  {NumberFormat(selectedTicket?.price?.serviceFee || 0, 2) || 0}
                </strong>
              </div>
              <div className="flex align-items-center justify-content-between">
                <span className="text-sm">Processing Fee</span>
                <strong>
                  $
                  {NumberFormat(selectedTicket?.price?.processingFee || 0, 2) ||
                    0}
                </strong>
              </div>
            </div>

            <div className="col-12 flex align-items-center justify-content-between">
              <span className="text-base">Total</span>
              <strong className="text-xl">
                ${NumberFormat(selectedTicket?.price?.total || 0, 2) || 0}
              </strong>
            </div>
          </>
        )}
      </div>
    </>
  );
};
