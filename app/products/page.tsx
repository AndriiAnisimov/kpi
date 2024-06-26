"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import { useFavoriteAssets, useUniqueValues } from "@/utils/useFavoriteAssets";

import AssetList from "@/components/AssetList";
import MultiSelect from "@/components/MultiSelect";

export default function ProductsPage() {
  // const favoriteAssets = useFavoriteAssets();
  // const uniqueCountries = useUniqueValues(favoriteAssets, "country");
  // const countryArray = uniqueCountries.split(", ");
  const countryArray = ["Country 1", "Country 2", "Country 3", "Country 4"];
  console.log(countryArray)

  return (
    <Provider store={store}>
      <div className="flex items-center justify-center">
        <p className="mr-1">Countries:</p>
        <MultiSelect options={countryArray} />
      </div>

      <AssetList
        category="All"
        title="All"
        subtitle="A complete list of all assets"
      />
    </Provider>
  );
}
