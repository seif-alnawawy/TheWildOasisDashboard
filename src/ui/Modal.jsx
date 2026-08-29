import { createContext, useContext } from "react";
import { HiXMark } from "react-icons/hi2";

const ModalContext = createContext();

export default function Modal({ children, title, onClose }) {
  return (
    <ModalContext.Provider value={{ title, onClose }}>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 flex items-center justify-center p-4 backdrop-blur-sm"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="max-h-[90vh] z-50 shadow-md w-full max-w-3xl overflow-y-auto gap-8 flex flex-col rounded-lg bg-surface px-8 py-10 "
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
}

Modal.Header = function ModalHeader() {
  const { title, onClose } = useContext(ModalContext);

  return (
    <div className="flex items-start justify-between">
      <div></div>

      <h2 className="text-lg font-semibold text-text-primary">{title}</h2>

      <button
        onClick={onClose}
        className="cursor-pointer translate-x-4 rounded-sm text-text-secondary transition-colors duration-200 hover:bg-surface-hover hover:text-text-primary"
      >
        <HiXMark />
      </button>
    </div>
  );
};
