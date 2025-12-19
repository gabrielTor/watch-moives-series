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
  { path: "/?type=top_rated", label: "Top Rated Movies" },
  { path: "/series", label: "Series" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useClickOutside(setMobileMenuOpen);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-50 bg-navy/90 backdrop-blur border-b border-white/10">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <div className="hidden lg:flex items-center">
              <MovieDBLogo />
            </div>

            {/* Mobile menu button */}
            <button
              aria-label="Open menu"
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition"
            >
              <HiMenuAlt2 className="text-3xl" />
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-300
                             hover:text-white hover:bg-white/10
                             transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <MobileNav openNav={mobileMenuOpen} onClose={toggleMenu} />
          </div>

          {/* Right */}
          <div className="flex items-center">
            <Search />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
