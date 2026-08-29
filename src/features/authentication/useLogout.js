import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: logout,

    onSuccess: () => {
      queryClient.removeQueries(["user"]);
      navigate("/", { replace: true });
    },

    onError: (err) => {
      alert(err.message);
    },
  });

  return { mutate, isPending };
}
