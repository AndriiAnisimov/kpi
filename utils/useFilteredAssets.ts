import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { AssetInterface } from "@/interfaces/AssetInterface";

export default function useFilteredAssets(searchQuery: string): AssetInterface[] {
  const assets = useSelector((state: RootState) => state.assets.assets) as AssetInterface[];

  const filteredAssets = useMemo(() => {
    return assets.filter(asset =>
      asset.affiliate?.toLowerCase().includes(searchQuery) ||
      asset.category?.toLowerCase().includes(searchQuery) ||
      asset.date.toLowerCase().includes(searchQuery) ||
      asset.description.toLowerCase().includes(searchQuery) ||
      asset.name.toLowerCase().includes(searchQuery) ||
      asset.short_description?.toLowerCase().includes(searchQuery) ||
      asset.value.toString().toLowerCase().includes(searchQuery)
    );
  }, [assets, searchQuery]);

  return filteredAssets;
}
