import BackgroundImage from "../body/BackgroundImage";
import News from "../body/News";
import Title from "../body/Title";
import MainButton from "../buttons/MainButton";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "../body/Carousel";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoBig from "../body/LoogoBig";
import { scrollAnimationStarted } from "../../../features/animations/animationsSlice";

export default function Body() {
  gsap.registerPlugin(useGSAP());
  gsap.registerPlugin(ScrollTrigger);

  const bodyContainer = useRef();
  const dispatch = useDispatch();
  const navbarAnimationEnded = useSelector(
    (state) => state.animations.navbarAnimationEnded
  );
  const animationStarted = useSelector(
    (state) => state.animations.scrollAnimationStarted
  );

  useGSAP(
    () => {
      const tl = gsap.timeline();
      if (navbarAnimationEnded) {
        tl.to(".backImage", {
          translateX: 0,
          duration: 1,
        });
        gsap.to(
          ".title",
          {
            scrollTrigger: ".title",
            translateX: 0,
            duration: 1,
            ease: "power2.inOut",
            onUpdate: () => dispatch(scrollAnimationStarted()),
          },
          "<"
        );
        gsap.to(".button", { scrollTrigger: ".button", opacity: 1 });
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

  let hideLogoToggle = animationStarted == true ? "hidden" : "inline";

  return (
    <div ref={bodyContainer}>
      <div
        className={`max-lg:hidden xl:${hideLogoToggle} absolute top-0 left-1/3 my-96 z-40`}
      >
        <LogoBig />
      </div>
      <div className="carousel opacity-40">
        <Carousel />
      </div>
      <div className="md:w-[35rem] mx-auto">
        <div className="flex items-end justify-end mt-10 relative z-0 ">
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
      </div>
      <News />
    </div>
  );
}
