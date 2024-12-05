import "./styles.scss";

export const NothingEvent = () => {
  return (
    <div className="col-12 text-white nothingEvent flex align-items-center justify-content-center">
      <div className="grid">
        <div className="col-6"></div>
        <div className="col-6">
          <h1 className="m-0 w-5">Sorry! Nothing was found</h1>
        </div>
        <div className="col-12 text-center mt-3">
          Try to search for another event or check the filters you have applied
        </div>
      </div>
    </div>
  );
};
