import { useState } from "react";
import { AssetInterface } from "@/interfaces/AssetInterface";
import { ChartPieIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import CopyLink from "./CopyLink";
import Favorite from "./Favorite";
import Modal from "./shared/Modal";

interface AssetProps {
  itemClass: string;
  asset: AssetInterface;
  useLink?: boolean;
}

export default function Asset({ itemClass, asset, useLink }: AssetProps) {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleOpenModal = (modalType: string | null) => setOpenModal(modalType);
  const handleCloseModal = () => setOpenModal(null);

  const content = (
    <>
      <div className="flex justify-center items-center bg-slate-200 rounded-lg w-24 h-24">
        <ChartPieIcon className="size-10" />
      </div>
      
      <article>
        <p className="font-bold">{asset.name}</p>
        <p>{asset.short_description}</p>
        <p>{asset.date}</p>
      </article>
    </>
  );
  
  return (
    <>
      {useLink ? (
        <Link href={`/${asset.id}`} passHref>
          <li key={asset.id} className={`${itemClass} cursor-pointer`}>
            {content}
          </li>
        </Link>
      ) : (
        <li key={asset.id} className={itemClass} onClick={() => handleOpenModal("detail")}>
          {content}
        </li>
      )}

      {openModal === "detail" && (
        <Modal onClose={handleCloseModal}>
          <p className="text-center w-[320px]">{asset.description}</p>
          <Favorite assetId={asset.id} isFavorite={asset.favorite} />
          <CopyLink />
        </Modal>
      )}
    </>
  );
}
