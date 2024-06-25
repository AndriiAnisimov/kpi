import { useState } from "react";
import { CubeIcon } from "@heroicons/react/24/outline";

import Modal from "./Modal";
import RoleList from "./RoleList";

export default function RequestButton() {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalType: any) => setOpenModal(modalType);
  const handleCloseModal = () => setOpenModal(null);
  
  return (
    <>
      <button
        onClick={() => handleOpenModal(true)}
        className="flex items-center bg-slate-400 rounded text-white px-2 py-1"
      >
        <CubeIcon className="size-4" />
        <span className="text-sm ml-1">Request</span>
      </button>

      {openModal === true && (
        <Modal onClose={handleCloseModal}>
          <RoleList />
        </Modal>
      )}
    </>
  );
}
