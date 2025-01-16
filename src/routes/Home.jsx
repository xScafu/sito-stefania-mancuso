import Body from "../components/Body";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="border-2 border-bistre overflow-hidden">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}
