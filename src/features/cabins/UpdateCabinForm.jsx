import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import Spinner from "../../ui/Spinner";
import FormRow from "../../ui/FormRow";
import useUpdateCabin from "./useUpdateCabin";

export default function UpdateCabinForm({ cabin, onCancel }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: cabin,
  });

  const { mutate, isPending } = useUpdateCabin();

  const onSubmit = (data) => {
    mutate({ id: cabin.id, newCabin: data }, { onSuccess: () => onCancel() });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
      <div className="space-y-6">
        <FormRow
          validationMsg={errors.name?.message}
          {...register("name", { required: "Name is required" })}
        >
          Name
        </FormRow>

        <FormRow
          validationMsg={errors.maxCapacity?.message}
          {...register("maxCapacity", {
            required: "Max Capacity is required",
          })}
        >
          Maximum capacity
        </FormRow>

        <FormRow
          validationMsg={errors.regularPrice?.message}
          {...register("regularPrice", {
            required: "Regular price is required",
          })}
        >
          Regular price
        </FormRow>

        <FormRow inputType="number" defaultValue={0} {...register("discount")}>
          Discount
        </FormRow>

        <Textarea {...register("description")}>
          Description for website
        </Textarea>
      </div>

      {/* Actions */}
      <div className="flex flex-col-reverse gap-3 border-t border-border-muted bg-surface-muted px-6 py-5 sm:flex-row sm:justify-end sm:px-8">
        <Button variation="secondary" type="reset" onClick={onCancel}>
          Cancel
        </Button>

        {isPending ? (
          <Spinner />
        ) : (
          <Button type="submit" disabled={isPending}>
            Save
          </Button>
        )}
      </div>
    </form>
  );
}
