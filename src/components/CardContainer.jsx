import React from "react";
import { FaHotel, FaPlane, FaCar } from "react-icons/fa";
import Card from "./Card";

const CardContainer = () => {
  return (
    <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8">
      <Card
        icon={FaHotel}
        heading="Hotel Booking"
        paragraph="Find the best hotels for your stay."
      />
      <Card
        icon={FaPlane}
        heading="Flight Booking"
        paragraph="Book flights to your favorite destinations."
      />
      <Card
        icon={FaCar}
        heading="Car Rentals"
        paragraph="Rent a car and explore the city at your own pace."
      />
    </div>
  );
};

export default CardContainer;

