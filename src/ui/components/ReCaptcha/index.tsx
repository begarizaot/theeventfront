import ReCAPTCHA from "react-google-recaptcha";

interface ReCaptchaProps {
  onChange: (value: string | null) => void;
  className?: string;
}

export const ReCaptchaComp = ({ onChange ,className}: ReCaptchaProps) => {
  const onCaptchaChange = (value: string | null) => {
    onChange(value);
  };

  return (
    <ReCAPTCHA
      sitekey={import.meta.env.VITE_CAPTCHAKEY || ""}
      onChange={onCaptchaChange}
      className={`w-full ${className}`}
    />
  );
};
