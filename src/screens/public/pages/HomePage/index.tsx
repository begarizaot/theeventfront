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
  const {
    homeDate,
    eventDate,
    artistDate,
    loadingEvents,
    loadingArtist,
    loadingHome,
  } = useHome();

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
      <ListCategoriesComp
        loading={loadingHome}
        list={(homeDate?.categories ?? []).map((inf) => inf.category_id)}
      />

      <AllEventsComp loading={loadingEvents} list={eventDate} />

      {/* all artists */}
      <AllArtistsComp loading={loadingArtist} list={artistDate} />
    </>
  );
};
