export default function Select({ options, onChange, value }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="cursor-pointer rounded-sm border border-border bg-surface p-2 text-sm font-medium text-text-primary shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="cursor-pointer bg-surface text-text-primary"
        >
          {option.name}
        </option>
      ))}
    </select>
  );
}
