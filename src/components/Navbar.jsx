import { useRef } from "react";
import HamburgerButton from "./ui/navbar/HamburgerButton";
import Logo from "./ui/navbar/Logo";
import Menu from "./ui/navbar/Menu";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { toggleNavbarAnimation } from "../features/animations/animationsSlice";
import { useDispatch } from "react-redux";

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
      <div className="flex justify-center bg-apricot dark:bg-englishViolet">
        <div className="hamButton z-50">
          <HamburgerButton />
        </div>
        <div className="my-5 logo">
          <Logo />
        </div>
        <div className="w-[40px]"></div>
      </div>
    </div>
  );
}
