import { useFavoriteAssets, useUniqueValues } from "@/utils/useFavoriteAssets";
import BadgeItem from "./BadgeItem";

export default function AffiliateList() {
  const favoriteAssets = useFavoriteAssets();
  const uniqueAffiliates = useUniqueValues(favoriteAssets, "affiliate");
  const affiliatesArray = uniqueAffiliates.split(", ");

  return (
    <div className="text-center mt-4">
      {affiliatesArray.map((affiliate) => {
        if (affiliate) {
          return <BadgeItem
            key={affiliate}
            title={affiliate}
          />
        }
        return "No affiliates selected";
      })}
    </div>
  );
}
