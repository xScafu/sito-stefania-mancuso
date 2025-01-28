import { useRef } from "react";
import HamburgerButton from "./ui/navbar/HamburgerButton";
import Logo from "./ui/navbar/Logo";
import Menu from "./ui/navbar/Menu";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { toggleNavbarAnimation } from "../features/animations/animationsSlice";
import { useDispatch } from "react-redux";
import NavMenu from "./ui/navbar/NavMenu";
import DarkModeButton from "./ui/navbar/DarkModeButton";

export default function Navbar() {
  gsap.registerPlugin(useGSAP());

  const navbarContainer = useRef();
  const dispatch = useDispatch();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(".logo", { translateY: -100 }, { translateY: 0, duration: 1 });
      tl.fromTo(
        ".hamButton",
        { translateX: -100 },
        {
          translateX: 0,
          duration: 1,
          ease: "elastic.out(1,0.75)",
          onComplete: () => {
            dispatch(toggleNavbarAnimation());
          },
        }
      );
    },
    { scope: navbarContainer }
  );

  return (
    <div className="relative" ref={navbarContainer}>
      <Menu />
      <div className="p-5 flex justify-center md:justify-between md:items-center bg-apricot dark:bg-englishViolet">
        <div className="hamButton z-50 md:hidden">
          <HamburgerButton />
        </div>
        <div className="logo w-[18rem] xl:hidden">
          <Logo />
        </div>
        <div className="mx-5 xs:hidden md:inline">
          <NavMenu />
        </div>
        <div className="xs:hidden md:inline mx-5">
          <DarkModeButton />
        </div>
        <div className="w-[40px] md:hidden"></div>
      </div>
    </div>
  );
}
