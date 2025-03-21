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

      tl.to(".logo", { duration: 2, opacity: 1, delay: 1 });
    },
    { scope: logoContainer }
  );

  return (
    <div ref={logoContainer}>
      <div className="w-[60rem] logo opacity-0">
        <Logo />
      </div>
    </div>
  );
}
