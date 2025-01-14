import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../../features/menu/menuSlice";
import { gsap } from "gsap";

export default function HamburgerButton() {
  const menuState = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();

  if (menuState === true) {
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

  return (
    <>
      <button onClick={() => dispatch(toggleMenu())}>
        <div className="relative">
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
              className="stroke-bistre stroke-1"
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
              className="stroke-bistre stroke-1 relative top-10 "
            />
          </svg>
        </div>
      </button>
    </>
  );
}
