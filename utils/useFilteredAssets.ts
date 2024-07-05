import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { AssetInterface } from "@/interfaces/AssetInterface";

export default function useFilteredAssets(searchQuery: string): AssetInterface[] {
  const assets = useSelector((state: RootState) => state.assets.assets) as AssetInterface[];

  const filteredAssets = useMemo(() => {
    return assets.filter(asset =>
      asset.affiliate?.toLowerCase().includes(searchQuery) ||
      asset.brand.toLowerCase().includes(searchQuery) ||
      asset.category?.toLowerCase().includes(searchQuery) ||
      asset.country.toLowerCase().includes(searchQuery) ||
      asset.date.toLowerCase().includes(searchQuery) ||
      asset.description.toLowerCase().includes(searchQuery) ||
      asset.name.toLowerCase().includes(searchQuery) ||
      asset.region.toLowerCase().includes(searchQuery) ||
      asset.shortDescription?.toLowerCase().includes(searchQuery) ||
      asset.value.toString().toLowerCase().includes(searchQuery)
    );
  }, [assets, searchQuery]);

  return filteredAssets;
}
