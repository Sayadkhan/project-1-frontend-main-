import Navbar from "./../components/Navbar";
import VendorDashboard from "../pages/VendorDashboard";

const VendorLayout = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <VendorDashboard />
      </div>
    </>
  );
};

export default VendorLayout;
