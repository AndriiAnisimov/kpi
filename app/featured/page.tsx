"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import AssetList from "@/components/AssetList";

export default function TestPage() {
  return (
    <Provider store={store}>
      <AssetList
        category="Featured"
        title="Featured"
        subtitle="Curated top picks from this week"
      />
    </Provider>
  );
}
