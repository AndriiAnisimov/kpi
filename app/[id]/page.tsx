"use client";
import { Provider, useSelector } from "react-redux";
import { store, RootState } from "@/store";
import useFilteredAssets from "@/utils/useFilteredAssets";
import Highchart from "@/components/Highchart";

function AssetContent({ params }: { params: { id: string }}) {
  const searchQuery = useSelector((state: RootState) => state.search.query.toLowerCase());
  const filteredAssets = useFilteredAssets(searchQuery);
  const asset = filteredAssets.find((asset) => asset.id === params.id);
  console.log(asset);

  if (!asset) {
    return <p>Asset not found</p>;
  }

  return (
    <section>
      <p className="text-center mt-4">Name: {asset.name}</p>
      <p className="text-center mt-4">Description: {asset.description}</p>
      <p className="text-center mt-4">Value: {asset.value}</p>

      <h2 className="text-2xl text-center mt-4">Trend for Favorites KPI</h2>
      <Highchart />
    </section>
  );
}

export default function AssetDetail({ params }: { params: { id: string }}) {
  return (
    <Provider store={store}>
      <AssetContent params={params} />
    </Provider>
  )
}
