import { useState } from "react";
import Icon from "@/components/shared/Icon";

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
        <Icon name="LinkIcon" className="w-[16px] h-[16px]" />
      )}
    </button>
  );
}
