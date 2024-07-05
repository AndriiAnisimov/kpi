"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import AssetList from "@/components/AssetList";

export default function FeaturedPage() {
  return (
    <Provider store={store}>
      <AssetList category="Featured" />
    </Provider>
  );
}
