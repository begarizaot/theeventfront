export const ListTickets = () => {
  return (
    <div className="grid">
      <div className="col-12 flex align-items-center gap-2">
        <span className="pi pi-shopping-cart textPrimary"></span>
        <h3 className="m-0">Selected Tickets</h3>
      </div>
      <div className="col-12 pt-0">
        <h5 className="m-0">NO TICKETS SELECTED</h5>
        <p className="m-0 text-sm">Please select tickets to begin your order</p>
      </div>
      <div className="col-12 pt-0 hidden">
        <div className="flex flex-wrap sm:grid">
          {[
            { amoun: 1, label: "GA", value: 55 },
            { amoun: 3, label: "VIP", value: 77 },
            { amoun: 3, label: "VIP", value: 77 },
            { amoun: 3, label: "VIP", value: 77 },
            { amoun: 3, label: "VIP", value: 77 },
          ].map((item, index) => (
            <div
              className="col-4 sm:col-12 flex align-items-center sm:justify-content-between"
              key={index}
            >
              <h4 className="m-0">{item.label}</h4>
              <div className="m-0">
                <span className="text-sm mr-1">{item.amoun} x</span>
                <strong>${item.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
