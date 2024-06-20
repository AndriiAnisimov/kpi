import { useSelector } from "react-redux";
import { RootState } from "../store";

import Asset from "./Asset";
import SubTitle from "./SubTitle";
import Title from "./Title";

export default function TrendingAssets() {
  const assets = useSelector((state: RootState) => state.assets.assets);
  const searchQuery = useSelector((state: RootState) => state.search.query.toLowerCase());

  const filteredAssets = assets.filter(asset =>
    asset.name.toLowerCase().includes(searchQuery) ||
    asset.description.toLowerCase().includes(searchQuery) ||
    asset.date.toLowerCase().includes(searchQuery) ||
    asset.category?.toLowerCase().includes(searchQuery)
  );
  const trendingAssets = filteredAssets.filter(asset => asset.category === "Trending");

  return (
    <>
      {trendingAssets.length > 0 && (
        <>
          <Title title="Trending" />
          <SubTitle subtitle="Most popular by community" />

          <ul className="grid gap-x-8 gap-y-4 grid-cols-2 mt-4">
            {trendingAssets.map((asset) => {
              return <Asset
                key={asset.id}
                asset={asset}
                itemClass="flex gap-2 p-2 hover:bg-white hover:cursor-pointer"
              />
            })}
          </ul>
        </>
      )}

      {trendingAssets.length === 0 && (
        <p className="mt-4">No Trending Assets match your search criteria.</p>
      )}
    </>
  );
}
