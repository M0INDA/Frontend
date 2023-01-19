import Layout from "@components/layout/Layout";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <span>Home</span>
    </Layout>
  );
};

export default Home;
