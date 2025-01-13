import BackgroundImage from "./ui/body/BackgroundImage";
import News from "./ui/body/News";
import Title from "./ui/body/Title";
import MainButton from "./ui/buttons/MainButton";

export default function Body() {
  return (
    <>
      <div className="flex items-end justify-end mt-10 relative z-0">
        <Title />
        <BackgroundImage />
      </div>
      <div className="text-start mt-5 ml-6 ">
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
    </>
  );
}
