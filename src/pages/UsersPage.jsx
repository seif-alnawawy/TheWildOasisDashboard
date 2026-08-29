import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

export default function UsersPage() {
  return (
    <div className="h-screen gap-8 p-8 bg-background flex-col flex justify-center items-center">
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </div>
  );
}
