import Layout from "@components/layout/Layout";
import Profile from "@components/profile/Profile";

const Mypage = () => {
  return (
    <div className="bg-[#F5F4F3]">
      <Layout>
        <div className="mt-[5rem]">
          <Profile />
        </div>
      </Layout>
    </div>
  );
};

export default Mypage;
