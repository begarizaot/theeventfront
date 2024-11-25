export const InfoEvent = () => {
  return (
    <div className="grid">
      <div className="col-12 text-center">
        <h1 className="text-lg sm:text-2xl m-0">Secreto en Concierto</h1>
      </div>
      <div className="col-12">
        <div className="grid justify-content-center">
          <div className="col-6 sm:col-4 flex align-items-center justify-content-center gap-2">
            <span className={`pi pi-building textPrimary text-lg`}></span>
            <span className="text-overflow-ellipsis white-space-nowrap overflow-hidden">
              809 Lounge Restaurant & Grill
            </span>
          </div>
          <div className="col-6 sm:col-4 flex align-items-center justify-content-center gap-2">
            <span className={`pi pi-map-marker textPrimary text-lg`}></span>
            <span className="text-overflow-ellipsis white-space-nowrap overflow-hidden">
              3710 W Waters Ave, Tampa, FL 33614
            </span>
          </div>
          <div className="col-6 sm:col-4 flex align-items-center justify-content-center gap-2">
            <span className={`pi pi-calendar textPrimary text-lg`}></span>
            <span className="text-overflow-ellipsis white-space-nowrap overflow-hidden">
              Saturday, November 23, 2024
            </span>
          </div>
          <div className="col-6 sm:col-4 flex align-items-center justify-content-center gap-2">
            <span className={`pi pi-clock textPrimary text-lg`}></span>
            <span className="text-overflow-ellipsis white-space-nowrap overflow-hidden">
              9:00 PM - 3:00 AM
            </span>
          </div>
          <div className="col-6 sm:col-4 flex align-items-center justify-content-center gap-2">
            <span className={`pi pi-id-card textPrimary text-lg`}></span>
            <span className="text-overflow-ellipsis white-space-nowrap overflow-hidden">
              21+
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
