import createAndShare from "../assets/home/desktop/create-and-share.jpg";
import beatifulStories from "../assets/home/desktop/beautiful-stories.jpg";
import designedForEveryone from "../assets/home/desktop/designed-for-everyone.jpg";

import SectionImage from "./SectionImage";
import SectionDescription from "./SectionDescription";

const Section = ({ layout, color }) => {
  let description = [
    {
      heading: "Create and share your photo stories. ",
      paragraph:
        "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    },
    {
      heading: "Beatiful stories every time",
      paragraph:
        "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    },
    {
      heading: "Designed for everyone",
      paragraph:
        "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
    },
  ];

  return (
    <section className="section__container">
      {layout === "1" ? (
        color === "black" ? (
          <>
            <SectionDescription theme={"black"} content={description[0]} />
            <SectionImage content={createAndShare} />
          </>
        ) : (
          <>
            <SectionDescription theme={"white"} content={description[2]} />
            <SectionImage content={designedForEveryone} />
          </>
        )
      ) : (
        <>
          <SectionImage content={beatifulStories} />
          <SectionDescription theme={"white"} content={description[1]} />
        </>
      )}
    </section>
  );
};

export default Section;
