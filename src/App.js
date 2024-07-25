import "./App.css";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Info from "./components/Info";
import Footer from "./components/Footer";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Section />
      <Section />
      <Story />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
