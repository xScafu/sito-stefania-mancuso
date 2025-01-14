import { useSelector } from "react-redux";
import { gsap } from "gsap";
import { useState } from "react";

export default function Menu() {
  const menuState = useSelector((state) => state.menu.isOpen);
  const [hideMenu, setHideMenu] = useState("hidden");

  if (menuState === true) {
    gsap.to(".circle", {
      duration: 1,
      delay: 0.5,
      attr: { r: 1000 },
      onStart: () => {
        setHideMenu("");
      },
    });
    gsap.to(".menu", { delay: 1, duration: 0.5, x: 0, stagger: 0.1 });
  } else {
    gsap.to(".circle", {
      duration: 0.8,
      attr: { r: 0 },
      onComplete: () => {
        setHideMenu("hidden");
      },
    });
    gsap.to(".menu", { duration: 0.5, x: -500, stagger: 0.1 });
  }

  return (
    <>
      <div className={`absolute ml-[-1.5rem] mt-[-2.5rem] sm:ml-[-3rem] `}>
        <section
          className={`absolute z-10 flex flex-col gap-10 mt-40 ml-20 text-4xl ${hideMenu} menu`}
        >
          <a href="">
            <button className="menu">Home</button>
          </a>
          <a href="">
            <button className="menu">Music</button>
          </a>
          <a href="">
            <button className="menu">Contact</button>
          </a>
        </section>

        <svg className={`w-screen h-[105vh] ${hideMenu} `}>
          <circle
            r={0}
            cx={45}
            cy={57}
            className="fill-melon circle sm:translate-x-[1.5rem]"
          />
        </svg>
      </div>
    </>
  );
}
