import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import { useState } from "react";

export default function CreateCabin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Add new cabin
      </Button>
      {isModalOpen && (
        <Modal title={"Create new cabin"} onClose={() => setIsModalOpen(false)}>
          <Modal.Header />
          <CreateCabinForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
}
