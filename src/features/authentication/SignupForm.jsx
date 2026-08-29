import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { useSignUp } from "./useSignUp";

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const { isPending, signUp } = useSignUp();

  const onSubmit = (data) => {
    signUp(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-surface p-12 w-full sm:w-3/4 flex flex-col gap-6 rounded-md"
    >
      <div className="mb-8 gap-6 flex flex-col">
        <Label>
          Full Name
          <Input
            autoFocus
            {...register("fullName", { required: "Full Name is required" })}
          />
        </Label>

        <Label>
          Email address
          <Input
            type="email"
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </Label>

        <Label>
          Password (min 8 characters)
          <Input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                message: `Password must contain at least one uppercase letter,
                one lowercase letter,
                one number,
                and one non-alpha numeric number`,
              },
            })}
          />
          <p className="text-red-500">{errors.password?.message}</p>
        </Label>

        <Label>
          Confirm password
          <Input
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === getValues("password") || "The passwords do not match",
            })}
          />
          <p className="text-red-500">{errors.confirmPassword?.message}</p>
        </Label>
      </div>

      <div className="flex justify-between gap-4">
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button type={"submit"} disabled={isPending}>
          Create new user
        </Button>
      </div>
    </form>
  );
}

export default SignupForm;
