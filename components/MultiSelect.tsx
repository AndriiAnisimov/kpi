import { useState } from "react";

export default function MultiSelect({ options }: { options: string[] }) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative w-64">
      <div
        className="border rounded cursor-pointer p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.length === 0
          ? "Select options"
          : selectedOptions.join(", ")}
      </div>
      {isOpen && (
        <div className="absolute bg-white border rounded shadow-lg mt-1 w-full z-10">
          {options.map((option) => (
            <div
              key={option}
              className={`p-2 cursor-pointer ${
                selectedOptions.includes(option) ? "bg-blue-500 text-white" : "bg-white"
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
