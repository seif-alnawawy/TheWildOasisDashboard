import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateCabin } from "../../services/apiCabins";

export default function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateCabin,

    onSuccess: () => {
      alert("Cabin updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    onError: (err) => {
      alert(err.message);
    },
  });

  return { mutate, isPending };
}
