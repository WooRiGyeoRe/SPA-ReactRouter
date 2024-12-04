import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom"; // 훅 임포트
const WithRouterSample = () => {
  const location = useLocation(); // location 훅
  const navigate = useNavigate(); // navigate 훅
  const params = useParams(); // URL params

  return (
    <div>
      <h4>Location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>Params (Match)</h4>
      <textarea
        value={JSON.stringify(params, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button onClick={() => navigate("/")}>홈으로</button>
    </div>
  );
};

export default WithRouterSample;
