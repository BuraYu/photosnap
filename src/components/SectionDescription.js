const SectionDescription = () => {
  return (
    <div className="section__description-container">
      <h1 className="section__heading">create and share your photo stories.</h1>
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
  );
};

export default SectionDescription;
