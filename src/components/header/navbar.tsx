import { Button } from "../ui/button";
import { FaFutbol, FaGamepad,FaBasketballBall, FaHockeyPuck } from "react-icons/fa";
import Link from "next/link";

export default function NavigationMenu() {
  return (
    <>
      <div className="flex flex-wrap">
        <Button
          variant="secondary"
          className="w-[95px] h-[50px] rounded-none border border-black"
          asChild
        >
          <Link href="/">
            <label>Football</label>
            <FaFutbol />
          </Link>
        </Button>
        <Button
          variant="secondary"
          className="w-[95px] h-[50px] rounded-none border border-black"
          asChild
        >
          <Link href="/basketball">
            <label>Basketball</label>
            <FaBasketballBall />
          </Link>
        </Button>
        <Button
          variant="secondary"
          className="w-[95px] h-[50px] rounded-none border border-black"
          asChild
        >
          <Link href="/hockey">
            <label>Hockey</label>
            <FaHockeyPuck />
          </Link>
        </Button>
        <Button
          variant="secondary"
          className="w-[95px] h-[50px] rounded-none border border-black"
          asChild
        >
          <Link href="/esport">
            <label>Esport</label>
            <FaGamepad />
          </Link>
        </Button>
      </div>
    </>
  );
}
