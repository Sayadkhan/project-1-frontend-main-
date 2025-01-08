import { Outlet } from "react-router-dom";
import Navbar from "./../components/Navbar";

const VendorLayout = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default VendorLayout;
