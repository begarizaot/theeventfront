import { useEffect } from "react";
import { Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import { getPolicy } from "../../../../store/thunks";
import { AppDispatch, RootState } from "../../../../store";

export const PrivacyPolicyPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { policyDate, loading } = useSelector(
    (state: RootState) => state.polity
  );

  useEffect(() => {
    dispatch(getPolicy());
  }, [dispatch]);

  return (
    <div className="pt-16 lg:pt-12 w-full mx-auto max-w-[80rem] min-h-screen z-10 relative pb-10 px-4 sm:px-8">
      {loading && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="col-span-1 h-6">
              <Skeleton.Node
                active
                className="bg-white/20 w-full! rounded-sm h-full!"
              />
            </div>
          ))}
        </div>
      )}
      {!loading && <BlocksRenderer content={policyDate?.privacyPolicy ?? []} />}
    </div>
  );
};
