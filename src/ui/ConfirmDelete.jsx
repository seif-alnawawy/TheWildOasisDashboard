import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import Button from "./Button";
import Heading from "./Heading";

export default function ConfirmDelete({ resourceName, onConfirm, onClose }) {
  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-danger-bg text-danger">
          <HiOutlineExclamationTriangle className="size-5" />
        </div>

        <div>
          <Heading type="h3">Delete {resourceName}</Heading>

          <p className="mt-2 text-sm leading-6 text-text-secondary">
            Are you sure you want to delete this {resourceName} permanently?
            This action cannot be undone.
          </p>
        </div>
      </div>

      <div className="flex justify-end gap-3 border-t border-border-muted pt-5">
        <Button variation="secondary" onClick={onClose}>
          Cancel
        </Button>

        <Button variation="danger" onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  );
}
