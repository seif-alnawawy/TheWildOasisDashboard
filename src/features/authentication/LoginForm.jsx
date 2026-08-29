import Button from "../../ui/Button";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import Spinner from "../../ui/Spinner";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isPending, login } = useLogin();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-surface p-12 w-full sm:w-xl flex flex-col gap-6 rounded-md"
    >
      <div className="mb-8 gap-6 flex flex-col">
        <Label>
          Email Address
          <Input
            autoFocus
            type={"email"}
            {...register("email", { required: "Enter a valid email" })}
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </Label>
        <Label>
          Password
          <Input
            type={"password"}
            {...register("password", { required: "Enter a valid password" })}
          />
          <p className="text-red-500">{errors.password?.message}</p>
        </Label>
      </div>
      <Button disabled={isPending} size="large">
        {isPending ? <Spinner size={"small"} /> : "Login"}
      </Button>
    </form>
  );
}

export default LoginForm;
