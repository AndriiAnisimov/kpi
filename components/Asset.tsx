import { useState } from "react";
import Link from "next/link";
import { AssetInterface } from "@/interfaces/AssetInterface";

import CopyLink from "@/components/CopyLink";
import Icon from "@/components/shared/Icon";
import Favorite from "@/components/Favorite";
import Modal from "@/components/shared/Modal";

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
    <article>
      <header className="flex justify-between items-center">
        <Icon name="ChartPieIcon" className="w-[24px] h-[24px]" />
        <p className="font-bold text-center">{asset.name}</p>
        <Icon name="InformationCircleIcon" className="w-[24px] h-[24px]" />
      </header>
      
      <p className="text-center mt-1">{asset.short_description}</p>
      <p className="text-center mt-1">Category: {asset.category}</p>
    </article>
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
