import { useDarkMode } from "../hooks/useDarkMode";

function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode
    ? "/src/data/img/logo-dark.png"
    : "/src/data/img/logo-light.png";
  return (
    <div className="text-center">
      <img src={src} alt="Logo" className="h-24 w-auto" />
    </div>
  );
}

export default Logo;
