import Layout from "@components/layout/Layout";
import SideNav from "@components/studyRoom/SideNav";
import { Outlet } from "react-router-dom";
const MyStudy = () => {
  return (
    <Layout hasBgColor={true}>
      <div className="grid grid-cols-[1fr_2fr_8fr_1fr] gap-[2.6rem] py-[5rem]">
        <SideNav />
        <div className="flex min-w-[59.3rem] flex-col space-y-[2.6rem]">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default MyStudy;
