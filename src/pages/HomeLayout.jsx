import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../components/index";

const HomeLayout = () => {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";
  return (
    // className="md:flex gap-x-8"
    <div className="md:grid md:grid-cols-12">
      <Navbar />
      {loading ? (
        <span className="loading loading-infinity loading-xl text-secondary"></span>
      ) : (
        <div className="col-span-11">
          <Outlet />
        </div>
      )}
      {/* <Outlet /> */}
    </div>
  );
};

export default HomeLayout;
