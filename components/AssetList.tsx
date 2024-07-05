import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { AssetListInterface } from "@/interfaces/AssetListInterface";
import useFilteredAssets from "@/utils/useFilteredAssets";
import Asset from "@/components/Asset";

export default function AssetsList({ category }: AssetListInterface) {
  const searchQuery = useSelector((state: RootState) => state.search.query.toLowerCase());
  const filteredAssets = useFilteredAssets(searchQuery);

  const categorizedAssets = category === "Favorites"
    ? filteredAssets.filter(asset => asset.favorite)
    : category === "All"
      ? filteredAssets
      : category === "Archived"
        ? filteredAssets.filter(asset => asset.archive)
        : category === "Another"
          ? filteredAssets.filter(asset => asset.category !== "Featured" && asset.category !== "Trending")
          : filteredAssets.filter(asset => asset.category === category);

  return (
    <>
      {categorizedAssets.length > 0 ? (
        <>
          <div className="grid gap-x-8 gap-y-4 grid-cols-4 mt-4">
            {categorizedAssets.map((asset) => (
              <Asset
                key={asset.id}
                asset={asset}
                itemClass="flex flex-col border-2 rounded-lg bg-white p-2"
              />
            ))}
          </div>
        </>
      ) : (
        <p className="mt-4">No Assets match your search criteria.</p>
      )}
    </>
  );
}
