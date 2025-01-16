import HamburgerButton from "./ui/navbar/HamburgerButton";
import Logo from "./ui/navbar/Logo";
import Menu from "./ui/navbar/Menu";

export default function Navbar() {
  return (
    <div className="sticky">
      <Menu />
      <div className="flex justify-center bg-apricot dark:bg-englishViolet">
        <div>
          <HamburgerButton />
        </div>
        <div className="my-5">
          <Logo />
        </div>
        <div className="w-[40px]"></div>
      </div>
    </div>
  );
}
