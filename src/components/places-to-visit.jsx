import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/places-to-visit.css";
import UnderConstruction from "../assets/under-construction.jpg";

const PlacesToVisit = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="places-to-visit-section">
        <h1 className="swipe">Places To Visit</h1>
        <br />
        <div className="places-to-visit-container">
          <div className="places-to-visit-card places-to-visit-card1 swipe">
            <div className="places-to-visit-card-content">
              <h2>ECO CAVE PARK</h2>
              <p>

                The Eco Cave Garden in Nainital features six animal-shaped natural rocky caves, including the Panther, Tiger, and Bat Caves. Located near Mall Road on Kaladungi Road, it offers an adventurous experience, showcasing the Kumaon region's wildlife habitat. With a musical fountain, hanging gardens, and old-school lamps, it’s a must-visit destination for nature and adventure lovers.
              </p>
            </div>
          </div>
          <div className="places-to-visit-card places-to-visit-card2 swipe">
            <div className="places-to-visit-card-content">
              <h2>NAINA DEVI TEMPLE</h2>
              <p>

                The Naina Devi Temple, a revered Shakti Peeth of Hinduism, is a sacred site of devotion in Nainital. Dedicated to Goddess Naina Devi, symbolized by her two eyes, the temple sits atop the Naina hillock at the northern end of Naini Lake. Drawing thousands of devotees yearly, it holds spiritual significance, with nearby shops offering prasad and pooja items.
              </p>
            </div>
          </div>
          <div className="places-to-visit-card places-to-visit-card3 swipe">
            <div className="places-to-visit-card-content">
              <h2>MALL ROAD</h2>
              <p>

                The Mall Road in Nainital, a bustling 1.5 km stretch parallel to Naini Lake, connects Mallital and Tallital. A hub for food, shopping, and culture, it offers local crafts, woolens, momos, and candles. Built by the British (1841-1885) and now Govind Ballabh Pant Marg, it retains its iconic name and charm, making it a must-visit destination.
              </p>
            </div>
          </div>
          <div className="places-to-visit-card places-to-visit-card4 swipe">
            <div className="places-to-visit-card-content">
              <h2>RAJ BHAWAN</h2>
              <p>
                The second Raj Bhavan or Governor's House of Uttarakhand is located in Nainital, it is the summer retreat of the governor of Uttarakhand. In the pre-Independence era, Nainital served as the summer capital of United Provinces and this building, built like a Scottish castle was christened
              </p>
            </div>
          </div>


        </div>
      </section>

    </>

  );
};

export default PlacesToVisit;
