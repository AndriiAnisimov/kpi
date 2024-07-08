"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import DefaultLayout from "@/layouts/DefaultLayout";

import AssetList from "@/components/AssetList";
import Role from "@/components/Role";
import SearchBar from "@/components/SearchBar";

export default function AnotherPage() {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Role allowedRoles={["admin"]}>
          <SearchBar />
          <AssetList category="Another" />
        </Role>
      </DefaultLayout>
    </Provider>
  );
}
