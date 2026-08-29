import { useMutation } from "@tanstack/react-query";
import { signUpWithEmail } from "../../services/apiAuth";

export function useSignUp() {
  const { isPending, mutate: signUp } = useMutation({
    mutationFn: signUpWithEmail,

    onSuccess: (user) => {
      alert(`new user with email "${user.user.email}" is created successfully`);
    },

    onError: (error) => {
      alert(error.message);
    },
  });

  return { isPending, signUp };
}
