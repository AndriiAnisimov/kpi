"use client";
import { Provider, useSelector } from "react-redux";
import { store, RootState } from "@/store";

import useFilteredAssets from "@/utils/useFilteredAssets";
import useUniqueValues from "@/utils/useUniqueValues";

import MultiSelect from "@/components/shared/MultiSelect";
import Title from "@/components/shared/Title";

interface Asset {
  brand: string;
  country: string;
  region: string;
  name: string;
}

const MultiSelectGroup = ({ label, options }: { label: string, options: string[] }) => (
  <div className="flex items-center justify-center mt-2">
    <p className="mr-2">{label}:</p>
    <MultiSelect options={options} />
  </div>
);

function FilterPage() {
  const searchQuery = useSelector((state: RootState) => state.search.query.toLowerCase());
  const filteredAssets = useFilteredAssets(searchQuery);

  const getUniqueSortedValues = (key: keyof Asset) => useUniqueValues(filteredAssets, key).split(", ").sort();

  const brandArray = getUniqueSortedValues("brand");
  const countryArray = getUniqueSortedValues("country");
  const regionArray = getUniqueSortedValues("region");
  const KPIArray = useUniqueValues(filteredAssets, "name").split(", ");
  
  return (
    <>
      <Title title="Filter" />
      <MultiSelectGroup
        label="Brands"
        options={brandArray}
      />
      <MultiSelectGroup
        label="Countries"
        options={countryArray}
      />
      <MultiSelectGroup
        label="Regions"
        options={regionArray}
      />
      <MultiSelectGroup
        label="KPIs"
        options={KPIArray}
      />
    </>
  );
}

export default function WrappedFilterPage() {
  return (
    <Provider store={store}>
      <FilterPage />
    </Provider>
  );
}
