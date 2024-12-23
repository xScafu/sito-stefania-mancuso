import HamburgerButton from "./ui/navbar/HamburgerButton";
import Logo from "./ui/navbar/Logo";

export default function Navbar() {
  return (
    <div className="flex justify-center sticky">
      <div className="absolute mt-[1.8rem] mr-[18rem]">
        <HamburgerButton />
      </div>
      <div className="my-5">
        <Logo />
      </div>
    </div>
  );
}
