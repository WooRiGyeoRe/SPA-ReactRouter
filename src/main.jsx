import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter 추가
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* BrowserRouter 컴포넌트로 감싸주기  */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
