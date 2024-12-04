import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/developer">developer</Link>
        </li>
        <li>
          <Link to="/profiles/baseballTeam">baseballTeam</Link>
        </li>
      </ul>

      {/* 프로필 서브 라우트 추가 */}
      <Routes>
        <Route path="/" element={<div>사용자를 선택해 주세요.</div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
