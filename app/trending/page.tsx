"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import AssetList from "@/components/AssetList";

export default function TestPage() {
  return (
    <Provider store={store}>
      <AssetList
        category="Trending"
        title="Trending"
        subtitle="Most popular by community"
      />
    </Provider>
  );
}
