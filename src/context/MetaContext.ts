import { createContext } from "react";

interface MetaContextProps {
  eventMeta: any;
  artistMeta: any;
}

export const MetaContext = createContext<MetaContextProps>({
  eventMeta: {},
  artistMeta: {},
});
