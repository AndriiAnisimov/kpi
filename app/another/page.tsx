"use client";
import { Provider } from "react-redux";
import { store } from "@/store";

import AssetList from "@/components/AssetList";
import Role from "@/components/Role";

export default function AnotherPage() {
  return (
    <Provider store={store}>
      <Role allowedRoles={["admin"]}>
        <AssetList category="Another" />
      </Role>
    </Provider>
  );
}
