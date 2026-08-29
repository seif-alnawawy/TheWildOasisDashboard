import { MdDelete } from "react-icons/md";
import useDeleteCabin from "./useDeleteCabin";
import { useState } from "react";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menu from "../../ui/Menu";

export default function DeleteCabin({ cabinId, cabinName }) {
  const { mutate } = useDeleteCabin();

  const [isConfirmOpen, setIsConfirmOpen] = useState();
  const openConfirm = () => setIsConfirmOpen(true);
  const closeConfirm = () => setIsConfirmOpen(false);

  return (
    <>
      <Menu.Button icon={<MdDelete />} onClick={openConfirm}>
        Delete
      </Menu.Button>
      {isConfirmOpen && (
        <Modal title={"Deleting a cabin"} onClose={closeConfirm}>
          <Modal.Header />
          <ConfirmDelete
            resourceName={cabinName}
            onConfirm={() => mutate(cabinId)}
            onClose={closeConfirm}
          />
        </Modal>
      )}
    </>
  );
}
