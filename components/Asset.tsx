import { useState } from "react";
import Link from "next/link";
import { AssetInterface } from "@/interfaces/AssetInterface";

import CopyLink from "@/components/CopyLink";
import Icon from "@/components/shared/Icon";
import Favorite from "@/components/Favorite";
import Modal from "@/components/shared/Modal";

interface AssetProps {
  asset: AssetInterface;
  itemClass: string;
}

export default function Asset({ asset, itemClass }: AssetProps) {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleOpenModal = (modalType: string | null) => setOpenModal(modalType);
  const handleCloseModal = () => setOpenModal(null);
  
  return (
    <>
      <article key={asset.id} className={itemClass}>
        <header className="flex justify-between items-center">
          <Link href={`/${asset.id}`} passHref>
            <Icon name="ChartPieIcon" className="w-[24px] h-[24px]" />
          </Link>

          <p className="font-bold text-center">{asset.name}</p>

          <div className="cursor-pointer" onClick={() => handleOpenModal("detail")}>
            <Icon name="InformationCircleIcon" className="w-[24px] h-[24px]" />
          </div>
        </header>
        
        <p className="text-center mt-1">{asset.short_description}</p>
        <p className="text-center mt-1">Category: {asset.category}</p>
      </article>

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
