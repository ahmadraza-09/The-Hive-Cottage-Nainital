import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/explore-rooms-section.css";
import RoomCard from "./room-card";
import FamilySuite from "../assets/rooms/family-room/1.jpg"; // Add more images if needed
import SuperDeluxeRoom from "../assets/rooms/super-deluxe-room/1.jpg"; // Add more images if needed

const ExploreRoomsSection = () => {
  const navigate = useNavigate();
  const rooms = [
    {
      id: 1,
      image: FamilySuite,
      title: "FAMILY SUITE",
      description:
      "The Family Suite offers spacious and elegant accommodations designed for families. With separate living areas and modern amenities, it ensures comfort and convenience. Perfect for creating special moments with your loved ones.",
      price: 11000 ,
    },
    {
      id: 2,
      image: SuperDeluxeRoom,
      title: "SUPER DELUXE ROOM",
      description:
        "The Super Deluxe Room offers a perfect blend of elegance and comfort. With stylish interiors, modern amenities, and a cozy ambiance, it is designed for a luxurious and relaxing stay. Ideal for guests seeking sophistication and convenience.",
      price: 6000,
    },
    
  ];

  return (
    <section className="explore-rooms-section">
      <div className="explore-rooms-header">
        <div className="explore-rooms-header-left swipe-left">
          <h2>Explore Our Rooms</h2>
          <h4>Choose a room according to your budget</h4>
        </div>
        <div className="explore-rooms-header-right swipe-right">
          <button
            onClick={() => {
              navigate("/rooms");
            }}
          >
            View All Rooms <i className="fa-solid fa-caret-right"></i>
          </button>
        </div>
      </div>
      <div className="explore-rooms-cards swipe">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            image={room.image}
            title={room.title}
            description={room.description}
            price={room.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ExploreRoomsSection;
