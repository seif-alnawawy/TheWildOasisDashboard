import { lazy } from "react";

import Menu from "../../ui/Menu.jsx";
import { formatCurrency } from "../../utils/helpers";
import DeleteCabin from "./DeleteCabin.jsx";
const UpdateCabin = lazy(() => import("./UpdateCabin.jsx"));

export default function CabinRow({ cabin }) {
  return (
    <tr className="h-28 transition-colors hover:bg-surface-hover">
      {/* Image */}
      <td className="h-28">
        {cabin.image && (
          <img
            src={cabin.image}
            alt={cabin.name}
            className="h-full rounded-r-lg object-cover"
          />
        )}
      </td>

      {/* Cabin */}
      <td className="px-6 py-4">
        <span className="text-base font-semibold text-text-primary">
          {cabin.name}
        </span>
      </td>

      {/* Capacity */}
      <td className="px-6 py-4 text-sm text-text-secondary">
        Fits up to{" "}
        <span className="font-medium text-text-primary">
          {cabin.maxCapacity}
        </span>{" "}
        guests
      </td>

      {/* Price */}
      <td className="px-6 py-4 text-sm font-semibold text-text-primary">
        {formatCurrency(cabin.regularPrice)}
      </td>

      {/* Discount */}
      <td className="px-6 py-4">
        {cabin.discount > 0 ? (
          <span className="rounded-full bg-success-bg px-3 py-1 text-xs font-semibold text-success">
            {cabin.discount}%
          </span>
        ) : (
          <span className="text-sm text-text-muted">No discount</span>
        )}
      </td>

      {/* Actions */}
      <td>
        <Menu>
          <Menu.Toggle />

          <Menu.List>
            <UpdateCabin cabin={cabin} />
            <DeleteCabin cabinId={cabin.id} cabinName={cabin.name} />
          </Menu.List>
        </Menu>
      </td>
    </tr>
  );
}
