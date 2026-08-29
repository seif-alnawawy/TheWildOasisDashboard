import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteCabin } from "../../services/apiCabins";

export default function useDeleteCabin() {
  const queyrClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: deleteCabin,

    onSuccess: () => {
      alert("Cabin successfully deleted");
      queyrClient.invalidateQueries({ queryKey: ["cabins"] });
    },

    onError: (err) => alert(err.message),
  });

  return { isPending, mutate };
}
