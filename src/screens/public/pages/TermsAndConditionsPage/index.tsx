import { useEffect, useState } from "react";
import { getLocalStorage } from "../../../../hooks";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const TermsAndConditionsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fechPolicyData();
  }, []);

  const fechPolicyData = async () => {
    const res = await getLocalStorage("policy");
    setData(res?.termsAndConditions ?? []);
  };

  return (
    <div className="pt-16 lg:pt-12 w-full mx-auto max-w-[80rem] min-h-screen z-10 relative pb-10 px-4 sm:px-8">
      <BlocksRenderer content={data} />
    </div>
  );
};
