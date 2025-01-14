import gsap from "gsap";
import { toggleDarkMode } from "../../../features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function DarkModeButton() {
  const darkState = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <>
      <div className="absolute">
        <div
          className="bg-bistre text-apricot cursor-pointer p-1 rounded-full w-14 h-8"
          onClick={() => {
            gsap.to(".swiper", { translateX: 24, duration: 0.1 });

            dispatch(toggleDarkMode());
          }}
        >
          <h1 className="swiper">{darkState ? "On" : "Off"}</h1>
        </div>
      </div>
    </>
  );
}
