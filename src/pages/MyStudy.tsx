import Layout from "@components/layout/Layout";
import SideNav from "@components/studyRoom/SideNav";
import { Outlet } from "react-router-dom";
const MyStudy = () => {
  return (
    <Layout hasBgColor={true} isFullHeight>
      <div className="grid flex-1 grid-cols-[1fr_2fr_8fr_1fr] gap-[2.6rem] py-[5rem]">
        <SideNav />
        <Outlet />
      </div>
    </Layout>
  );
};

export default MyStudy;
