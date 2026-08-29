import { NavLink } from "react-router-dom";

export default function CustomNavLink({ to, children, onClick }) {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) => {
          return `flex gap-2.5 items-center rounded-md px-3 py-3 font-medium ${
            isActive
              ? "bg-gray-200 text-gray-800"
              : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
          }`;
        }}
      >
        {children}
      </NavLink>
    </li>
  );
}
