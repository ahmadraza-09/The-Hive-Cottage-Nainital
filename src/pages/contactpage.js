import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopBanner from '../components/top-banner';
import Navbar from '../components/navbar';
import ContactUs from '../components/contact-us';
import Footer from '../components/footer';
import SocialMediaFixed from '../components/socialmedia-fixed';

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - The Hive Cottage Nainital</title>
                <meta name="description" content="Get in touch with The Hive Cottage Nainital for inquiries, bookings, or any questions. Our team is here to help you with your stay in the beautiful Nainital." />
                <meta name="keywords" content="contact Hive Cottage Nainital, Nainital hotel contact, get in touch with Hive Cottage, Hive Cottage Nainital booking, customer support Hive Cottage Nainital, hotel inquiries Nainital" />
                <link rel="canonical" href="https://www.thehivecottagenainital.com/contact" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "The Hive Cottage Nainital",
                        "telephone": "+91-8743000181",
                        "url": "https://www.thehivecottagenainital.com/contact"
                    })}
                </script>
            </Helmet>


            <TopBanner />
            <Navbar />
            <ContactUs />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default ContactPage;
