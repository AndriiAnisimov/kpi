import { useFavoriteAssets, useUniqueValues } from "@/utils/useFavoriteAssets";
import BadgeItem from "./BadgeItem";

export default function KpiList() {
  const favoriteAssets = useFavoriteAssets();
  const uniqueKpi = useUniqueValues(favoriteAssets, "name");
  const kpiArray = uniqueKpi.split(", ");

  return (
    <div className="text-center mt-4">
      {kpiArray.map((kpi) => {
        if (kpi) {
          return <BadgeItem
            key={kpi}
            title={kpi}
          />
        }
        return "No KPI selected";
      })}
    </div>
  );
}
