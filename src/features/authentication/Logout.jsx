import { HiArrowRightOnRectangle } from "react-icons/hi2";

import Button from "../../ui/Button";
import { useLogout } from "./useLogout";
import Spinner from "../../ui/Spinner";

export default function Logout() {
  const { isPending, mutate } = useLogout();

  return (
    <Button disabled={isPending} variation="secondary" onClick={mutate}>
      <div className="flex items-center gap-2">
        {isPending ? <Spinner size="small" /> : <HiArrowRightOnRectangle />}
        Logout
      </div>
    </Button>
  );
}
