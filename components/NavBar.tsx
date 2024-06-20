"use client";
import { useState } from "react";

import Badge from "./Badge";
import BusinessQuestionList from "./BusinessQuestionList";
import CopyLink from "./CopyLink";
import Highchart from "./Highchart";
import Modal from "./Modal";

export default function NavBar() {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalType: any) => setOpenModal(modalType);
  const handleCloseModal = () => setOpenModal(null);

  return (
    <nav className="grid grid-cols-4 bg-slate-200 rounded mt-4 p-1">
      <button className={`rounded py-1 ${openModal === null ? "bg-active" : "bg-default"}`}>
        Featured
      </button>

      <button
        onClick={() => handleOpenModal("KPI")}
        className={`rounded py-1 ${openModal === "KPI" ? "bg-active" : "bg-default"}`}
      >
        KPI
      </button>
      {openModal === "KPI" && (
        <Modal onClose={handleCloseModal}>
          <div className="flex justify-center items-center">
            <h2 className="text-3xl mr-1">KPI</h2>
            <Badge title="KPI" />
          </div>
          
          <BusinessQuestionList />
          <CopyLink />
        </Modal>
      )}

      <button
        onClick={() => handleOpenModal("Layouts")}
        className={`rounded py-1 ${openModal === "Layouts" ? "bg-active" : "bg-default"}`}
      >
        Layouts
      </button>
      {openModal === "Layouts" && (
        <Modal onClose={handleCloseModal}>
          <div className="flex justify-center items-center">
            <h2 className="text-3xl mr-1">Trend for All Assets</h2>
            <Badge title="Layouts" />
          </div>

          <Highchart />
          <CopyLink />
        </Modal>
      )}

      <button
        onClick={() => handleOpenModal("Storyboards")}
        className={`rounded py-1 ${openModal === "Storyboards" ? "bg-active" : "bg-default"}`}
      >
        Storyboards
      </button>
      {openModal === "Storyboards" && (
        <Modal onClose={handleCloseModal}>
          <div className="flex justify-center items-center">
            <h2 className="text-3xl mr-1">Storyboards</h2>
            <Badge title="Storyboards" />
          </div>
          
          <CopyLink />
        </Modal>
      )}
    </nav>
  );
}
