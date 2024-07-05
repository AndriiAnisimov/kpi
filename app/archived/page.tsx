"use client";
import { Provider } from "react-redux";
import { store } from "@/store";

import AssetList from "@/components/AssetList";
import Title from "@/components/shared/Title";

export default function ArchivedPage() {
  return (
    <Provider store={store}>
      <Title title="Archived" />
      <AssetList category="Archived" />
    </Provider>
  )
}
