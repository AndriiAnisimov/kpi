import { useState } from "react";
import { AssetInterface } from "@/interfaces/AssetInterface";
import { ChartPieIcon } from "@heroicons/react/24/outline";

import CopyLink from "./CopyLink";
import Favorite from "./Favorite";
import Modal from "./Modal";

export default function Asset({ itemClass, asset }: { itemClass: string, asset: AssetInterface }) {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalType: any) => setOpenModal(modalType);
  const handleCloseModal = () => setOpenModal(null);
  
  return (
    <>
      <li key={asset.id} className={itemClass} onClick={() => handleOpenModal(true)}>
        <div className="flex justify-center items-center bg-slate-200 rounded-lg w-24 h-24">
          <ChartPieIcon className="size-10" />
        </div>
        
        <article>
          <p className="font-bold">{asset.name}</p>
          <p>{asset.short_description}</p>
          <p>{asset.date}</p>
        </article>
      </li>

      {openModal === true && (
        <Modal onClose={handleCloseModal}>
          <p className="text-center w-[320px]">{asset.description}</p>
          <Favorite assetId={asset.id} isFavorite={asset.favorite} />
          <CopyLink />
        </Modal>
      )}
    </>
  );
}
