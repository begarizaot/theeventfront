import "./styles.scss";
import { useHome } from "./useHome";

import {
  AllArtistsComp,
  AllCarouselComp,
  AllEventsComp,
  AllTestimonialsComp,
} from "./components";

export const HomePage = () => {
  const { listEvents, listArtists, listTestimonials } = useHome();

  return (
    <>
      {/* all events */}
      <AllEventsComp list={listEvents} />

      {/* all artists */}
      <div className="mt-10 sm:my-12 bgArtists">
        <AllArtistsComp list={listArtists} />
      </div>

      {/* all testimonials */}
      <div className="my-5 sm:my-12">
        <AllTestimonialsComp list={listTestimonials} />
      </div>

      <div className="my-20">
        <AllCarouselComp />
      </div>
    </>
  );
};
