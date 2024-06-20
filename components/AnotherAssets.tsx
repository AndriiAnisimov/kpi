import { useSelector } from "react-redux";
import { RootState } from "../store";

import Asset from "./Asset";
import SubTitle from "./SubTitle";
import Title from "./Title";

export default function AnotherAssets() {
  const assets = useSelector((state: RootState) => state.assets.assets);
  const searchQuery = useSelector((state: RootState) => state.search.query.toLowerCase());

  const filteredAssets = assets.filter(asset =>
    asset.name.toLowerCase().includes(searchQuery) ||
    asset.description.toLowerCase().includes(searchQuery) ||
    asset.date.toLowerCase().includes(searchQuery) ||
    asset.category?.toLowerCase().includes(searchQuery)
  );
  const anotherAssets = filteredAssets.filter(asset => asset.category !== "Featured" && asset.category !== "Trending");

  return (
    <>
      {anotherAssets.length > 0 && (
        <>
          <Title title="Another" />
          <SubTitle subtitle="Another assets" />

          <ul className="grid gap-x-8 gap-y-4 grid-cols-2 mt-4">
            {anotherAssets.map((asset) => {
              return <Asset
                key={asset.id}
                asset={asset}
                itemClass="flex gap-2 p-2 hover:bg-white hover:cursor-pointer"
              />
            })}
          </ul>
        </>
      )}

      {anotherAssets.length === 0 && (
        <p className="mt-4">No Another Assets match your search criteria.</p>
      )}
    </>
  );
}
