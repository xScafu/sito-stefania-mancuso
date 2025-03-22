import Footer from "../components/Footer";
import ContactPresentation from "../components/ui/contact/ContactPresentation";
import Form from "../components/ui/contact/Form";
import Text from "../components/ui/contact/Text";

export default function About() {
  return (
    <>
      <div className="flex flex-col lg:flex-row mx-5 lg:mx-0 gap-0 lg:gap-20 justify-center">
        <div className="my-28">
          <Text />
        </div>
        <div className="my-28">
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
}
