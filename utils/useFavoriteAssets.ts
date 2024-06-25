import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { AssetInterface } from "@/interfaces/AssetInterface";

function useFavoriteAssets(): AssetInterface[] {
  const assets = useSelector((state: RootState) => state.assets.assets) as AssetInterface[];

  const favoriteAssets = useMemo(() => {
    return assets.filter(asset => asset.favorite);
  }, [assets]);

  return favoriteAssets;
}

function useUniqueValues<K extends keyof AssetInterface>(assets: AssetInterface[], key: K): string {
  return useMemo(() => {
    return Array.from(new Set(assets.map(asset => asset[key]).filter(Boolean))).join(", ");
  }, [assets, key]);
}

export { useFavoriteAssets, useUniqueValues };
