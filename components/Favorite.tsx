import { useDispatch } from "react-redux";
import { toggleFavorite } from "@/store/slices/assetSlice";
import { FavoriteInterface } from "@/interfaces/FavoriteInterface";
import Icon from "@/components/shared/Icon";

export default function Favorite({ assetId, isFavorite }: FavoriteInterface) {
  const dispatch = useDispatch();
  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(assetId));
  };

  const styles = `flex justify-center items-center rounded mt-2 px-2 py-1 w-full ${
    isFavorite ? "bg-slate-200 text-black" : "bg-blue-950 text-white"
  }`;
  const icon = isFavorite
    ? <Icon name="BookmarkSlashIcon" className="w-[16px] h-[16px]" />
    : <Icon name="BookmarkIcon" className="w-[16px] h-[16px]" />;
  const text = isFavorite ? "Unfavorite item" : "Favorite item";

  return (
    <button onClick={handleToggleFavorite} className={styles}>
      {icon}
      <span className="text-sm ml-1">{text}</span>
    </button>
  );
}
