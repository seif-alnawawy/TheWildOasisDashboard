import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import CabinsList from "./CabinsList";
import useCabins from "./useCabins";
import { filterCabins, sortCabins } from "../../utils/cabinUtils";

export default function CabinsTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  // Filter & Sort
  const filter = searchParams.get("discount") || "all";
  const sortBy = searchParams.get("sortBy") || "name-asc";

  const filteredCabins = filterCabins(cabins, filter);
  const sortedCabins = sortCabins(filteredCabins, sortBy);

  return (
    <div className="w-full rounded-xl border border-border bg-surface shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-200">
          <thead>
            <tr className="border-b border-border bg-surface-muted text-left">
              <th className="w-28 px-6 py-4"></th>
              <HeaderTitle text="Cabin" />
              <HeaderTitle text="Capacity" />
              <HeaderTitle text="Price" />
              <HeaderTitle text="Discount" />
              <th className="w-16 px-6 py-4"></th>
            </tr>
          </thead>

          <tbody className="divide-y-2 divide-border-muted">
            <CabinsList cabins={sortedCabins} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function HeaderTitle({ text }) {
  return (
    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
      {text}
    </th>
  );
}
