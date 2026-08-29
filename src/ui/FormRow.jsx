export default function FormRow({
  children,
  inputType,
  placeholder,
  defaultValue,
  validationMsg,
  ...props
}) {
  return (
    <label className="text-sm font-semibold text-text-primary grid gap-2 sm:grid-cols-[12rem_1fr] sm:items-center sm:gap-6">
      {children}
      {inputType === "file" ? (
        <input
          type="file"
          accept="image/*"
          {...props}
          className="font-medium px-4 py-6 text-brand-50 rounded-sm bg-brand-600 cursor-pointer transition-colors duration-200 hover:bg-brand-700"
        />
      ) : (
        <input
          type={inputType}
          placeholder={placeholder}
          defaultValue={defaultValue}
          {...props}
          className="rounded-sm border border-border bg-surface p-4 text-text-primary shadow-sm placeholder:text-text-muted focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
        />
      )}
      {validationMsg && <p className="text-red-500">{validationMsg}</p>}
    </label>
  );
}
