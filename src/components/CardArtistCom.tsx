import { Link } from "react-router-dom";
import { setLocalStorage } from "../hooks";

interface ArtistProps {
  artist: any;
  className?: string;
}

export const CardArtistCom = ({ artist, className }: ArtistProps) => {
  const onSaveArtist = (artist: any) => {
    setLocalStorage("artist", artist);
  };

  return (
    <Link
      to={`/artist/${artist.id_artist}`}
      key={artist.id_artist}
      className={`${
        className ?? ""
      } h-40 text-white relative overflow-hidden rounded-md group`}
      onClick={() => onSaveArtist(artist)}
    >
      <div className="w-full h-full relative rounded-md overflow-hidden">
        {/* Imagen con efecto de zoom */}
        <div className="bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#CF0032_100%)] inset-0 z-10 absolute opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div
          className="absolute inset-0 bg-cover bg-top transition-transform duration-300 ease-in-out scale-100 hover:scale-110"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${
              artist?.url_image ?? ""
            })`,
          }}
        ></div>

        <div className="absolute bottom-2 px-3 flex justify-between items-center w-full z-20">
          <div className="text-sm">
            <p className="uppercase font-bold bebasNeue text-lg/3">
              {artist.name}
            </p>
            <p>{(artist?.events_ids ?? []).length ?? 0} Concerts</p>
          </div>

          <div className="bgPrimary h-8 w-8 flex items-center justify-center rounded-full group-hover:bg-white! group-hover:rotate-45 transition-transform duration-300 ease-in-out">
            <span className="pi pi-arrow-up-right group-hover:text-orange-400"></span>
          </div>
        </div>
      </div>
    </Link>
  );
};
