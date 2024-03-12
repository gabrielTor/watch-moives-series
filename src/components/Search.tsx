import { IoSearch } from "react-icons/io5";

export default function Search() {
  return (
    <form className="text-white flex items-center bg-gray-600 h-fit rounded-3xl px-4 py-2">
      <input
        type="search"
        className="bg-transparent border-transparent focus:border-transparent focus:ring-0 pr-2"
        placeholder="Search"
      />
      <IoSearch />
    </form>
  );
}
