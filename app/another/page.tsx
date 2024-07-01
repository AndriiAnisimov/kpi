"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import AssetList from "@/components/AssetList";

export default function TestPage() {
  return (
    <Provider store={store}>
      <AssetList
        category="Another"
        title="Another"
        subtitle="Another assets"
      />
    </Provider>
  );
}
