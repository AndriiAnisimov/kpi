import { PopupInterface } from "@/interfaces/PopupInterface";

export default function Popup({ isOpen, children }: PopupInterface) {
  if (!isOpen) return null;
  
  return (
    <div className="absolute bottom-6 left-26 flex justify-center items-center z-50">
      <div className="relative bg-white rounded shadow-lg px-2 py-1 z-50">
        {children}
      </div>
    </div>
  );
}
