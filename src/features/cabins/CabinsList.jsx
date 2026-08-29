import CabinRow from "./CabinRow";

export default function CabinsList({ cabins }) {
  return cabins.map((cabin) => <CabinRow key={cabin.id} cabin={cabin} />);
}
