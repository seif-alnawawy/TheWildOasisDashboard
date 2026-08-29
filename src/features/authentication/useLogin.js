import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginWithEmail } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: login } = useMutation({
    mutationFn: loginWithEmail,

    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/", { replace: true });
    },

    onError: (error) => {
      alert(error.message);
    },
  });

  return { isPending, login };
}
