"use client";
import { CubeIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const handleRequest = () => console.log("Request");
  
  return (
    <header>
      <button
        onClick={handleRequest}
        className="fixed right-2 top-2 flex items-center bg-slate-400 rounded text-white px-2 py-1"
      >
        <CubeIcon className="size-4" />
        <span className="text-sm ml-1">Request</span>
      </button>

      <h1 className="font-bold mt-8 text-4xl text-center">Library</h1>
      <p className="mt-4 text-center">Browse for assets needed to report and present analysis.</p>
    </header>    
  );
}
