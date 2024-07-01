"use client";
import Link from "next/link";
import { useState } from "react";

function NavLink({ title, url }: { title: string, url: string }) {
  return (
    <Link href={url} className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
      {title}
    </Link>
  );
}

export default function NavBar() {
  const [links, setLinks] = useState([
    ["Home", "/"],
    ["Featured", "/featured"],
    ["Trending", "/trending"],
    ["Another", "/another"],
    ["Favorites", "/favorites"],
    ["Archived", "/archived"],
    ["Profile", "/profile"],
    ["Test", "/test"]
  ]);

  return (
    <nav className="flex justify-center">
      {links.map(([title, url]) => (
        <NavLink key={url} title={title} url={url} />
      ))}
    </nav>
  );
}
