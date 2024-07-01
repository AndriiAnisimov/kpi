import { useMemo } from "react";
import { AssetInterface } from "@/interfaces/AssetInterface";

export default function useUniqueValues<K extends keyof AssetInterface>(assets: AssetInterface[], key: K): string {
  return useMemo(() => {
    return Array.from(new Set(assets.map(asset => asset[key]).filter(Boolean))).join(", ");
  }, [assets, key]);
}
