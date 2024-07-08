"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import DefaultLayout from "@/layouts/DefaultLayout";

import AssetList from "@/components/AssetList";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <SearchBar />
        <AssetList category="All" />
      </DefaultLayout>
    </Provider>
  );
}
