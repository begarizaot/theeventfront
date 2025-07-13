import { SeatsioSeatingChart } from "@seatsio/seatsio-react";

interface ChairsCompProp {
  eventMapId: string;
  loading: boolean;
  seats: any[];
  onAddTicketMap?: (ev: any) => void;
  onRmTicketMap?: (ev: any) => void;
}

export const ChairsMapComp = ({
  loading,
  seats,
  eventMapId,
  onAddTicketMap,
  onRmTicketMap,
}: ChairsCompProp) => {
  const priceFormatter = (price: any) => {
    return `$${price.toFixed(2)}`;
  };
  return (
    <div className="bgCard p-3 rounded-xl h-full overflow-auto flex flex-col">
      {!loading && (
        <>
          <SeatsioSeatingChart
            region="na"
            workspaceKey={import.meta.env.VITE_SEATS_WORKSPACE_KEY}
            event={eventMapId}
            onObjectSelected={onAddTicketMap}
            onObjectDeselected={onRmTicketMap}
            showLegend={true}
            popoverInfo={(object) => {
              const ticktData = seats.find(
                (e) => e.order === object.category?.key && e.isTable
              );

              if (ticktData?.id) {
                return ticktData.description;
              }
              return "";
            }}
            pricing={
              (seats ?? []).map((event) => {
                return {
                  category: Number(event.order),
                  price: event.price,
                  formattedPrice: `$${event.price || 0}`,
                };
              }) || []
            }
            colorScheme="dark"
            priceFormatter={priceFormatter}
          />
        </>
      )}
    </div>
  );
};
