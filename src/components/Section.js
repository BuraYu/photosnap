import createAndShare from "../assets/home/desktop/create-and-share.jpg";
import beautifulStories from "../assets/home/desktop/beautiful-stories.jpg";
import designedForEveryone from "../assets/home/desktop/designed-for-everyone.jpg";

import SectionImage from "./SectionImage";
import SectionDescription from "./SectionDescription";

const Section = ({ layout, color }) => {
  const descriptions = [
    {
      heading: "Create and share your photo stories.",
      paragraph:
        "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories, and connect with others.",
    },
    {
      heading: "Beautiful stories every time",
      paragraph:
        "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps, and media from other networks. Then share your story with everyone.",
    },
    {
      heading: "Designed for everyone",
      paragraph:
        "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses—you name it.",
    },
  ];

  const getContent = () => {
    if (layout === "1") {
      if (color === "black") {
        return (
          <>
            <SectionDescription theme="black" content={descriptions[0]} />
            <SectionImage content={createAndShare} />
          </>
        );
      } else {
        return (
          <>
            <SectionDescription theme="white" content={descriptions[2]} />
            <SectionImage content={designedForEveryone} />
          </>
        );
      }
    } else {
      return (
        <>
          <SectionImage content={beautifulStories} />
          <SectionDescription theme="white" content={descriptions[1]} />
        </>
      );
    }
  };

  return <section className="section__container">{getContent()}</section>;
};

export default Section;
