import gsap from "gsap";
import { toggleDarkMode } from "../../../features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function DarkModeButton() {
  const darkState = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    darkState
      ? gsap.to(".swiper", {
          translateX: 24,
          duration: 0.5,
          ease: "elastic.out(0.4,0.3)",
        })
      : gsap.to(".swiper", {
          translateX: 0,
          duration: 0.5,
          ease: "elastic.out(0.4,0.3)",
        });
  });

  return (
    <>
      <div className="absolute">
        <div
          className="bg-bistre dark:bg-englishViolet text-base cursor-pointer p-1 rounded-full w-14 h-8"
          onClick={() => {
            dispatch(toggleDarkMode());
          }}
        >
          <div className="swiper">
            <svg width="24px" height="24px">
              <circle
                r={12}
                className="fill-melon dark:fill-bistre translate-x-3 translate-y-3"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
