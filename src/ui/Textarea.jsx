export default function Textarea({ children, ...props }) {
  return (
    <label className="text-sm font-semibold text-gray-700 grid gap-2 sm:grid-cols-[12rem_1fr] sm:items-center sm:gap-6">
      {children}
      <textarea
        {...props}
        className="px-6 py-8 border border-gray-300 rounded-2xl bg-surface shadow-sm w-full h-32"
      ></textarea>
    </label>
  );
}
