import "./styles.scss";
import { useHome } from "./useHome";

import {
  AllArtistsComp,
  AllEventsComp,
  EventsCarouselComp,
  ListCategoriesComp,
} from "./components";

export const HomePage = () => {
  const { allEvents, listEvents, listArtists, allcategories } = useHome();

  return (
    <>
      <EventsCarouselComp list={listEvents} />

      {/* all events */}
      <ListCategoriesComp list={allcategories} />

      <AllEventsComp list={allEvents} />

      {/* all artists */}
      <div className="mt-10 sm:my-12 bgArtists">
        <AllArtistsComp list={listArtists} />
      </div>
    </>
  );
};
