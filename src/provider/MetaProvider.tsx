import { Helmet } from "react-helmet-async";
import { MetaContext } from "../context/MetaContext";
import { MetaDataCom } from "../components";

interface DataProps {
  event: any;
  artist: any;
}

interface LoadingProviderProps {
  children: React.ReactNode;
  data: DataProps;
}

const { VITE_APITHEEVENT, VITE_TITLE } = import.meta.env;

export const MetaProvider = ({ children, data }: LoadingProviderProps) => {
  const event = data?.event;
  const artist = data?.artist;

  const title = event?.title || artist?.title || VITE_TITLE;
  const description = event?.description || artist?.description || "";
  const urlImage = event?.urlImage || artist?.urlImage;

  const dataMeta = {
    title,
    description,
    urlImage,
    url: event?.url || artist?.url || `${VITE_APITHEEVENT}`,
  };
  return (
    <MetaContext.Provider
      value={{ eventMeta: data.event, artistMeta: data.artist }}
    >
      <MetaDataCom {...dataMeta} />
      {children}
    </MetaContext.Provider>
  );
};
