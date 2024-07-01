"use client";
import { Provider } from "react-redux";
import { store } from "@/store";

import AssetList from "@/components/AssetList";
import NavBarOld from "@/components/NavBarOld";
import Role from "@/components/Role";

export default function TestPage() {
  return (
    <Provider store={store}>
      <h1 className="font-bold mt-8 text-4xl text-center">Library</h1>
      <p className="mt-4 text-center">Browse for assets needed to report and present analysis.</p>
      
      <NavBarOld />
      
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
