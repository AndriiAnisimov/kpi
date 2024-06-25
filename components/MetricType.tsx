import { useFavoriteAssets } from "@/utils/useFavoriteAssets";

export default function MetricType() {
  const favoriteAssets = useFavoriteAssets();
  const favoriteCount = favoriteAssets.length;

  return (
    <>
      {favoriteCount > 0 ? (
        <div className="text-center">
          <p className="font-bold">Universal</p>
          <p className="text-gray-500">Type</p>
        </div>
      ) : (
        <p className="text-center">No favorite assets selected</p>
      )}
    </>
  );
}
