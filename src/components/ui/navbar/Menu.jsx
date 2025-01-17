import { useSelector } from "react-redux";
import { gsap } from "gsap";
import { useState, useEffect } from "react";
import DarkModeButton from "./DarkModeButton";

export default function Menu() {
  const menuState = useSelector((state) => state.menu.isOpen);
  const [hideMenu, setHideMenu] = useState("hidden");

  useEffect(() => {
    if (menuState) {
      // Animazioni per apertura del menu
      gsap.to(".circle", {
        duration: 1,
        delay: 0.5,
        attr: { r: 1000 },
        onStart: () => {
          setHideMenu(""); // Mostra il menu
        },
      });
      gsap.to(".switcher", { duration: 0.5, x: 0, delay: 1 });
      gsap.to(".menu", { delay: 1, duration: 0.5, x: 120, stagger: 0.1 });
    } else {
      // Animazioni per chiusura del menu
      gsap.to(".circle", {
        duration: 0.8,
        attr: { r: 0 },
        onComplete: () => {
          setHideMenu("hidden"); // Nascondi il menu
        },
      });
      gsap.to(".menu", { duration: 0.3, x: 0 });
      gsap.to(".switcher", { duration: 0.5, x: -500 });
    }
  }, [menuState]);

  return (
    <>
      <div className={`absolute top-[-38px] z-50 `}>
        <section
          className={`absolute z-30 left-[-14rem] flex flex-col gap-10 mt-40 ml-20 text-4xl text-bistre dark:text-wine  font-bold ${hideMenu} menu`}
        >
          <div className="switcher absolute right-[-180px] sm:right-[-210px] top-[-80px]">
            <DarkModeButton />
          </div>
          <a href="">
            <button className="menu">Home</button>
          </a>
          <a href="">
            <button className="menu">About</button>
          </a>
          <a href="">
            <button className="menu">Music</button>
          </a>
          <a href="">
            <button className="menu">Contact</button>
          </a>
        </section>
        <div className={`w-full h-[105vh] ${hideMenu} relative z-10 `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100vw"
            height="auto"
            cx={0}
            cy={0}
          >
            <circle
              r={0}
              className="absolute translate-y-10 z-40 fill-melon dark:fill-darkPurple circle"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
