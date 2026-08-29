import { useForm } from "react-hook-form";

import useCreateCabin from "./useCreateCabin";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import Spinner from "../../ui/Spinner";
import FormRow from "../../ui/FormRow";

export default function CreateCabinForm({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { isPending, mutate } = useCreateCabin();

  const onSubmit = (data) => {
    mutate(
      { ...data, image: data.image[0] },
      {
        onSuccess: () => {
          reset();
          onClose?.();
        },
      },
    );
  };
  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6">
        <FormRow
          autoFocus
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

        <FormRow inputType="number" defaultValue={0}>
          Discount
        </FormRow>

        <Textarea {...register("description")}>
          Description for website
        </Textarea>

        <FormRow
          inputType="file"
          validationMsg={errors.image?.message}
          {...register("image", {
            required: "Cabin photo is required",
          })}
        >
          Cabin photo
        </FormRow>
      </div>

      {/* Actions */}
      {isPending ? (
        <div className="flex items-center justify-center py-5">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col-reverse gap-3 border-t border-border-muted bg-surface-muted px-6 py-5 sm:flex-row sm:justify-end sm:px-8">
          <Button
            variation="secondary"
            type="reset"
            onClick={() => onClose?.()}
          >
            Cancel
          </Button>

          <Button type="submit">Create cabin</Button>
        </div>
      )}
    </form>
  );
}
