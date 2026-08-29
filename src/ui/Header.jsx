import { IoMenu } from "react-icons/io5";
import UserAvatar from "../features/authentication/UserAvatar";
import DarkModeToggle from "./DarkModeToggle";

export default function Header({ onMenuClick }) {
  return (
    <header className="w-full h-16 p-4 flex justify-between items-center lg:justify-end px-4 border bg-surface border-gray-100">
      <button
        className="cursor-pointer text-xl font-bold lg:hidden"
        onClick={onMenuClick}
      >
        <IoMenu />
      </button>

      <div className="flex gap-4 items-center">
        <DarkModeToggle />
        <UserAvatar />
      </div>
    </header>
  );
}
