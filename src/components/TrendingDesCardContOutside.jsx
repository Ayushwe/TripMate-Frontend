import React, { useRef } from "react";
import TrendingDesCard from "./TrendingDesCard";

// Update with actual image paths for destinations outside of India
import destination1 from "../assets/trending-destination-outside-img/paris.jpg";
import destination2 from "../assets/trending-destination-outside-img/new-york.jpg";
import destination3 from "../assets/trending-destination-outside-img/tokyo.jpg";
import destination4 from "../assets/trending-destination-outside-img/london.jpg";
import destination5 from "../assets/trending-destination-outside-img/sydney.jpg";
import destination6 from "../assets/trending-destination-outside-img/rome.jpg";
import destination7 from "../assets/trending-destination-outside-img/dubai.jpg";
import destination8 from "../assets/trending-destination-outside-img/singapore.jpg";
import destination9 from "../assets/trending-destination-outside-img/los-angels.jpg";
import destination10 from "../assets/trending-destination-outside-img/cape-town.jpg";

const TrendingDesCardContOutside = () => {
  const scrollContainerRef = useRef(null);
  const imageWidth = 270; // Width of one image in pixels
  const numberOfImagesToScroll = 4; // Number of images to scroll at a time
  const scrollOffset = imageWidth * numberOfImagesToScroll;

  // Function to scroll the container
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
    <div className="relative max-w-full overflow-hidden py-4">
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
        <div className="flex flex-nowrap">
          <TrendingDesCard image={destination1} destinationName="Paris" />
          <TrendingDesCard image={destination2} destinationName="New York" />
          <TrendingDesCard image={destination3} destinationName="Tokyo" />
          <TrendingDesCard image={destination4} destinationName="London" />
          <TrendingDesCard image={destination5} destinationName="Sydney" />
          <TrendingDesCard image={destination6} destinationName="Rome" />
          <TrendingDesCard image={destination7} destinationName="Dubai" />
          <TrendingDesCard image={destination8} destinationName="Singapore" />
          <TrendingDesCard image={destination9} destinationName="Los Angeles" />
          <TrendingDesCard image={destination10} destinationName="Cape Town" />
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

export default TrendingDesCardContOutside;
