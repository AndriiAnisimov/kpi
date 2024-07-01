import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { AssetInterface } from "@/interfaces/AssetInterface";

export default function useFavoriteAssets(): AssetInterface[] {
  const assets = useSelector((state: RootState) => state.assets.assets) as AssetInterface[];

  const favoriteAssets = useMemo(() => {
    return assets.filter(asset => asset.favorite);
  }, [assets]);

  return favoriteAssets;
}
