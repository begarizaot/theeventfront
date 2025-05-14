export const AnalyticTextComp = () => {
  return (
    <div className="bg-nav p-3! rounded-xl text-white! flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="pi pi-chart-line text-3xl rounded-2xl"></span>
        <p className="text-xl bebasNeue">Event Sales</p>
      </div>

      <h1 className="font-bold text-3xl">$57,990</h1>
      <div className="grid gap-1">
        <div className="flex items-center justify-between text-sm">
          <p>Number of tickets Sold</p>
          <p>$1.00</p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <p>Ticket Price</p>
          <p>$1.00</p>
        </div>
      </div>
    </div>
  );
};
