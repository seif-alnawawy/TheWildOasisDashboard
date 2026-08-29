export default function Button({
  children,
  size = "medium",
  variation = "primary",
  type,
  onClick,
  disabled,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${sizes[size]} ${variations[variation]} cursor-pointer rounded-lg shadow-sm transition-colors duration-200 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
const sizes = {
  small: "px-3 py-1.5 text-sm font-semibold uppercase text-center",
  medium: "px-4 py-3 text-base font-medium",
  large: "px-6 py-3 text-lg font-medium",
};

const variations = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",

  secondary:
    "border border-border bg-surface text-text-secondary hover:bg-surface-hover",

  danger: "bg-danger text-white hover:opacity-90",
};
