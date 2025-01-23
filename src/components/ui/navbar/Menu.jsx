import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../../features/menu/menuSlice";
import { gsap } from "gsap";
import { useState, useEffect } from "react";
import DarkModeButton from "./DarkModeButton";
import { NavLink } from "react-router";
import { toggleMenuAnimationEnded } from "../../../features/animations/animationsSlice";

export default function Menu() {
  const menuState = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();
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
          dispatch(toggleMenuAnimationEnded());
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
          dispatch(toggleMenuAnimationEnded());
        },
      });
      gsap.to(".menu", { duration: 0.3, x: 0 });
      gsap.to(".switcher", { duration: 0.5, x: -500 });
    }
  }, [menuState]);

  return (
    <>
      <div className={`absolute top-[-38px] z-40 `}>
        <section
          className={`absolute z-30 left-[-14rem] flex flex-col gap-10 mt-40 ml-20 text-4xl text-bistre dark:text-wine  font-bold ${hideMenu} menu`}
        >
          <div className="switcher absolute right-[-180px] sm:right-[-210px] top-[-80px]">
            <DarkModeButton />
          </div>

          <button className="menu" onClick={() => dispatch(toggleMenu())}>
            <NavLink to="/" viewTransition>
              {" "}
              Home
            </NavLink>
          </button>

          <button className="menu" onClick={() => dispatch(toggleMenu())}>
            <NavLink to="about" viewTransition>
              {" "}
              About
            </NavLink>
          </button>

          {/* <button className="menu" onClick={() => dispatch(toggleMenu())}>
            <NavLink to="music" viewTransition>
              {" "}
              Music
            </NavLink>
          </button> */}

          <button className="menu" onClick={() => dispatch(toggleMenu())}>
            <NavLink to="contact" viewTransition>
              {" "}
              Contact
            </NavLink>
          </button>
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
