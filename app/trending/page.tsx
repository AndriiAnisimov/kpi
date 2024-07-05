"use client";
import { Provider } from "react-redux";
import { store } from "@/store";

import AssetList from "@/components/AssetList";
import Role from "@/components/Role";

export default function TrendingPage() {
  return (
    <Provider store={store}>
      <Role allowedRoles={["admin"]}>
        <AssetList category="Trending" />
      </Role>
    </Provider>
  );
}
