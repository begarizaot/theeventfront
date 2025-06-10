import "./styles.scss";
import { useHome } from "./useHome";

import {
  AllArtistsComp,
  AllEventsComp,
  EventsCarouselComp,
  HeroComp,
  ListCategoriesComp,
} from "./components";
import { MetaDataCom } from "../../../../components";

const { VITE_APITHEEVENT, VITE_TITLE } = import.meta.env;

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
      <MetaDataCom title={VITE_TITLE} url={`${VITE_APITHEEVENT}`} />
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
