import Body from "../components/Body";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="border-2 border-bistre overflow-clip">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Body />
      <Footer />
    </div>
  );
}
