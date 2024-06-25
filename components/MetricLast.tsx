import { useFavoriteAssets } from "@/utils/useFavoriteAssets";

export default function MetricLast() {
  const favoriteAssets = useFavoriteAssets();
  const favoriteCount = favoriteAssets.length;

  return (
    <>
      {favoriteCount > 0 ? (
        <div className="text-center">
          <p className="font-bold">07/23/2024</p>
          <p className="text-gray-500">Last Updated</p>
        </div>
      ) : (
        <p className="text-center">No favorite assets selected</p>
      )}
    </>
  );
}
