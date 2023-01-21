import Home from "@pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@components/start/Login";
import SignUp from "@components/start/SignUp";
import Test from "@pages/Test";
import Start from "@pages/Start";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
