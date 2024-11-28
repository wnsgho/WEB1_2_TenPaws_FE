// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MyWalkingCourse from "./pages/MyWalkingCourse";
import MyInfo from "./pages/MyInfo";
import MatchingPage from "./pages/matching/MatchingPage";
import DetailPage from "./pages/matching/DetailPage";
import DetailReadPage from "./pages/matching/DetailReadPage";
import PreferPage from "./pages/matching/PreferPage";
import DetailCorrect from "./pages/matching/DetailCorrect";
import MyPageUser from "./pages/my/MyPageUser";
import Announcement from "./pages/guide/Announcement";
import Announcementpost from "./pages/guide/Announcementpost";
import Announcementpostcreate from "./pages/guide/Announcementpostcreate";
import QAndA from "./pages/guide/QAndA";
import QAandApost from "./pages/guide/QAandApost";
import QAandApostcreate from "./pages/guide/QAandApostcreate";
import Facilities from "./pages/guide/Facilities";
import WalkingCourse from "./pages/guide/WalkingCourse";
import Worldcup from "./pages/worldcup/worldcup";

function App() {
  return (
    <Router>
      <Routes>
        {/* 안내 페이지*/}
        <Route path="/guide" element={<Announcement />} />
        {/* 공지사항 페이지*/}
        <Route path="/guide/announcement" element={<Announcement />} />
        {/* 공지사항 포스트 페이지*/}
        <Route path="/guide/announcement/postId" element={<Announcementpost />} />
        {/* 공지사항 작성 페이지*/}
        <Route path="/guide/announcement/create" element={<Announcementpostcreate />} />
        {/* 질의응답 페이지 */}
        <Route path="/guide/qna" element={<QAndA />} />
        {/* 질의응답 포스트 페이지 */}
        <Route path="/guide/qna/postId" element={<QAandApost />} />
        {/* 질의응답 작성 페이지 */}
        <Route path="/guide/qna/create" element={<QAandApostcreate />} />
        {/* 반려동물 관련 시설 페이지 */}
        <Route path="/guide/facilities" element={<Facilities />} />
        {/* 산책 코스 페이지 */}
        <Route path="/guide/walking-course" element={<WalkingCourse />} />
        {/* 이상형 월드컵 페이지 */}
        <Route path="/worldcup" element={<Worldcup />} />
        
        <Route path="/my-walking-course" element={<MyWalkingCourse />} /> {/* 나의 산책 코스 페이지 */}
        <Route path="/my-info" element={<MyInfo />} /> {/* 내정보 페이지 */}
        <Route path="/prefer" element={<PreferPage />} /> {/* 선호동물 입력 및 수정 페이지 */}
        <Route path="/matching" element={<MatchingPage />} /> {/* 반려동물 매칭 페이지 */}
        <Route path="/detailadd" element={<DetailPage />} /> {/* 반려동물 상세정보 작성 페이지 (보호소) */}
        <Route path="/detail" element={<DetailReadPage />} /> {/* 반려동물 상세정보 페이지 */}
        <Route path="/detail-correct" element={<DetailCorrect />} /> {/* 반려동물 상세정보 수정 페이지 (보호소) */}
        <Route path="/mypage-user" element={<MyPageUser />} /> {/* 마이페이지 (유저) */}
        <Route path="/myinfo" element={<MyInfo />} /> {/* 내정보 페이지 */}
      </Routes>
    </Router>
  );
}

export default App;
