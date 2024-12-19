import BackgroundImage from "./ui/body/BackgroundImage";
import Title from "./ui/body/Title";

export default function Body() {
  return (
    <>
      <div className="flex">
        <Title />
        <BackgroundImage />
      </div>
    </>
  );
}
