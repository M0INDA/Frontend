import Home from "@pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@components/start/Login";
import SignUp from "@components/start/SignUp";
import Timer from "@pages/Timer";
import Start from "@pages/Start";
import OpenStudy from "@pages/OpenStudy";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/timer" element={<Timer />} />
        <Route path="openStudy" element={<OpenStudy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
