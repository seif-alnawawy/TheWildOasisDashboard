import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

export default function CabinTableOperations() {
  const discountOptions = [
    { name: "All", value: "all" },
    { name: "No discount", value: "no-discount" },
    { name: "With discount", value: "with-discount" },
  ];
  const sortOptions = [
    { name: "Sort by name (A-Z)", value: "name-asc" },
    { name: "Sort by name (Z-A)", value: "name-desc" },
    { name: "Sort by price (low first)", value: "regularPrice-asc" },
    { name: "Sort by price (high first)", value: "regularPrice-desc" },
    { name: "Sort by max capacity (low first)", value: "maxCapacity-asc" },
    { name: "Sort by max capacity (high first)", value: "maxCapacity-desc" },
    { name: "Sort by discount (low first)", value: "discount-asc" },
    { name: "Sort by discount (high first)", value: "discount-desc" },
  ];

  return (
    <div className="flex justify-end flex-wrap items-center gap-4">
      <Filter filterField={"discount"} options={discountOptions} />
      <SortBy options={sortOptions} />
    </div>
  );
}
