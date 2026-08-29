import {
  HiOutlineCalendarDateRange,
  HiOutlineCog6Tooth,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi";

import CustomNavLink from "./CustomNavLink";

const navigation = [
  {
    link: "/dashboard",
    icon: <HiOutlineHome />,
    title: "Home",
  },
  {
    link: "/bookings",
    icon: <HiOutlineCalendarDateRange />,
    title: "Bookings",
  },
  {
    link: "/cabins",
    icon: <HiOutlineHomeModern />,
    title: "Cabins",
  },
  {
    link: "/users",
    icon: <HiOutlineUsers />,
    title: "Users",
  },
  {
    link: "/settings",
    icon: <HiOutlineCog6Tooth />,
    title: "Settings",
  },
];

export default function MainNav({ onNavClick }) {
  return (
    <nav className="w-full">
      <ul className="flex w-full flex-col border-b border-border-muted py-4 text-xl">
        {navigation.map((nav) => (
          <CustomNavLink key={nav.title} to={nav.link} onClick={onNavClick}>
            {nav.icon}
            <span>{nav.title}</span>
          </CustomNavLink>
        ))}
      </ul>
    </nav>
  );
}
