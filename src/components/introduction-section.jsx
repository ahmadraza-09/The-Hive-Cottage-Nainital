import React from "react";
import "../css/introduction-section.css";
import IntroductionImg from "../assets/introduction.jpg";

const IntroductionSection = () => {
  return (
    <section className="introduction-section">
      <div className="introduction-section-right swipe">
        <h1 className="after">
          Welcome To <br />
          <h1>The Hive Cottage Nainital</h1>
        </h1>
        <p>
          Nestled on a picturesque green hill in the serene Ayarpatta region, just a 10-minute walk from the vibrant Mall Road, The Hive Hotel in Nainital is a haven of tranquility. Overlooking a majestic valley, the property offers breathtaking mountain views and an immersive natural experience.

          Our lush compound is a vivid tapestry of mountain flora and fauna, featuring diverse trees like the famed Blue Magnolia, and a rich variety of wildlife, including flying squirrels, pheasants, jungle fowl, porcupines, and foxes. The melodies of birds and the flutter of butterflies create a serene atmosphere that complements the beauty of the surroundings.

          Conveniently located just 1.1 km from Nainital, The Hive Cottage boasts one of the highest-rated locations in the area. Guests consistently appreciate its unique blend of comfort, natural beauty, and proximity to local attractions, making it a standout choice for an unforgettable stay.

          We take pride in making every guest feel at home and are delighted to communicate in your language for a personalized experience. Welcome to The Hive, where nature meets comfort!
        </p>
      </div>
      <div className="introduction-section-left swipe">
        <img
          src={IntroductionImg}
          alt="The Pearl 21 Villa Image"
          loading="eager"
          width="100%"
          height="auto"
        />
      </div>
    </section>
  );
};

export default IntroductionSection;
