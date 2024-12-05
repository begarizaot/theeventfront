interface InfoEventProps {
  data: any;
}

export const InfoEvent = ({ data }: InfoEventProps) => {
  return (
    <div className="grid">
      <div className="col-12 text-center">
        <h1 className="text-lg sm:text-2xl m-0">Secreto en Concierto</h1>
      </div>
      <div className="col-12">
        <div className="grid justify-content-center">
          {data?.detail.map((item: any, index: any) => (
            <div
              className="col-6 sm:col-4 flex align-items-center justify-content-center gap-2"
              key={index}
            >
              <span className={`${item.icon} textPrimary text-lg`}></span>
              <span className="text-overflow-ellipsis white-space-nowrap overflow-hidden">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
