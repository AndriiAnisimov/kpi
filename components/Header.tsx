"use client";
import RequestButton from "./RequestButton";

export default function Header() {
  return (
    <header>
      <div className="fixed right-2 top-2">
        <RequestButton />
      </div>
      
      <h1 className="font-bold mt-8 text-4xl text-center">Library</h1>
      <p className="mt-4 text-center">Browse for assets needed to report and present analysis.</p>
    </header>    
  );
}
