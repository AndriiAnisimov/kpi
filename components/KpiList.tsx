import useFavoriteAssets from "@/utils/useFavoriteAssets";
import useUniqueValues from "@/utils/useUniqueValues";
import BadgeItem from "@/components/shared/BadgeItem";

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
