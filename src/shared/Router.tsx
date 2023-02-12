import Home from "@pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@components/start/Login";
import SignUp from "@components/start/SignUp";
import Start from "@pages/Start";
import OpenStudy from "@pages/OpenStudy";
import Mypage from "@pages/Mypage";
import Study from "@pages/Study";
import MyStudy from "@pages/StudyRoom";
import GroupHome from "@components/studyRoom/home/GroupHome";
import GroupDiary from "@components/studyRoom/diary/GroupDiary";
import KakaoLogin from "@components/start/KakaoLogin";
import DetailStudy from "@pages/DetailStudy";
import EditStudy from "@pages/EditStudy";

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
        <Route path="detailStudy" element={<DetailStudy />} />
        <Route path="editStudy" element={<EditStudy />} />
        <Route path="Study" element={<Study />} />
        <Route path="oauth/callback/kakao" element={<KakaoLogin />} />
        <Route path="myStudy/:studyId" element={<MyStudy />}>
          <Route path="" element={<GroupHome />} />
          <Route path="diary" element={<GroupDiary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
