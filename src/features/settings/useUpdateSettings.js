import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";

export default function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: updateSetting,

    onSuccess: () => {
      alert("Settings updated successfull");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },

    onError: (error) => {
      alert(error.message);
    },
  });

  return { isPending, mutate };
}
