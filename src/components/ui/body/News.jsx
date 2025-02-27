import VideoCard from "../news/VideoCard";

export default function News() {
  return (
    <>
      <div className="bg-bistre dark:bg-darkPurple p-5 mt-10">
        <h1 className="text-4xl font-bold dark:font-extrabold text-apricot dark:text-wine xl:text-6xl xl:ml-5">
          Latest
        </h1>
        <VideoCard />
      </div>
    </>
  );
}
