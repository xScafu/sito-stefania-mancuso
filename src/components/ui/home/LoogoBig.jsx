import gsap from "gsap";
import Logo from "../navbar/Logo";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function LogoBig() {
  gsap.registerPlugin(useGSAP);
  const logoContainer = useRef();

  useGSAP(
    () => {
      let tl = gsap.timeline();

      tl.to(".draw-me", { duration: 2, opacity: 1, delay: 1 });
    },
    { scope: logoContainer }
  );

  return (
    <div ref={logoContainer}>
      <div className="w-[50rem] mx-auto my-[22rem] draw-me opacity-0">
        <Logo />
      </div>
    </div>
  );
}
