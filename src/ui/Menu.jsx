import { createContext, useContext, useEffect, useRef, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";

const MenuContext = createContext();

export default function Menu({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((open) => !open);
  const close = () => setIsOpen(false);

  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        close();
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <MenuContext.Provider value={{ isOpen, toggle, close }}>
      <div className="relative" ref={menuRef}>
        {children}
      </div>
    </MenuContext.Provider>
  );
}
Menu.Toggle = function MenuToggle() {
  const { toggle } = useContext(MenuContext);

  return (
    <button
      onClick={toggle}
      className="cursor-pointer rounded-md p-2 text-text-muted transition-colors hover:bg-surface-hover hover:text-text-primary"
    >
      <HiEllipsisVertical className="size-6" />
    </button>
  );
};

Menu.List = function MenuList({ children }) {
  const { isOpen } = useContext(MenuContext);

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 bottom-full min-w-40 rounded-md border border-border bg-surface shadow-lg">
      {children}
    </div>
  );
};

Menu.Button = function MenuButton({ children, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full cursor-pointer items-center gap-3 px-4 py-2 text-sm text-text-secondary transition-colors hover:bg-surface-hover hover:text-text-primary"
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};
