import Link from "next/link";
import MovieDBLogo from "./MovieDBLogo";

const portfolioLink = "https://gabrieltor.github.io/portfolio/";

export default function Footer() {
  return (
    <footer className="h-20 bg-navy text-gray-300 text-sm grid place-items-center">
      <span className="flex gap-2 items-center">
        <p className="hidden md:inline">Powered by</p>
        <MovieDBLogo className="hidden md:inline mr-4" />
        Designed and developed by Gabriel Torres -{" "}
        <Link
          className="hover:text-liteBlue"
          href={portfolioLink}
          target="_blank"
        >
          DGT
        </Link>
      </span>
    </footer>
  );
}
