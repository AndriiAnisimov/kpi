"use client";
import { Provider } from "react-redux";
import { store } from "../store";

import AssetList from "@/components/AssetList";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Role from "@/components/Role";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <Provider store={store}>
      <Header />
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
