"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import AssetList from "@/components/AssetList";

export default function FavoritesPage() {
  return (
    <Provider store={store}>
      <AssetList
        category="Favorites"
        title="Favorite"
        subtitle="Your favorite assets"
      />

      <AssetList
        category="All"
        title="All"
        subtitle="A complete list of all assets"
      />
    </Provider>
  )
}
