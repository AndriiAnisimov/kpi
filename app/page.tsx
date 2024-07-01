"use client";
import { Provider, useSelector } from "react-redux";
import { store, RootState } from "@/store";

import useFilteredAssets from "@/utils/useFilteredAssets";
import useUniqueValues from "@/utils/useUniqueValues";

import AssetList from "@/components/AssetList";
import MultiSelect from "@/components/shared/MultiSelect";

function AssetsContent() {
  const searchQuery = useSelector((state: RootState) => state.search.query.toLowerCase());
  const filteredAssets = useFilteredAssets(searchQuery);

  const uniqueCountries = useUniqueValues(filteredAssets, "country");
  const countryArray = uniqueCountries.split(", ").sort();

  const uniqueBrands = useUniqueValues(filteredAssets, "brand");
  const brandArray = uniqueBrands.split(", ").sort();

  return (
    <>
      <div className="flex items-center justify-center mt-2">
        <p className="mr-2">Brands:</p>
        <MultiSelect options={brandArray} />
      </div>

      <div className="flex items-center justify-center mt-2">
        <p className="mr-2">Countries:</p>
        <MultiSelect options={countryArray} />
      </div>

      <AssetList
        category="All"
        title="All"
        subtitle="A complete list of all assets"
      />
    </>
  );
}

export default function HomePage() {
  return (
    <Provider store={store}>
      <AssetsContent />
    </Provider>
  );
}
