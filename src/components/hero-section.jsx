import React, { useState } from "react";
import "../css/hero-section.css";
import Video from "../assets/the-hive-cottage-promo-video.mp4";
import SkeletonHero from "./skeleton-hero"; // Import your skeleton loader component

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Handle video load event
  const handleVideoLoad = () => {
    setIsVideoLoaded(true); // Video is loaded, show the video
  };

  return (
    <section className="hero-section">
      {!isVideoLoaded && <SkeletonHero />}{" "}
      <div className="video-background">
        {/* Show Skeleton when video is loading */}
        <video
          autoPlay
          muted
          loop
          preload="auto"
          poster="../assets/poster.png"
          onCanPlay={handleVideoLoad} // When video is ready to play, mark it as loaded
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-content swipe">
          <h1>
            Welcome to <br /> The Hive Cottage Nainital
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
