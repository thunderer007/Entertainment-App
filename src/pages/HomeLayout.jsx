import { Outlet } from "react-router-dom";
import { Navbar } from "../components/index";

const HomeLayout = () => {
  return (
    <div className="md:flex gap-x-8">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
