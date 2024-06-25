import { ModalInterface } from "@/interfaces/ModalInterface";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Modal({ onClose, children }: ModalInterface) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
      <div className="relative bg-white mx-auto rounded p-8 shadow-lg min-w-96 z-50">
        {children}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 w-5 h-5 text-gray-500 hover:text-gray-800"
        >
          <XMarkIcon />
        </button>
      </div>
    </div>
  );
}
