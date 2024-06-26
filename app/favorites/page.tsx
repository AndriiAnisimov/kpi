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
    </Provider>
  )
}
