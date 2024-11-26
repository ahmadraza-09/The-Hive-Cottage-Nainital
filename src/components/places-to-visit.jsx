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
                The Eco Cave Garden is a unique attraction in Nainital, featuring a cluster of six animal-shaped natural rocky caves, including the Panther, Tiger, and Bat Caves. Located near Mall Road on Kaladungi Road, it offers an adventurous experience for children and adults alike, showcasing the wildlife habitat of the Kumaon region. Highlights include a musical fountain with audio-visual effects, hanging gardens, and charming old-school petroleum lamps. Maintained by Nainital Tourism, this destination is a must-visit for its blend of nature, adventure, and educational significance.
              </p>
            </div>
          </div>
          <div className="places-to-visit-card places-to-visit-card2 swipe">
            <div className="places-to-visit-card-content">
              <h2>NAINA DEVI TEMPLE</h2>
              <p>
                The Naina Devi Temple, one of the revered Shakti Peeths of Hinduism, is a sacred site of deep devotion in Nainital. Dedicated to Goddess Naina Devi, represented by her two eyes, the temple is situated atop the Naina hillock at the northern end of the picturesque Naini Lake. Drawing thousands of devotees each year, it is a place of spiritual significance. Nearby shops offer prasad and pooja items, adding to the vibrant atmosphere of this holy site.
              </p>
            </div>
          </div>
          <div className="places-to-visit-card places-to-visit-card3 swipe">
            <div className="places-to-visit-card-content">
              <h2>MALL ROAD</h2>
              <p>

                The Mall Road in Nainital, synonymous with the city itself, is a bustling 1.5 km stretch running parallel to Naini Lake, connecting Mallital and Tallital. A hub for culture, food, and shopping, it offers everything from local crafts and woolens to delicious momos and aromatic candles. Originally built by the British between 1841-1885, it is now officially Govind Ballabh Pant Marg but retains its iconic name. Maintained by PWD, the road sees strict traffic rules, especially during peak seasons. Lined with hotels, shops, restaurants, and cafes, it’s a must-visit destination for strolling and soaking in Nainital's charm.
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
