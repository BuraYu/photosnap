import beatifulStories from "../assets/home/desktop/beautiful-stories.jpg";
import designedForEveryone from "../assets/home/desktop/designed-for-everyone.jpg";
import SectionImage from "./SectionImage";
import SectionDescription from "./SectionDescription";

const Section = ({ layout, color }) => {
  console.log(color);
  return (
    <section className="section__container">
      {layout === "1" ? (
        color === "black" ? (
          <>
            <SectionDescription theme={"black"} />
            <SectionImage />
          </>
        ) : (
          <>
            <SectionDescription theme={"white"} />
            <SectionImage />
          </>
        )
      ) : (
        <>
          <SectionImage />
          <SectionDescription theme={"white"} />
        </>
      )}
    </section>
  );
};

export default Section;
