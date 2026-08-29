export default function FilterButton({ children, active, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-brand-600 text-white shadow-sm"
          : "text-gray-600 hover:bg-surface hover:text-gray-900"
      }`}
    >
      {children}
    </button>
  );
}
