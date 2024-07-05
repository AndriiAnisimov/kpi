import { useState } from "react";
import Link from "next/link";
import { AssetInterface } from "@/interfaces/AssetInterface";

import CopyLink from "@/components/CopyLink";
import Icon from "@/components/shared/Icon";
import Favorite from "@/components/Favorite";
import Modal from "@/components/shared/Modal";
import ProgressBar from "@/components/shared/ProgressBar";

interface AssetProps {
  asset: AssetInterface;
  itemClass: string;
}

export default function Asset({ asset, itemClass }: AssetProps) {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleOpenModal = (modalType: string | null) => setOpenModal(modalType);
  const handleCloseModal = () => setOpenModal(null);

  const progressValue = (100 - asset.value) * 0.75;
  const progressColor: string = asset.value < 35 ? "red" :
                                asset.value <= 75 ? "yellow" : "green";

  return (
    <>
      <article key={asset.id} className={itemClass}>
        <header className="flex justify-between items-center">
          <Link href={`/${asset.id}`} passHref>
            <Icon name="ChartBarIcon" className="w-[20px] h-[20px]" />
          </Link>

          <p className="text-center mx-1 truncate ...">{asset.short_description}</p>

          <div className="cursor-pointer" onClick={() => handleOpenModal("detail")}>
            <Icon name="InformationCircleIcon" className="w-[24px] h-[24px]" />
          </div>
        </header>
        
        <ProgressBar
          value={asset.value}
          progressValue={progressValue}
          progressColor={progressColor}
        />
        
        <div className="flex justify-center items-center mt-2">
          <p className="mr-1">{asset.category}</p>
          <p className="mr-1">{asset.name}</p>

          <Icon name="FlagIcon" className="w-[20px] h-[20px]" />
          <Icon name="NewspaperIcon" className="w-[20px] h-[20px]" />
          <Icon name="ArchiveBoxIcon" className="w-[20px] h-[20px]" />
          <Icon name="StarIcon" className="w-[20px] h-[20px]" />
        </div>
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
