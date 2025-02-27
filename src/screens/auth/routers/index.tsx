import { Route, Routes } from "react-router-dom";
import { LoginPages } from "../pages";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPages />} />
    </Routes>
  );
};
