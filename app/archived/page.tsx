"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import AssetList from "@/components/AssetList";

export default function ArchivedPage() {
  return (
    <Provider store={store}>
      <AssetList
        category="Archived"
        title="Archive"
        subtitle="Your archived assets"
      />
    </Provider>
  )
}
