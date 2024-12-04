import React from "react";
import { Routes, Route, Link } from "react-router-dom"; // Link 사용 임포트
import "./App.css";
import About from "./About";
import Info from "./Info";
import Home from "./Home";
import Profile from "./Profile";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/developer">developer 프로필</Link>
        </li>
        <li>
          <Link to="/profile/baseballTeam">baseballTeam 프로필</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
        {/* <Route path={["/about", "/info"]} element={<About />} /> */}
        {/* 이제는 또 배열 안된다네... */}
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
