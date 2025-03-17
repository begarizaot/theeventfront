import "./styles.scss";
import { useHome } from "./useHome";

import { AllArtistsComp, AllEventsComp } from "./components";

export const HomePage = () => {
  const { listEvents, listArtists } = useHome();

  return (
    <>
      {/* all events */}
      <AllEventsComp list={listEvents} />

      {/* all artists */}
      <div className="my-12 bgArtists">
        <AllArtistsComp list={listArtists} />
      </div>
    </>
  );
};
