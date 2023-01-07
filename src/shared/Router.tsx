import Home from "@pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@pages/Login";
import SignUp from "@components/signUp/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
