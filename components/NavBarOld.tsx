import { useState } from "react";
import ModalMenuContent from "@/components/ModalMenuContent";

type ModalType = "KPI" | null;

export default function NavBarOld() {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  const handleOpenModal = (modalType: ModalType) => setOpenModal(modalType);
  const handleCloseModal = () => setOpenModal(null);

  const buttons: { label: string; modalType: ModalType }[] = [
    { label: "Featured", modalType: null },
    { label: "KPI", modalType: "KPI" }
  ];

  return (
    <nav className="grid grid-cols-2 bg-slate-200 rounded mt-4 p-1">
      {buttons.map(({ label, modalType }) => (
        <button
          key={label}
          onClick={() => handleOpenModal(modalType)}
          className={`rounded py-1 ${openModal === modalType ? "bg-active" : "bg-default"}`}
        >
          {label}
        </button>
      ))}
      {openModal && <ModalMenuContent type={openModal} onClose={handleCloseModal} />}
    </nav>
  );
}
