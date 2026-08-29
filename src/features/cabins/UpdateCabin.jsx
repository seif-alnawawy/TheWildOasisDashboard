import { useState } from "react";
import { MdEdit } from "react-icons/md";
import Modal from "../../ui/Modal";
import UpdateCabinForm from "./UpdateCabinForm";
import Menu from "../../ui/Menu";

export default function UpdateCabin({ cabin }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Menu.Button icon={<MdEdit />} onClick={openModal}>
        Update
      </Menu.Button>
      {isModalOpen && (
        <Modal title={"Create new cabin"} onClose={closeModal}>
          <Modal.Header />
          <UpdateCabinForm cabin={cabin} onCancel={closeModal} />
        </Modal>
      )}
    </>
  );
}
