import React from "react";
import { useParams } from "react-router-dom"; // useParams 임포트

const data = {
  developer: {
    name: "겨레",
    description: "리액트를 공부 중인 개발자",
  },
  baseballTeam: {
    name: "기아 타이거즈",
    description: "2024 한국시리즈 우승의 주인공",
  },
};

// 이제 match 객체 대신 useParams 훅을 사용해 URL 파라미터를 가져와야함!!!!
const Profile = () => {
  const { username } = useParams(); // URL에서 username 가져오기
  const profile = data[username]; // username에 해당하는 프로필 찾기

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
