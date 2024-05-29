import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import abstract_search from "./abstract_search.webp";

const Homepage = () => {
  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="headline-content">
        <h1 className="welcome-text">Super Search </h1>
      </div>
    ),
  };

  const foreground = {
    image: abstract_search,
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  };

  const gradientOverlay = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };

  return (
    <div className="container-body">
      <div className="introduction">
        <p>
          Our platform allows you to search for any image quickly and easily. 
          Whether you're looking for high-quality photos for your projects, inspiration 
          for your next creative endeavor, or just want to explore stunning visuals, 
          Super Search has you covered. With a sleek, user-friendly interface and powerful 
          search capabilities, finding the perfect image has never been easier. Start your 
          search now and discover a world of incredible imagery at your fingertips!
        </p>
      </div>
      <ParallaxBanner
        layers={[gradientOverlay, foreground, headline]}
        className="full-height"
        style={{ height: "100vh" }} // Ensures the ParallaxBanner takes the full viewport height
      />
    </div>
  );
};

export default Homepage;
