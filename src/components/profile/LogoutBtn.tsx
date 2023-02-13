import { removeCookieToken } from "@apis/cookie";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    removeCookieToken();
    navigate("/");
  }, [navigate]);

  return (
    <button
      className="Sub2 h-[6.8rem] w-[44.6rem] rounded-[1rem] bg-white text-primary-500 underline"
      onClick={handleLogout}
    >
      로그아웃
    </button>
  );
};

export default LogoutBtn;
