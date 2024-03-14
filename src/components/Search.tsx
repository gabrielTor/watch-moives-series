"use client";
import { getSearchedMovies } from "@/actions/get";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  const { push } = useRouter();
  const searchRef = useRef<HTMLFormElement>(null);
  const handleSearch = async (formData: FormData) => {
    await getSearchedMovies("1", formData);
    searchRef.current?.reset();
  };
  return (
    <form
      ref={searchRef}
      // action={handleSearch}
      className="text-white flex items-center bg-gray-600 h-fit rounded-3xl"
    >
      <input
        type="search"
        name="search"
        className="bg-transparent rounded-l-3xl pl-4 pr-2 py-2 w-44 xs:w-fit"
        placeholder="Search"
      />
      <button className="text-lg rounded-r-3xl px-4 py-3 hover:bg-gray-500">
        <IoSearch />
      </button>
    </form>
  );
}
