import HamburgerButton from "./ui/navbar/HamburgerButton";
import Logo from "./ui/navbar/Logo";
import Menu from "./ui/navbar/Menu";

export default function Navbar() {
  return (
    <div className="flex justify-center sticky top-0 z-10 bg-apricot dark:bg-englishViolet">
      <Menu />
      <div className="absolute mt-[1.8rem] mr-[18rem]">
        <HamburgerButton />
      </div>
      <div className="my-5">
        <Logo />
      </div>
    </div>
  );
}
