import { useState } from "react";
import { LinkIcon } from "@heroicons/react/24/outline";

export default function CopyLink() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="absolute right-8 top-2.5 flex items-center text-gray-500 hover:text-gray-800"
    >
      {copied ? (
        <span className="text-xs h-3 w-30">Link Copied!</span>
      ) : (
        <LinkIcon className="h-4 w-4" />
      )}
    </button>
  );
}
