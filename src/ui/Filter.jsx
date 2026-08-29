import FilterButton from "./FilterButton";
import useQueryParams from "../hooks/useQueryParams";
export default function Filter({ filterField, options }) {
  const { getParam, setParam } = useQueryParams();

  const activeFilter = getParam(filterField) || options[0].value;

  return (
    <div className="flex w-fit items-center gap-1 rounded-lg border border-border bg-surface-muted p-1 shadow-sm">
      {options.map((option) => (
        <FilterButton
          key={option.value}
          active={activeFilter === option.value}
          disabled={activeFilter === option.value}
          onClick={() => setParam(filterField, option.value)}
        >
          {option.name}
        </FilterButton>
      ))}
    </div>
  );
}
