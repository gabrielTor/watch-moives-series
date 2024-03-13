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
      className="text-white flex items-center bg-gray-600 h-fit rounded-3xl px-4 py-2"
    >
      <input
        type="search"
        name="search"
        className="bg-transparent border-transparent focus:border-transparent focus:ring-0 pr-2"
        placeholder="Search"
      />
      <IoSearch className="text-lg" />
    </form>
  );
}
