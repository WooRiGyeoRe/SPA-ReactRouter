import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UseNavigate_sample = () => {
  const navigate = useNavigate();
  const [isBlocking, setIsBlocking] = useState(true); // 페이지 떠날 때 차단 여부

  // 뒤로 가기
  const handleGoBack = () => {
    if (isBlocking && !window.confirm("정말 떠나실 건가요?")) {
      return; // 사용자가 취소하면 이동하지 않음
    }
    navigate(-1);
  };

  // 홈으로 이동
  const handleGoHome = () => {
    if (isBlocking && !window.confirm("정말 떠나실 건가요?")) {
      return; // 사용자가 취소하면 이동하지 않음
    }
    navigate("/");
  };

  // 페이지 떠날 때 이탈 방지
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isBlocking) {
        // 페이지를 떠나려고 할 때 confirm 창을 띄웁니다.
        const confirmation = window.confirm("정말 떠나실 건가요?");
        if (!confirmation) {
          event.preventDefault(); // 취소하면 페이지 이동을 막음
        }
      }
    };

    // 페이지를 떠날 때 알림을 표시하기 위한 이벤트 리스너 추가
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isBlocking]);

  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
};

export default UseNavigate_sample;
