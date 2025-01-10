import { RiUser3Line } from "react-icons/ri";
import { CiGrid41 } from "react-icons/ci";

export const usermenu = [
  {
    id: "1",
    icon: <RiUser3Line />,
    name: "Dashboard",
    path: `/user/dashboard`,
  },
  {
    id: "2",
    icon: <RiUser3Line />,
    name: "My Profile",
    path: `/user/profile`,
  },
  {
    id: "3",
    icon: <CiGrid41 />,
    name: "Apply Vendor",
    path: `/user/apply`,
  },
];
