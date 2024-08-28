import beatifulStories from "../assets/home/desktop/beautiful-stories.jpg";
import designedForEveryone from "../assets/home/desktop/designed-for-everyone.jpg";
import SectionImage from "./SectionImage";
import SectionDescription from "./SectionDescription";

const Section = ({ layout }) => {
  console.log(layout);
  return (
    <section className="section__container">
      {layout === "1" ? (
        <>
          <SectionDescription />
          <SectionImage />
        </>
      ) : (
        <>
          <SectionImage />
          <SectionDescription />
        </>
      )}
    </section>
  );
};

export default Section;
