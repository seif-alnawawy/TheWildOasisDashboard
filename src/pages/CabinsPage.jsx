import { lazy } from "react";

import Heading from "../ui/Heading";
import CabinsTable from "../features/cabins/CabinsTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
const CreateCabin = lazy(() => import("../features/cabins/CreateCabin"));

function CabinsPage() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex justify-between items-center mb-8">
        <Heading>All cabins</Heading>
        <CabinTableOperations />
      </div>
      <div className="justify-between gap-8 items-center flex-col flex">
        <CabinsTable />
        <CreateCabin />
      </div>
    </div>
  );
}

export default CabinsPage;
