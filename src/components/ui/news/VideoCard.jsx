const videoArray = [
  {
    name: "DISEASE - LADY GAGA || Cover by Stefania Mancuso",
    url: "https://www.youtube.com/embed/yszvMDHIvFM?si=JEIslr0ja-82s6KF",
  },
  {
    name: "[RAI RADIO 2] Stefania Mancuso @ live in “Sogni di Gloria” (INTERVISTA COMPLETA) 25/11/2024",
    url: "https://www.youtube.com/embed/0odAoCszTZk?si=YrLR6n1dWS4HdeHr",
  },
  {
    name: "UNDERDOG - ALICIA KEYS || Cover by Stefania Mancuso",
    url: "https://www.youtube.com/embed/uPx_8QSQUO8?si=STDSENqxWctrwlNZ",
  },
  {
    name: "HALLELUJAH - ALEXANDRA BURKE || Cover by Stefania Mancuso",
    url: "https://www.youtube.com/embed/f7HJGGKMplA?si=bRcxTFZ6zErzPztC",
  },
];

export default function VideoCard() {
  let videoCard = videoArray.map((video) => (
    <>
      <iframe
        type="text/html"
        src={video.url}
        width="100%"
        height="200px"
        className="mt-20 md:h-96"
      ></iframe>
      <h1 className="text-apricot dark:text-wine text-xl mt-5 font-semibold dark:font-bold">
        {video.name}
      </h1>
      <hr className="mt-20 border-apricot dark:border-wine" />
    </>
  ));

  return <div>{videoCard}</div>;
}
