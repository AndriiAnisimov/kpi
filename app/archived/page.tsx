"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import AssetList from "@/components/AssetList";

export default function ArchivedPage() {
  return (
    <Provider store={store}>
      <h1 className="font-bold mt-8 text-4xl text-center">Archive</h1>
      
      <AssetList
        category="Archived"
        title="Archive"
        subtitle="Your archived assets"
      />
    </Provider>
  )
}
