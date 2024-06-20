"use client";
import { Provider } from "react-redux";
import { store } from "../store";

import AnotherAssets from "@/components/AnotherAssets";
import FeaturedAssets from "@/components/FeaturedAssets";
import NavBar from "@/components/NavBar";
import Role from "@/components/Role";
import SearchBar from "@/components/SearchBar";
import TrendingAssets from "@/components/TrendingAssets";

export default function HomePage() {
  return (
    <Provider store={store}>
      <SearchBar />
      <NavBar />
      <FeaturedAssets />

      <Role allowedRoles={["admin"]}>
        <TrendingAssets />
      </Role>

      <Role allowedRoles={["admin"]}>
        <AnotherAssets />
      </Role>
    </Provider>
  );
}
