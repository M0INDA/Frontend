import Home from "@pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@components/start/Login";
import SignUp from "@components/start/SignUp";
import Start from "@pages/Start";
import OpenStudy from "@pages/OpenStudy";
import Mypage from "@pages/Mypage";
import Study from "@pages/Study";
import MyStudy from "@pages/MyStudy";
import GroupHome from "@components/studyRoom/home/GroupHome";
import GroupDiary from "@components/studyRoom/diary/GroupDiary";
import Test from "@pages/Test";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="start" element={<Start />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="mypage" element={<Mypage />} />
        <Route path="openStudy" element={<OpenStudy />} />
        <Route path="Study" element={<Study />} />
        <Route path="myStudy/:studyId" element={<MyStudy />}>
          <Route path="" element={<GroupHome />} />
          <Route path="diary" element={<GroupDiary />} />
        </Route>
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
