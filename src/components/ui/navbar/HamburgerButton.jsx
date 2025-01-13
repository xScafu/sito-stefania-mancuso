import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../../features/menu/menuSlice";
import { gsap } from "gsap";

export default function HamburgerButton() {
  const menuState = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();

  if (menuState === true) {
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
    gsap.to(".circle", {
      duration: 1,
      delay: 0.5,
      attr: { r: 1000 },
    });
  } else {
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
    gsap.to(".circle", {
      duration: 0.8,
      attr: { r: 0 },
    });
  }

  return (
    <>
      <div>
        <svg className="absolute ml-[-1.5rem] mt-[-2.5rem] w-screen h-screen">
          <clipPath>
            <rect width="100vw" height="100vh" x="-30" y="-50" opacity="0" />
          </clipPath>
          <circle r={0} cx={46} cy={56} className="fill-melon circle" />
        </svg>
      </div>
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
            width={40}
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
