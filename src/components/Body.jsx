import BackgroundImage from "./ui/body/BackgroundImage";
import News from "./ui/body/News";
import Title from "./ui/body/Title";
import MainButton from "./ui/buttons/MainButton";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { useSelector } from "react-redux";

export default function Body() {
  gsap.registerPlugin(useGSAP());

  const bodyContainer = useRef();
  // const dispatch = useDispatch();
  const navbarAnimationEnded = useSelector(
    (state) => state.animations.navbarAnimationEnded
  );

  useGSAP(
    () => {
      const tl = gsap.timeline();
      if (navbarAnimationEnded) {
        tl.to(".backImage", {
          translateX: 0,
          duration: 1,
          onComplete: () => {},
        })
          .to(
            ".title",
            { translateX: 0, duration: 1, ease: "power2.inOut" },
            "<"
          )
          .to(".button", { opacity: 1 });
      } else {
        tl.to(".backImage", { translateX: 500 })
          .to(".title", {
            translateX: -500,
          })
          .to(".button", { opacity: 0 });
      }
    },
    { scope: bodyContainer, dependencies: [navbarAnimationEnded] }
  );

  return (
    <div ref={bodyContainer}>
      <div className="flex items-end justify-end mt-10 relative z-0">
        <div className="absolute translate-x-[-500px] z-40 left-5 py-2 px-4 bg-apricot dark:bg-englishViolet title">
          <Title />
        </div>
        <div className="relative backImage translate-x-[500px]">
          <BackgroundImage />
        </div>
      </div>
      <div className="text-start mt-5 ml-6 button opacity-0">
        <a
          href="https://songwhip.com/stefaniamancuso/ma-che-ne-sai-di-me"
          target="_blank"
        >
          <MainButton>
            <p className="text-xl font-bold">Ascolta ora</p>
          </MainButton>
        </a>
      </div>
      <News />
    </div>
  );
}
