import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import SpotifyIcon from "../icons/SpotifyIcon";
import TiktokIcon from "../icons/TiktokIcon";
import YoutubeIcon from "../icons/YouTubeIcon";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Socials() {
  const socialsContainer = useRef();

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP());

  useGSAP(
    () => {
      gsap.to(".social", {
        scrollTrigger: ".social",
        ease: "elastic.out(0.3, 0.2)",
        translateY: 0,
        duration: 0.4,
        stagger: 0.1,
      });
    },
    { scope: socialsContainer }
  );

  return (
    <>
      <div
        ref={socialsContainer}
        className="flex gap-3 justify-center mt-10 mb-10"
      >
        <a
          href="https://www.facebook.com/stefaniamancusofficial"
          target="_blank"
          rel="facebook"
          className="social translate-y-20"
        >
          <FacebookIcon />
        </a>
        <a
          href="http://instagram.com/stefaniajmmusic"
          target="_blank"
          rel="instagram"
          className="social translate-y-20"
        >
          <InstagramIcon />
        </a>

        <a
          href="http://tiktok.com/@stefaniajmmusic"
          target="_blank"
          rel="tiktok"
          className="social translate-y-20"
        >
          <TiktokIcon />
        </a>

        <a
          href="https://open.spotify.com/intl-it/artist/2zoGrxf6UDKFUVod0ujGRD?si=4n7EAx2aQpSvDrEaT4FU2g"
          target="_blank"
          rel="spotify"
          className="social translate-y-20"
        >
          <SpotifyIcon />
        </a>
        <a
          href="https://www.youtube.com/@StefaniaJMChannel"
          target="_blank"
          rel="youtube"
          className="social translate-y-20"
        >
          <YoutubeIcon />
        </a>
      </div>
    </>
  );
}
