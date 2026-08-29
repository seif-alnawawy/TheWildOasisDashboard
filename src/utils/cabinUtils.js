export function filterCabins(cabins, filter) {
  if (filter === "no-discount") {
    return cabins.filter((cabin) => cabin.discount === 0);
  } else if (filter === "with-discount") {
    return cabins.filter((cabin) => cabin.discount > 0);
  } else {
    return cabins;
  }
}

export function sortCabins(cabins, sortBy) {
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "desc" ? -1 : 1;

  return cabins.toSorted((a, b) => {
    if (typeof a[field] === "string") {
      return a[field].localeCompare(b[field]) * modifier;
    }

    return (a[field] - b[field]) * modifier;
  });
}
