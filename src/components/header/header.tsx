import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "./navbar";

export default function Header() {
  return (
    <>
      <div className="logo flex flex-col items-center justify-center align-top">
        <Link href="/">
          <Image src="/main-logo.png" alt="logo" width={70} height={70} />
        </Link>
        <NavigationMenu />
      </div>
    </>
  );
}
