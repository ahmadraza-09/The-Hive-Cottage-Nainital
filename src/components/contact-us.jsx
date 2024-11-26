import React from "react";
import "../css/contact-us.css";

const ContactUs = () => {
  return (
    <>
      <div className="contact-us-section">
        <div className="contact-us-up">
          <div className="contact-us-left">
            <input
              type="hidden"
              name="redirect"
              value="https://yourwebsite.com/thanks.html"
            />
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="swipe-left"
            >
              <h2>GET IN TOUCH</h2>
              <input
                type="hidden"
                name="subject"
                value="The Hive Cottage Nainital"
              />
              <input
                type="hidden"
                name="from_name"
                value="Query The Hive Cottage Nainital"
              />
              <input
                type="hidden"
                name="access_key"
                value="cfcb3d81-370f-407a-a5d9-fd6f622fe78c"
              ></input>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <input
                type="text"
                name="mobilenumber"
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                required
              />

              {/* Message Textarea */}
              <textarea name="message" placeholder="Enter your query here..." />

              {/* Submit Button */}
              <button type="submit" name="submit">
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Info Section */}
          <div className="contact-us-right swipe">
            <div className="contact-header-box">
              <h2>Contact info</h2>
              <p>
                Have any Queries? Let us know. We will clear it for you at the
                best.
              </p>
            </div>
            {/* Office Info */}
            <div className="contact-box">
              <div className="contact-box-left">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact-box-right">
                <h3>Office</h3>
                <p>

                Ayarpatta, Nainital, Uttarakhand 263002
                </p>
              </div>
            </div>
            {/* Email Info */}
            <div className="contact-box">
              <div className="contact-box-left">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-box-right">
                <h3>Email</h3>
                <a
                  href="mailto:booking@rchronline.com"
                  target="_blank"
                  aria-label="mail us for hotel booking"
                >
                  booking@rchronline.com
                </a>
              </div>
            </div>
            {/* Phone Info */}
            <div className="contact-box">
              <div className="contact-box-left">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-box-right">
                <h3>Phone</h3>
                <a
                  href="tel:+918743000181"
                  target="_blank"
                  aria-label="call us for hotel booking"
                >
                  +91 8743000181
                </a>
                <a
                  href="tel:+918743000120"
                  target="_blank"
                  aria-label="call us for hotel booking"
                >
                  +91 8743000120
                </a>
                <a
                  href="tel:+918743000197"
                  target="_blank"
                  aria-label="call us for hotel booking"
                >
                  +91 8743000197
                </a>
                <a
                  href="tel:+918743000182"
                  target="_blank"
                  aria-label="call us for hotel booking"
                >
                  +91 8743000182
                </a>

              </div>
            </div>
          </div>
        </div>
        <div className="contact-us-down">
          <iframe
            className="gmap_iframe"
            width="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13905.218836572352!2d79.450203!3d29.390641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a1eae428bdbd%3A0x20711fcf553a1b7e!2sThe%20Hive%20Cottage!5e0!3m2!1sen!2sus!4v1732620199405!5m2!1sen!2sus"
          ></iframe>
          
        </div>
      </div>
    </>
  );
};

export default ContactUs;
