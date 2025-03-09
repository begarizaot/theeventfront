import { Link } from "react-router-dom";

interface LogoNavComProps {
  classLogo?: string;
}

export const LogoNavCom = ({ classLogo }: LogoNavComProps) => {
  const logoDark =
    "https://s3-alpha-sig.figma.com/img/4c1e/d3ea/56782d5753e248d08c11b7bbf791d930?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qZJ9zMtMfYyeL426C8phzBMuGMDayZMmr3v155mh4AOfGQSc21o70AQEaoUfyiPItT022e3MqXji8iG63k4fpbQWYSJpMavCkxZJ2C~8TFQsEiaNzz4yPtxNLcjkOxKJyK1i~JEtbNCTxKyIOoQf-u2vZ8iX5izhpmRKD4Z8tyvYRvbLADEvE8ksiL6CL1Eu69dnQOFGD~E-U8e-7jEaHafpB~3qpzIxVZqiBx1Ow36ZpAMaT864hEskddbXEFXD1ftm6-1CQaJ97kz3RtjT2joQhVWOstZTYeo5KY4i10h9~RZotbNfpl0PXjDo5hsO-LrUv~KidSYxbohTBkPxpw__";

  return (
    <>
      <Link to="/" className="flex items-center">
        <img src={logoDark} alt="logo" className={`${classLogo}`} />
      </Link>
    </>
  );
};
