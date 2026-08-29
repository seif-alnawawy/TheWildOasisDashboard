export default function Input({
  id,
  type,
  placeholder,
  value,
  defaultValue,
  onChange,
  ...props
}) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      {...props}
      className="rounded-sm border border-border bg-surface p-4 text-text-primary shadow-sm placeholder:text-text-muted focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
    />
  );
}
