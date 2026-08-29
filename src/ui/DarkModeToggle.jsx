import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useDarkMode } from "../hooks/useDarkMode";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      onClick={() => toggleDarkMode()}
      className="cursor-pointer size-8 text-brand-800 hover:scale-110 transition-all duration-100 rounded-full flex items-center justify-center"
    >
      {isDarkMode ? (
        <MdDarkMode className="size-full" />
      ) : (
        <MdOutlineDarkMode className="size-full" />
      )}
    </button>
  );
}
