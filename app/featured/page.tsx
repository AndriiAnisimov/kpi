"use client";
import { Provider } from "react-redux";
import { store } from "@/store";

import AssetList from "@/components/AssetList";
import Title from "@/components/shared/Title";

export default function FeaturedPage() {
  return (
    <Provider store={store}>
      <Title title="Featured" />
      <AssetList category="Featured" />
    </Provider>
  );
}
