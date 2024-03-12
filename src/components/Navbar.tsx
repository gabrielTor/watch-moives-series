import Link from "next/link";
import MovieDBLogo from "./MovieDBLogo";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/?type=upcoming", label: "Upcoming Movies" },
  { path: "/?type=top_rated", label: "Top Rated MOvies" },
  { path: "/?type=series", label: "Series" },
  { path: "/?type=anime", label: "Anime" },
];

const Navbar = () => {
  return (
    <nav className="bg-navy shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
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
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
