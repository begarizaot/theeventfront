import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

export const useFooter = () => {
  const { globalDate, loading } = useSelector(
    (state: RootState) => state.global
  );

  return { ...globalDate, loading };
};
