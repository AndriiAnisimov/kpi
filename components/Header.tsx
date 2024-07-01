"use client";
import { Provider } from "react-redux";
import { store } from "@/store";

import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";

export default function Header() {
  return (
    <Provider store={store}>
      <header>
        <NavBar />
        <SearchBar />
      </header>
    </Provider>
  );
}
