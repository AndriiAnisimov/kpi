import { useState } from "react";
import Icon from "@/components/shared/Icon";
import Modal from "@/components/shared/Modal";
import RoleList from "@/components/RoleList";

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
        <Icon name="CubeIcon" className="w-[18px] h-[18px]" />
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
