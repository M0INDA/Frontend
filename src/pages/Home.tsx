import Layout from "@components/layout/Layout";
import CategoryBtn from "@components/main/CategoryBtn";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <CategoryBtn />
    </Layout>
  );
};

export default Home;
