import React, { useRef } from "react";
import TrendingDesCard from "./TrendingDesCard";

// Update with actual image paths
import destination1 from "../assets/trending destination-ind-img/mumbai.jpg";
import destination2 from "../assets/trending destination-ind-img/agra.jpg";
import destination3 from "../assets/trending destination-ind-img/hyderabad.jpg";
import destination4 from "../assets/trending destination-ind-img/delhi.jpg";
import destination5 from "../assets/trending destination-ind-img/goa.jpg";
import destination6 from "../assets/trending destination-ind-img/kerela.jpg";
import destination7 from "../assets/trending destination-ind-img/rajasthan.jpg";
import destination8 from "../assets/trending destination-ind-img/lucknow.jpg";
import destination9 from "../assets/trending destination-ind-img/kolkata.jpg";
import destination10 from "../assets/trending destination-ind-img/banglore.jpg";

const TrendingDesCardCont = () => {
  const scrollContainerRef = useRef(null);
  const imageWidth = 270; // Width of one image in pixels
  const numberOfImagesToScroll = 4; // Number of images to scroll at a time
  const scrollOffset = imageWidth * numberOfImagesToScroll;

  // Function to scroll the container using transform
  const scroll = (scrollAmount) => {
    const container = scrollContainerRef.current;
    if (container) {
      const currentTransform = getComputedStyle(container).transform;
      const matrix = new DOMMatrix(currentTransform);
      const currentOffset = matrix.m41 || 0; // Get current offset
      const newOffset = currentOffset + scrollAmount;
      container.style.transform = `translateX(${newOffset}px)`;
    }
  };

  return (
    <div className="relative overflow-hidden py-4">
      <button
        onClick={() => scroll(-scrollOffset)} // Scroll left by 4 images
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-md shadow-md z-10"
      >
        &lt;
      </button>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto no-scrollbar"
        style={{ whiteSpace: 'nowrap' }} // Prevent wrapping
      >
        <div className="flex">
          <TrendingDesCard image={destination1} destinationName="Mumbai" />
          <TrendingDesCard image={destination2} destinationName="Agra" />
          <TrendingDesCard image={destination3} destinationName="Hyderabad" />
          <TrendingDesCard image={destination4} destinationName="Delhi" />
          <TrendingDesCard image={destination5} destinationName="Goa" />
          <TrendingDesCard image={destination6} destinationName="Kerala" />
          <TrendingDesCard image={destination7} destinationName="Jaipur" />
          <TrendingDesCard image={destination8} destinationName="Lucknow" />
          <TrendingDesCard image={destination9} destinationName="Kolkata" />
          <TrendingDesCard image={destination10} destinationName="Bangalore" />
        </div>
      </div>
      <button
        onClick={() => scroll(scrollOffset)} // Scroll right by 4 images
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-md shadow-md z-10"
      >
        &gt;
      </button>
    </div>
  );
};

export default TrendingDesCardCont;
