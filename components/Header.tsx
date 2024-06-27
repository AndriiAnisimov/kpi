"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import RequestButton from "./shared/RequestButton";

export default function Header() {
  return (
    <Provider store={store}>
      <header>
        <div className="absolute right-2 top-2">
          <RequestButton />
        </div>
      </header>
    </Provider>
  );
}
