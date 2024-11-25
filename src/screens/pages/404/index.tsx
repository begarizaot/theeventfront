import "./style.scss";
export const Error404Page = () => {
  return (
    <div className="Error404Page max-width-80 mx-auto px-4 align-content-start sm:px-6 pt-8">
      <div className="grid text-center text-white h-full align-items-center">
        <div className="col-12 flex flex-column">
          <h1 className="m-0 text-6xl sm:text-8xl">404</h1>
          <span className="font-bold mb-2 text-lg sm:text-xl">
            UH OH! You're lost.
          </span>
          <span className="text-sm sm:text-lg">
            The page you are looking for does not exist. How you got here is a
            mystery.
          </span>
        </div>
      </div>
    </div>
  );
};
