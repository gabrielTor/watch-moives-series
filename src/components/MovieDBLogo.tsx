import Image from "next/image";
import logo from "@/imgs/logo.svg";

export default function MovieDBLogo() {
  return (
    <Image
      src={logo}
      alt={"movie db logo"}
      width={500}
      height={500}
      className="w-10 h-10"
      priority
    />
  );
}
