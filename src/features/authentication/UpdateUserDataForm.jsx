import { useState } from "react";

import Button from "../../ui/Button";

import Input from "../../ui/Input";

import { useUser } from "./useUser";
import Label from "../../ui/Label";
import FileInput from "../../ui/FileInput";
import useUpdateUser from "./useUpdateUser";

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { isPending, mutate } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    mutate({ fullName, avatar });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface p-12 w-full sm:w-xl flex flex-col gap-6 rounded-md"
    >
      <div className="mb-8 gap-6 flex flex-col">
        <Label label="Email address">
          <Input value={email} disabled />
        </Label>
        <Label label="Full name">
          <Input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            id="fullName"
          />
        </Label>
        <Label label="Avatar image">
          <FileInput
            id="avatar"
            accept="image/*"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </Label>
      </div>

      <div className="flex justify-between gap-4">
        <Button
          type="reset"
          variation="secondary"
          onClick={() => {
            setFullName(currentFullName);
            setAvatar(null);
          }}
        >
          Cancel
        </Button>
        <Button type={"submit"} disabled={isPending}>
          Update account
        </Button>
      </div>
    </form>
  );
}

export default UpdateUserDataForm;
