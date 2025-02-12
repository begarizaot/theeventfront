import { Link } from "react-router-dom";

export const TermAndPrivacy = () => {
  return (
    <p className="text-sm/4 my-1">
      By completing the checkout process, you acknowledge that you have read and
      agree to The Event Jet’s
      <Link
        to="/terms_and_condition"
        target="_blank"
        className="text-white! mx-1 border-b-2"
      >
        Terms of Service
      </Link>
      and
      <Link
        to="/privacy_policy"
        target="_blank"
        className="text-white! ml-1 border-b-2"
      >
        Privacy Policy.
      </Link>
    </p>
  );
};
