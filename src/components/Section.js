import createAndShare from "../assets/home/desktop/create-and-share.jpg";
import beatifulStories from "../assets/home/desktop/beautiful-stories.jpg";
import designedForEveryone from "../assets/home/desktop/designed-for-everyone.jpg";

const Section = () => {
  return (
    <section className="section__container">
      <div className="section__description-container">
        <h1 className="section__heading">
          create and share your photo stories.
        </h1>
        <p className="section__description">
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>
        <div className="section__button-container">
          <button className="section__button" aria-label="Get an Invite">
            Get an Invite
          </button>
          <span className="section__button-img" aria-hidden="true">
            →
          </span>
        </div>
      </div>
      <div className="section__img">
        <img
          src={createAndShare}
          alt="Man looking at a lake with camera in hand"
        />
      </div>
    </section>
  );
};

export default Section;
