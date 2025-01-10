import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { usermenu } from "../lib/UserMenu";

const VendorDashboard = () => {
  const userdata = JSON.parse(localStorage.getItem("userData")) || null;

  const userNavActive = ({ isActive }) => {
    return {
      background: isActive ? "#D89307" : null,
      color: isActive ? "#fff" : null,
      shadow: isActive ? "" : null,
      Font: isActive ? "font-bold" : null,
    };
  };

  return (
    <div className="container mx-auto grid grid-cols-1 xl:grid-cols-12 mt-5 gap-5 px-2 md:px-0">
      <div className="profile-menu flex flex-col w-full  xl:col-span-2 py-5 h-80 bg-white shadow-md px-5 rounded-md">
        <div className="profile-container flex flex-col gap-2 justify-center items-center mb-3">
          <div className="profile-image  w-12 h-12 overflow-hidden rounded-full border-2 border-[#D89307]">
            <img src="" alt="" />
          </div>
          <p className="capitalize text-gray-700 text-[1.1rem]">
            {userdata?.companyName}
          </p>
        </div>
        {usermenu?.map((menu) => (
          <NavLink
            style={userNavActive}
            key={menu.id}
            to={`${menu.path}`}
            className="px-2 py-2 flex items-center gap-2 rounded-md  shadow-md mb-2 w-full"
          >
            <span>{menu.icon}</span>
            {menu.name}
          </NavLink>
        ))}
        <span
          // onClick={handleLogout}
          className=" text-center mt-2 px-2 py-2 bg-slate-900 text-white rounded-md cursor-pointer hover:bg-slate-700 duration-300  "
        >
          Log Out
        </span>
      </div>
      <div className="profile-details xl:col-span-10 rounded-md bg-white shadow-md">
        <Outlet />
      </div>
    </div>
  );
};

export default VendorDashboard;
