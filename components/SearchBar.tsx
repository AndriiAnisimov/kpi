import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, clearSearchQuery } from "@/store/slices/searchSlice";
import { RootState } from "@/store";
import Icon from "@/components/shared/Icon";

export default function SearchBar() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.search.query);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleClearSearch = () => {
    dispatch(clearSearchQuery());
  };

  return (
    <div className="relative mt-4 w-full">
      <input
        type="text"
        value={searchQuery}
        placeholder="Type to search..."
        onChange={handleSearch}
        className="border rounded px-10 py-2 w-full focus:border-gray-500 focus:outline-none"
      />

      <Icon name="MagnifyingGlassIcon" className="absolute left-3 top-2.5 w-5 h-5" />

      {searchQuery && (
        <button
          onClick={handleClearSearch}
          className="absolute right-3 top-2.5 bg-slate-200 rounded w-5 h-5"
        >
          <Icon name="XMarkIcon" className="w-[20px] h-[20px]" />
        </button>
      )}
    </div>
  );
}
