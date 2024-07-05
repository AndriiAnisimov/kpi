"use client";
import { Provider } from "react-redux";
import { store } from "@/store";

import AssetList from "@/components/AssetList";
import Role from "@/components/Role";
import Title from "@/components/shared/Title";

export default function TrendingPage() {
  return (
    <Provider store={store}>
      <Role allowedRoles={["admin"]}>
        <Title title="Trending" />
        <AssetList category="Trending" />
      </Role>
    </Provider>
  );
}
