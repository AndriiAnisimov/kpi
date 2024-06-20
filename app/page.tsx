"use client";
import { Provider } from "react-redux";
import { store } from "../store";

import AssetList from "@/components/AssetList";
import NavBar from "@/components/NavBar";
import Role from "@/components/Role";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  console.log(store.getState())

  return (
    <Provider store={store}>
      <SearchBar />
      <NavBar />
      <AssetList
        category="Featured"
        title="Featured"
        subtitle="Curated top picks from this week"
      />

      <Role allowedRoles={["admin"]}>
        <AssetList
          category="Trending"
          title="Trending"
          subtitle="Most popular by community"
        />
      </Role>

      <Role allowedRoles={["admin"]}>
        <AssetList
          category="Another"
          title="Another"
          subtitle="Another assets"
        />
      </Role>
    </Provider>
  );
}
