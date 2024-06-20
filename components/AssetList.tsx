import { useSelector } from "react-redux";
import { RootState } from "../store";
import { AssetListInterface } from "@/interfaces/AssetListInterface";

import Asset from "./Asset";
import SubTitle from "./SubTitle";
import Title from "./Title";

export default function AssetsList({ category, title, subtitle }: AssetListInterface) {
  const assets = useSelector((state: RootState) => state.assets.assets);
  const searchQuery = useSelector((state: RootState) => state.search.query.toLowerCase());

  const filteredAssets = assets.filter(asset =>
    asset.affiliate?.toLowerCase().includes(searchQuery) ||
    asset.category?.toLowerCase().includes(searchQuery) ||
    asset.date.toLowerCase().includes(searchQuery) ||
    asset.description.toLowerCase().includes(searchQuery) ||
    asset.name.toLowerCase().includes(searchQuery) ||
    asset.short_description.toLowerCase().includes(searchQuery) ||
    asset.value.toString().toLowerCase().includes(searchQuery)
  );

  const categorizedAssets = category === "Another"
    ? filteredAssets.filter(asset => asset.category !== "Featured" && asset.category !== "Trending")
    : filteredAssets.filter(asset => asset.category === category);

  return (
    <>
      {categorizedAssets.length > 0 ? (
        <>
          <Title title={title} />
          <SubTitle subtitle={subtitle} />

          <ul className="grid gap-x-8 gap-y-4 grid-cols-2 mt-4">
            {categorizedAssets.map((asset) => (
              <Asset
                key={asset.id}
                asset={asset}
                itemClass={`flex gap-2 p-2 ${
                  category === "Featured" ? "border-2 rounded-lg bg-white hover:bg-slate-200" : "hover:bg-white"
                } hover:cursor-pointer`}
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
