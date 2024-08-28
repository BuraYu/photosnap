import beatifulStories from "../assets/home/desktop/beautiful-stories.jpg";
import designedForEveryone from "../assets/home/desktop/designed-for-everyone.jpg";
import SectionImage from "./SectionImage";
import SectionDescription from "./SectionDescription";

const Section = () => {
  return (
    <section className="section__container">
      <SectionDescription />
      <SectionImage />
    </section>
  );
};

export default Section;
