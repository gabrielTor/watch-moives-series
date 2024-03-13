import { IoClose } from "react-icons/io5";
import MovieDBLogo from "./MovieDBLogo";

interface Props {
  openNav: boolean;
  onClose: () => void;
}

export default function MobileNav({ openNav, onClose }: Props) {
  const navClassName = `block lg:hidden fixed z-10 text-xl font-medium px-5 w-[280px] text-white bg-navy py-2 h-full overflow-auto transition-transform ${
    openNav ? "-translate-x-4" : "-translate-x-[100dvw]"
  }`;
  return (
    <nav className={navClassName}>
      <span className="flex items-center justify-between">
        <IoClose className="text-4xl" onClick={onClose} />
        <MovieDBLogo />
      </span>
    </nav>
  );
}
