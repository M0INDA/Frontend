import Button from "@elements/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        text="회원가입"
        onClick={() => {
          navigate("/signup");
        }}
      />
    </>
  );
};

export default Home;
