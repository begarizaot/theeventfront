import { Link } from "react-router-dom";

interface LogoNavComProps {
  classLogo?: string;
}

export const LogoNavCom = ({ classLogo }: LogoNavComProps) => {
  const logoDark =
    "https://s3-alpha-sig.figma.com/img/4c1e/d3ea/56782d5753e248d08c11b7bbf791d930?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AJh9I46KYWNVOVodpPPY6Kqv6n9HKoWcSVgw~hVJ0xF5Z5fX3AJIXMVRH9Z6xTWs7VwCDpKvfSpxjTHtSafU2H1ePYYhJyUoIeT9Fz58~DGJ4HookEAiUq1RYY0-jBtJtBQCifo6WVr01c9QGhwOH4VNQhAYzpg8vwFUXnI4c~nkIoDjcgX2uIDt5~fHDxNDLexMMNTveKlOCVbMmsyikiA6XEI81fqv9smFRS0wKhma-BZmLytSMpH5jGm2qubLzDFLWZNP9KvZ7kIRD-oC-v-fol2YwEzYMuRQdhCHwRQJfv85X9QgO0SVwIjXfhWVUFs1ich5F4o6gaBqtziIQg__";

  return (
    <>
      <Link to="/" className="flex items-center">
        <img src={logoDark} alt="logo" className={`${classLogo}`} />
      </Link>
    </>
  );
};
