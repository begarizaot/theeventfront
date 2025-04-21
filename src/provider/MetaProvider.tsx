import { MetaContext } from "../context/MetaContext";

interface DataProps {
  event: any;
  artist: any;
}

interface LoadingProviderProps {
  children: React.ReactNode;
  data: DataProps;
}

export const MetaProvider = ({ children, data }: LoadingProviderProps) => {
  return (
    <MetaContext.Provider
      value={{ eventMeta: data.event, artistMeta: data.artist }}
    >
      {children}
    </MetaContext.Provider>
  );
};
