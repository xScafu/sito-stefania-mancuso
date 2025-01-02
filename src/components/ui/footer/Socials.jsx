import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import SpotifyIcon from "../icons/SpotifyIcon";
import TiktokIcon from "../icons/TiktokIcon";
import YoutubeIcon from "../icons/YouTubeIcon";

export default function Socials() {
  return (
    <>
      <div className="flex gap-3 justify-center mt-5 mb-10">
        <a
          href="https://www.facebook.com/stefaniamancusofficial"
          target="_blank"
          rel="facebook"
        >
          <FacebookIcon />
        </a>
        <a
          href="http://instagram.com/stefaniajmmusic"
          target="_blank"
          rel="instagram"
        >
          <InstagramIcon />
        </a>

        <a
          href="http://tiktok.com/@stefaniajmmusic"
          target="_blank"
          rel="tiktok"
        >
          <TiktokIcon />
        </a>

        <a
          href="https://open.spotify.com/intl-it/artist/2zoGrxf6UDKFUVod0ujGRD?si=4n7EAx2aQpSvDrEaT4FU2g"
          target="_blank"
          rel="spotify"
        >
          <SpotifyIcon />
        </a>
        <a
          href="https://www.youtube.com/@StefaniaJMChannel"
          target="_blank"
          rel="youtube"
        >
          <YoutubeIcon />
        </a>
      </div>
    </>
  );
}
