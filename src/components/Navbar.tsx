import Link from "next/link";
import MovieDBLogo from "./MovieDBLogo";
import Search from "./Search";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/?type=upcoming", label: "Upcoming Movies" },
  { path: "/?type=top_rated", label: "Top Rated MOvies" },
  { path: "/?type=series", label: "Series" },
  { path: "/?type=anime", label: "Anime" },
];

const Navbar = () => {
  return (
    <nav className="bg-navy shadow-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <MovieDBLogo />
            </div>
            <span className="hidden sm:ml-6 sm:flex my-auto">
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
          </div>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
