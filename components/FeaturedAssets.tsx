import { useSelector } from "react-redux";
import { RootState } from "../store";

import Asset from "./Asset";
import SubTitle from "./SubTitle";
import Title from "./Title";

export default function FeaturedAssets() {
  const assets = useSelector((state: RootState) => state.assets.assets);
  const searchQuery = useSelector((state: RootState) => state.search.query.toLowerCase());

  const filteredAssets = assets.filter(asset =>
    asset.name.toLowerCase().includes(searchQuery) ||
    asset.description.toLowerCase().includes(searchQuery) ||
    asset.date.toLowerCase().includes(searchQuery) ||
    asset.category?.toLowerCase().includes(searchQuery)
  );
  const featuredAssets = filteredAssets.filter(asset => asset.category === "Featured");

  return (
    <>
      {featuredAssets.length > 0 && (
        <>
          <Title title="Featured" />
          <SubTitle subtitle="Curated top picks from this week" />
    
          <ul className="grid gap-x-8 gap-y-4 grid-cols-2 mt-4">
            {featuredAssets.map((asset) => {
              return <Asset
                key={asset.id}
                asset={asset}
                itemClass="flex gap-2 border-2 rounded-lg p-2 bg-white hover:bg-slate-200 hover:cursor-pointer"
              />
            })}
          </ul>
        </>
      )}

      {featuredAssets.length === 0 && (
        <p className="mt-4">No Featured Assets match your search criteria.</p>
      )}
    </>
  );
}
