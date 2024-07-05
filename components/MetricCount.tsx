import { useState } from "react";
import useFavoriteAssets from "@/utils/useFavoriteAssets";

import Icon from "@/components/shared/Icon";
import Popup from "@/components/shared/Popup";

export default function MetricCount() {
  const favoriteAssets = useFavoriteAssets();
  const favoriteCount = favoriteAssets.length;

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsPopupOpen(true);
  };

  const handleMouseLeave = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {favoriteCount > 0 ? (
        <div className="flex flex-col">
          <p className="font-bold text-center">{favoriteCount}</p>
          
          <div className="flex flex-row justify-center items-center">
            <p className="text-gray-500 mr-1">Used</p>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="cursor-pointer w-5 h-5 text-gray-500 hover:text-gray-800">
                <Icon name="InformationCircleIcon" className="w-[20px] h-[20px]" />
              </div>

              <Popup isOpen={isPopupOpen}>
                <p className="text-xs">Information</p>
              </Popup>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">No favorite assets selected</p>
      )}
    </>
  );
}
