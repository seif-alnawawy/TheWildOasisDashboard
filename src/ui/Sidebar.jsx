import Logout from "../features/authentication/Logout";
import Logo from "./Logo";
import MainNav from "./MainNav";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 flex bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col items-center gap-4 bg-surface py-8 transition-transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Logo />
        <MainNav onNavClick={onClose} />
        <Logout />
      </aside>
    </>
  );
}
