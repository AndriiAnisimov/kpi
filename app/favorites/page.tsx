"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import AssetList from "@/components/AssetList";

export default function FavoritesPage() {
  return (
    <Provider store={store}>
      <h1 className="font-bold mt-8 text-4xl text-center">Favorite</h1>

      <AssetList
        category="Favorites"
        title="Favorite"
        subtitle="Your favorite assets"
      />
    </Provider>
  )
}
