import { useSelector } from "react-redux";
import { RootState } from "../store";

import Title from "./Title";

export default function KpiList() {
  const assets = useSelector((state: RootState) => state.assets.assets);
  // const favoriteAssets = useSelector((state: RootState) => 
  //   state.assets.assets.filter(asset => asset.favorite === true)
  // );
  const uniqueKpi = (Array.from(new Set(assets.filter(asset => asset.kpi).map(asset => asset.kpi)))).join(", ");

  return (
    <>
      <Title title="KPI List" />
      {uniqueKpi}
    </>
  );
}
