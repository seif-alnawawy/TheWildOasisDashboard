import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";

function SettingsPage() {
  return (
    <>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </>
  );
}

export default SettingsPage;
