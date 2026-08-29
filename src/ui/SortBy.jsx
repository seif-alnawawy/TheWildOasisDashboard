import Select from "./Select";
import useQueryParams from "../hooks/useQueryParams";

export default function SortBy({ options }) {
  const { getParam, setParam } = useQueryParams();
  const sortBy = getParam("sortBy") || "name-asc";

  return (
    <Select
      value={sortBy}
      options={options}
      type={"white"}
      onChange={(e) => setParam("sortBy", e.target.value)}
    />
  );
}
