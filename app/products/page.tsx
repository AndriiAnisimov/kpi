"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import { useFavoriteAssets, useUniqueValues } from "@/utils/useFavoriteAssets";

import AssetList from "@/components/AssetList";
import MultiSelect from "@/components/MultiSelect";

function ProductsContent() {
  const favoriteAssets = useFavoriteAssets();
  const uniqueCountries = useUniqueValues(favoriteAssets, "country");
  const countryArray = uniqueCountries.split(", ");
  const uniqueBrands = useUniqueValues(favoriteAssets, "brand");
  const brandArray = uniqueBrands.split(", ");

  return (
    <>
      <div className="flex items-center justify-center mt-2">
        <p className="mr-2">Countries:</p>
        <MultiSelect options={countryArray} />
      </div>

      <div className="flex items-center justify-center mt-2">
        <p className="mr-2">Brands:</p>
        <MultiSelect options={brandArray} />
      </div>

      <AssetList
        category="All"
        title="All"
        subtitle="A complete list of all assets"
      />
    </>
  );
}

export default function ProductsPage() {
  return (
    <Provider store={store}>
      <ProductsContent />
    </Provider>
  );
}
