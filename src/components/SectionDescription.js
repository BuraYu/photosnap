const SectionDescription = ({ theme, content }) => {
  console.log(theme);
  const buttonClass =
    theme === "white" ? `section__button ${theme}` : "section__button";
  const sectionDescription =
    theme === "white"
      ? `section__description ${theme}`
      : "section__description";
  const sectionContainer =
    theme === "white"
      ? `section__description-container ${theme}`
      : "section__description-container";

  return (
    <div className={sectionContainer}>
      <h1 className="section__heading">{content.heading}</h1>
      <p className={sectionDescription}>{content.paragraph}</p>
      <div className="section__button-container">
        <button className={buttonClass} aria-label="Get an Invite">
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
