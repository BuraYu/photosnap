import Navbar from "../components/Navbar";
import Story from "../components/Story";
import Info from "../components/Info";
import Footer from "../components/Footer";
import Section from "../components/Section";

const Home = () => {
  return (
    <>
      <Navbar />
      <Section layout={"1"} />
      <Section layout={"2"} />
      <Section layout={"1"} />
      <Story />
      <Info />
      <Footer />
    </>
  );
};

export default Home;
