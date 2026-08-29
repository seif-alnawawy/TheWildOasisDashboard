import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";

export default function AccountPage() {
  return (
    <div className="gap-8 bg-background flex-col flex justify-start items-center">
      <Heading as="h1">Update your account</Heading>
      <UpdateUserDataForm />
    </div>
  );
}
