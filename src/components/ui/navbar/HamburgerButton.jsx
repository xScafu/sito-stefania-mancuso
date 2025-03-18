import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../../features/menu/menuSlice";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function HamburgerButton() {
  const menuState = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (menuState) {
      //Open animation
      gsap.to(".upperLine", {
        duration: 0.5,
        rotation: 45,
        y: 8,
        ease: "power2.inOut",
      });
      gsap.to(".underLine", {
        duration: 0.5,
        rotation: -45,
        y: -3,
        ease: "power2.inOut",
        attr: { width: 40 },
      });
    } else {
      //Close animation
      gsap.to(".upperLine", {
        duration: 0.5,
        delay: 0.8,
        rotation: 0,
        y: 0,
        ease: "power2.inOut",
      });
      gsap.to(".underLine", {
        duration: 0.5,
        delay: 0.8,
        rotation: 0,
        y: 0,
        ease: "power2.inOut",
        attr: { width: 25 },
      });
    }
  }, [menuState]);
  return (
    <>
      <button
        className="relative top-[0.5rem] z-50"
        onClick={() => dispatch(toggleMenu())}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={1}
            className="inline upperLine"
          >
            <line
              x1={0}
              x2={40}
              y1={0}
              y2={0}
              className="stroke-bistre dark:stroke-wine stroke-1 dark:stroke-2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={1}
            className="underLine"
          >
            <line
              x1={0}
              x2={40}
              y1={0}
              y2={0}
              className="line stroke-bistre dark:stroke-wine stroke-1 dark:stroke-2 relative top-10 "
            />
          </svg>
        </div>
      </button>
    </>
  );
}
