import { Button } from "antd";
import { Link } from "react-router-dom";

interface AllArtistsProps {
  list: any[];
}

export const AllArtistsComp = ({ list }: AllArtistsProps) => {
  const midIndex = Math.ceil(list.length / 2);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 w-full mx-auto max-w-[80rem] gap-3 px-4 sm:px-6">
      {list?.map((artist, index) => (
        <>
          {index === midIndex && (
            <div
              key="center-item"
              className="col-span-2  flex flex-col items-center justify-center my-4 lg:my-0"
            >
              <p className="text-4xl font-semibold mb-2 text-center uppercase sm:w-60 bebasNeue">
                Artists currently on Tour
              </p>
              <Button className="w-40 rounded-3xl! uppercase btnStyle btnbgPrimary">
                <span className="font-bold text-xs">View All</span>
              </Button>
            </div>
          )}
          <Link
            to={""}
            key={artist.id}
            className={`
                ${index == 0 || index == 7 ? "col-span-2 lg:col-span-1" : ""}
                ${index == 1 || index == 6 ? "lg:col-span-2" : ""}
                ${index == 3 || index == 4 ? "hidden lg:block" : ""} 
                h-40 text-white relative overflow-hidden rounded-md group
              `}
          >
            <div className="w-full h-full relative rounded-md overflow-hidden">
              {/* Imagen con efecto de zoom */}
              <div className="bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#CF0032_100%)] inset-0 z-10 absolute opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div
                className="absolute inset-0 bg-cover bg-center  transition-transform duration-300 ease-in-out scale-100 hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${artist.img})`,
                }}
              ></div>

              <div className="absolute bottom-2 px-3 flex justify-between items-center w-full z-20">
                <div className="text-sm">
                  <p className="uppercase font-bold bebasNeue text-lg/3">
                    {artist.name}
                  </p>
                  <p>{artist.events} Concerts</p>
                </div>

                <div className="bgPrimary h-8 w-8 flex items-center justify-center rounded-full group-hover:bg-white! group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                  <span className="pi pi-arrow-up-right group-hover:text-orange-400"></span>
                </div>
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};
