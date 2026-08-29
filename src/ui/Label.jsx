export default function Label({ children, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex flex-col gap-2 text-sm font-semibold text-text-primary"
    >
      {children}
    </label>
  );
}
