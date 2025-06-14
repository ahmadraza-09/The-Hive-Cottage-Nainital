import React from "react";
import "../css/why-choose.css";
import "../css/premium-room-comp.css";
import { useNavigate } from "react-router-dom";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import image1 from "../assets/rooms/family-room/1.jpg";
import image2 from "../assets/rooms/family-room/2.jpg";
import image3 from "../assets/rooms/family-room/3.jpg";
import image4 from "../assets/rooms/family-room/4.jpg";
import image5 from "../assets/rooms/family-room/5.jpg";
import image6 from "../assets/rooms/family-room/6.jpg";


import DoubleBed from "../assets/icons/double-bed.png";
import FreshWater from "../assets/icons/water.png"
import Tv from "../assets/icons/smart-tv.png"
import Newspaper from "../assets/icons/newspaper.png"
import RoomHeater from "../assets/icons/room-heater.png"
import Bathroom from "../assets/icons/bathroom.png"
import Internet from "../assets/icons/wifi-router.png"
import Slippers from "../assets/icons/slippers.png"
import HouseKeeping from "../assets/icons/vacuum-cleaner.png";
import AirConditioner from "../assets/icons/air-conditioner.png";
import Toothbrush from "../assets/icons/toothbrush.png"

const FamilySuite = () => {
  const navigate = useNavigate();
  return (
    <section className="why-choose-section">
      <h1 className="swipe">FAMILY SUITE</h1>
      <div className="why-choose-slider">
        <Swiper
          modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          spaceBetween={30}
          slidesPerView={1}
          style={{ maxWidth: "100%", minWidth: "300px", padding: "0px 0px" }}
          pagination={{ clickable: true }}
          navigation={true}
          // breakpoints={{
          //   320: {
          //     navigation: false,
          //   },
          //   480: {
          //     navigation: false,
          //   },
          //   628: {
          //     navigation: false,
          //   },
          // }}
          className="swipe"
        >
          <SwiperSlide>
            <div className="slider-card-testimonial testimonial-content why-choose-slider-image">
              <img src={image1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card-testimonial testimonial-content why-choose-slider-image">
              <img src={image2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card-testimonial testimonial-content why-choose-slider-image">
              <img src={image3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card-testimonial testimonial-content why-choose-slider-image">
              <img src={image4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card-testimonial testimonial-content why-choose-slider-image">
              <img src={image5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card-testimonial testimonial-content why-choose-slider-image">
              <img src={image6} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="why-choose-contents room-services">
        <h2>Room Services</h2>
        <div className="flex">
          <div className="why-choose-contents-box">
            <img src={DoubleBed} alt="" />
            <h2>Double Bed</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={Internet} alt="" />
            <h2>Internet Access</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={FreshWater} alt="" />
            <h2>Desk, H/C Water</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={Tv} alt="" />
            <h2>Cable/Satellite TV</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={HouseKeeping} alt="" />
            <h2>House Keeping</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={Newspaper} alt="" />
            <h2>Complimentary Newspaper</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={RoomHeater} alt="" />
            <h2>Room Heater</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={Bathroom} alt="" />
            <h2>Attached Bathroom</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={Slippers} alt="" />
            <h2>Slippers</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={Toothbrush} alt="" />
            <h2>Toothbrush On Request</h2>
          </div>
          
        </div>
      </div>
      <div className="premium-room-comp-content room-card-price-left ">
        <h2>Family Suite</h2>
        <br />
        <h4>Off-Season Price</h4>
        <h2>
          Rs. 11000 <span>/ Night +GST With Breakfast</span>
        </h2>
        <br />
        <h4>Season Price</h4>
        <h2>
          Rs. 13000 <span>/ Night +GST With Breakfast</span>
        </h2>
        <p>

          The Family Suite offers spacious and elegant accommodations designed for families. With separate living areas and modern amenities, it ensures comfort and convenience. Perfect for creating special moments with your loved ones.
        </p>
        <button
          onClick={() => {
            navigate("/contact");
          }}
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default FamilySuite;
