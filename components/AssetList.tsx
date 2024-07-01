import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { AssetListInterface } from "@/interfaces/AssetListInterface";
import useFilteredAssets from "@/utils/useFilteredAssets";

import Asset from "@/components/Asset";
import SubTitle from "@/components/shared/SubTitle";
import Title from "@/components/shared/Title";

export default function AssetsList({ category, title, subtitle }: AssetListInterface) {
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
          {category !== "All" && (
            <>
              <Title title={title} />
              <SubTitle subtitle={subtitle} />
            </>
          )}

          <ul className="grid gap-x-8 gap-y-4 grid-cols-2 mt-4">
            {categorizedAssets.map((asset) => (
              <Asset
                key={asset.id}
                asset={asset}
                itemClass={`flex gap-2 p-2 ${
                  category === "Featured" ? "border-2 rounded-lg bg-white hover:bg-slate-200" : "hover:bg-white"
                } hover:cursor-pointer`}
                useLink={category === "All"}
              />
            ))}
          </ul>
        </>
      ) : (
        <p className="mt-4">No {title} Assets match your search criteria.</p>
      )}
    </>
  );
}
