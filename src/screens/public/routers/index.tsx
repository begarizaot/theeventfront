import { Route, Routes } from "react-router-dom";

import { HeaderComp } from "../components";
import { HomePage } from "../pages";

export const PubliRouter = () => {
  return (
    <>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};
