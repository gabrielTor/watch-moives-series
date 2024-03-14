"use client";
import Link from "next/link";
import MovieDBLogo from "./MovieDBLogo";
import Search from "./Search";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import MobileNav from "./MobileNav";
import useClickOutside from "@/hooks/useClickOutside";

export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/?type=upcoming", label: "Upcoming Movies" },
  { path: "/?type=top_rated", label: "Top Rated MOvies" },
  { path: "/?type=series", label: "Series" },
  { path: "/?type=anime", label: "Anime" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  useClickOutside(setMobileMenuOpen);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <nav className="bg-navy shadow-2xl sticky top-0 z-10 nav-open">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 lg:flex items-center hidden">
              <MovieDBLogo />
            </div>
            <button
              aria-label="meun"
              onClick={toggleMenu}
              className="flex items-center lg:hidden"
            >
              <HiMenuAlt2 className="text-white text-4xl xs:text-5xl" />
            </button>
            <span className="hidden sm:ml-6 lg:flex my-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  aria-label={link.label}
                  className="text-gray-300 hover:bg-aqua hover:text-white px-3 py-2 rounded-md font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </span>
            <MobileNav openNav={mobileMenuOpen} onClose={toggleMenu} />
          </div>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
