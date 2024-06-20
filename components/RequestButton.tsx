import { CubeIcon } from "@heroicons/react/24/outline";

export default function RequestButton() {
  const handleRequest = () => console.log("Request");
  
  return (
    <button
      onClick={handleRequest}
      className="flex items-center bg-slate-400 rounded text-white px-2 py-1"
    >
      <CubeIcon className="size-4" />
      <span className="text-sm ml-1">Request</span>
    </button>   
  );
}
