import { Route, Routes } from "react-router-dom";
import { FooterComp, HeaderComp } from "../ui/components";
import { HomePage } from "../pages";

export const ScreenPublicRouter = () => {
  return (
    <>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <FooterComp />
    </>
  );
};
