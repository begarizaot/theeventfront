import "./styles.scss";
import { Link } from "react-router-dom";

interface EventCardEffectProps {
  link?: string;
}

export const EventCardEffect = ({ link = "" }: EventCardEffectProps) => {
  const bgImage = () => {
    return (
      <div
        className="bg-cover bg-center bg-no-repeat absolute w-full h-full bgGradient border-round"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dii5f60xx/image/upload/v1727559209/events/event_Id_4_8e1f2afeb0.png)`,
        }}
      ></div>
    );
  };

  return (
    <Link
      to={`${link}/1`}
      className="no-underline text-white contEventCardEffect"
    >
      <div className="flip-card-inner">
        <div className="effectBorder p-1 border-round">
          <div className="relative h-28rem border-round">
            <div className="flip-card-front">
              {bgImage()}
              <div className="absolute bottom-0 py-2 px-3 w-full">
                <div className="grid">
                  <div className="col-12 text-center pb-0">
                    <h4 className="m-0">Saturday</h4>
                    <p className="m-0 text-sm">November</p>
                    <h1 className="m-0 text-5xl">23</h1>
                  </div>
                  <div className="col-12 text-center pt-0">
                    <h1 className="m-0 text-xl">Secreto en Concierto </h1>
                  </div>
                  <div className="col-12 flex justify-content-between flex-wrap gap-2">
                    <div className="w-5 flex">
                      <span className="pi pi-map-marker text-lg textPrimary mr-2"></span>
                      <span className="text-sm text-left">Tampa, FL</span>
                    </div>
                    <div className="w-5 flex">
                      <span className="pi pi-id-card text-lg textPrimary mr-2"></span>
                      <span className="text-sm text-left">21+</span>
                    </div>
                    <div className="w-5 flex">
                      <span className="pi pi-clock text-lg textPrimary mr-2"></span>
                      <span className="text-sm text-left">
                        9:00 PM - 3:00 AM
                      </span>
                    </div>
                    <div className="w-5 flex">
                      <span className="pi pi-ticket text-lg textPrimary mr-2"></span>
                      <span className="text-sm text-left">
                        $55<span> - $65</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              {bgImage()}

              <div className="absolute bottom-0 py-2 px-3 w-full">
                <div className="col-12">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus porro, consequatur voluptas quas tempore qui
                  deserunt fugit voluptatum ea dolorum numquam id officiis
                  obcaecati libero omnis incidunt. Nesciunt, vitae ad?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
