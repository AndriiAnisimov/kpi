import { useState, useEffect, useRef } from "react";

export default function MultiSelect({ options }: { options: string[] }) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const clearAll = () => {
    setSelectedOptions([]);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-64" ref={containerRef}>
      <div
        className="flex justify-between items-center border rounded cursor-pointer p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {selectedOptions.length === 0
            ? "Please Select"
            : selectedOptions.join(", ")}
        </span>
        {selectedOptions.length > 0 && (
          <button
            className="bg-red-500 text-white rounded px-2 py-1 ml-2"
            onClick={(e) => {
              e.stopPropagation();
              clearAll();
            }}
          >
            Clear All
          </button>
        )}
      </div>
      {isOpen && (
        <div className="absolute bg-white border rounded shadow-lg mt-1 w-full z-10">
          {options.map((option) => (
            <div
              key={option}
              className={`p-2 cursor-pointer ${
                selectedOptions.includes(option)
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              } hover:bg-blue-500 hover:text-white`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
