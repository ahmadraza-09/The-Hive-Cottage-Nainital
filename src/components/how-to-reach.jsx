import React from 'react'
import HowToReachImg from "../assets/how-to-reach.jpg"
import '../css/how-to-reach.css'

const HowToReach = () => {
  return (
    <div className='how-to-reach-section'>
      <h1>How to Reach <br/> The Hive Cottage, Nainital</h1>
      <br />
      <p>Excellent roads place Nainital just 6 h 49 min (299.1 km) via NH9 from New Delhi.</p>
      <br />
      <p>Kathgodam Railway Station is just 35 kms. away.</p>
      <br />
      <p>Delhi airport is just 300 kms. away and Pantnagar airport is at a distance of 90 kms.
      </p>
      <br />
      {/* <img src={HowToReachImg} alt="" /> */}
      <br />
      <h3>Google Location Map</h3>
      <br />
      <div className="iframe-us-down">
      <iframe
            className="gmap_iframe"
            width="100%"
            zoom="5"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d893387.8784545173!2d77.8233452408244!3d28.993403648356022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x39a0a1eae428bdbd%3A0x20711fcf553a1b7e!2sThe+HIVE%2Chotel%2C+Ayarpatta%2C+Nainital%2C+Uttarakhand!3m2!1d29.3907408!2d79.45021179999999!4m5!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew+Delhi%2C+Delhi!3m2!1d28.6139391!2d77.2090212!4m5!1s0x39a09a104f620a3b%3A0xec5b3bc6756ce0d8!2sKathgodam%2C+Haldwani%2C+Uttarakhand!3m2!1d29.269326399999997!2d79.54411979999999!4m5!1s0x39a08742a40e4db1%3A0x74b2daf1a18fc663!2sPantnagar%2C+Uttarakhand!3m2!1d29.0210379!2d79.4897383!5e0!3m2!1sen!2sin!4v1519728996732"
          ></iframe>
      </div>

      
    </div>
  )
}

export default HowToReach
