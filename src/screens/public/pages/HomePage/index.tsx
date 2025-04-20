import "./styles.scss";
import { useHome } from "./useHome";

import {
  AllArtistsComp,
  AllEventsComp,
  EventsCarouselComp,
  HeroComp,
  ListCategoriesComp,
} from "./components";

export const HomePage = () => {
  const { allEvents, listArtists, allcategories, homeDate } =
    useHome();

  return (
    <>
      {(homeDate?.eventCarruselItem ?? []).length > 0 && (
        <EventsCarouselComp list={homeDate?.eventCarruselItem} />
      )}

      {(homeDate?.eventCarruselItem ?? []).length == 0 && (
        <HeroComp
          title={homeDate?.title ?? ""}
          imageUrl={homeDate?.url_image}
          description={homeDate?.description}
        />
      )}

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
