export default function FileInput({ className = "", ...props }) {
  return (
    <input
      type="file"
      accept="image/*"
      {...props}
      className={`cursor-pointer rounded-sm bg-brand-600 px-4 py-6 font-medium text-white transition-colors duration-200 hover:bg-brand-700 ${className}`}
    />
  );
}
