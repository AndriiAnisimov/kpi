"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import AssetList from "@/components/AssetList";

export default function HomePage() {
  return (
    <Provider store={store}>
      <AssetList
        category="All"
        title="All"
        subtitle="A complete list of all assets"
      />
    </Provider>
  );
}
