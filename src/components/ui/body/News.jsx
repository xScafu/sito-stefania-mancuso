import VideoCard from "../news/VideoCard";

export default function News() {
  return (
    <>
      <div className="bg-bistre dark:bg-englishViolet p-5 mt-10">
        <h1 className="text-4xl font-bold text-apricot dark:text-bistre">
          Latest
        </h1>
        <VideoCard />
      </div>
    </>
  );
}
