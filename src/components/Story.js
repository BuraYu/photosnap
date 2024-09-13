import calm from "../assets/stories/desktop/calm-waters.jpg";
import voyage from "../assets/stories/desktop/18-days-voyage.jpg";
import dreams from "../assets/stories/desktop/land-of-dreams.jpg";
import milkyWay from "../assets/stories/desktop/milky-way.jpg";

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "24px",
  opacity: 1, 
  transition: "opacity 0.5s ease",
};

const containerStories = {
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)", 
  height: "700px", 
  margin: 0,
  padding: 0,
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover", 
};

const Story = () => {
  return (
    <div style={grid}>
      <div style={containerStories}>
        <img src={calm} alt="Calm Waters" style={imageStyle} />
        <div className="overlay" style={overlayStyle}>
          <h1>This is the overlay for Calm Waters</h1>
        </div>
      </div>

      <div style={containerStories}>
        <img src={voyage} alt="18 Days Voyage" style={imageStyle} />
        <div className="overlay" style={overlayStyle}>
          <h1>This is the overlay for Voyage</h1>
        </div>
      </div>

      <div style={containerStories}>
        <img src={dreams} alt="Land of Dreams" style={imageStyle} />
        <div className="overlay" style={overlayStyle}>
          <h1>This is the overlay for Land of Dreams</h1>
        </div>
      </div>

      <div style={containerStories}>
        <img src={milkyWay} alt="Milky Way" style={imageStyle} />
        <div className="overlay" style={overlayStyle}>
          <h1>This is the overlay for Milky Way</h1>
        </div>
      </div>
    </div>
  );
};

export default Story;
