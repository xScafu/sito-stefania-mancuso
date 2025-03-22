import Footer from "../components/Footer";
import ContactPresentation from "../components/ui/contact/ContactPresentation";
import Form from "../components/ui/contact/Form";
import UnderConstruction from "../components/UnderCostruction";

export default function About() {
  return (
    <>
      <div className="my-96">
        <ContactPresentation />
        <Form />
      </div>
      <Footer />
    </>
  );
}
