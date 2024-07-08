"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import DefaultLayout from "@/layouts/DefaultLayout";

import AssetList from "@/components/AssetList";
import Title from "@/components/shared/Title";

export default function FavoritesPage() {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Title title="Favorites" />
        <AssetList category="Favorites" />
      </DefaultLayout>
    </Provider>
  );
}
