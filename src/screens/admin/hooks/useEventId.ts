import { useEffect, useState } from "react";
import { SplitText } from "../../../helpers";
import { useParams } from "react-router-dom";

export const useEventId = () => {
  const res = useParams();
  const [eventId, setEventId] = useState<any>("");

  useEffect(() => {
    setEventId(SplitText(res["*"], "/"));
  }, []);

  return { eventId };
};
