import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopBanner from '../components/top-banner';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SocialMediaFixed from '../components/socialmedia-fixed';
import HowToReach from '../components/how-to-reach';

const HowToReachPage = () => {
    return (
        <>
            <Helmet>
                <title>How to Reach The Hive Cottage Nainital</title>
                <meta name="description" content="Find out how to easily reach The Hive Cottage Nainital. Whether you are traveling by road, rail, or air, we provide all the details for a hassle-free journey to Nainital." />
                <meta name="keywords" content="How to reach The Hive Cottage Nainital, directions to Hive Cottage, Nainital travel guide, Nainital by car, Nainital by train, Nainital by bus, Nainital hotel location" />
                <link rel="canonical" href="https://www.thehivecottagenainital.com/how-to-reach" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Place",
                        "name": "The Hive Cottage Nainital",
                        "description": "Find out how to reach The Hive Cottage Nainital, located in the beautiful hill station of Nainital. Get directions for travel by car, train, or bus.",
                        "url": "https://www.thehivecottagenainital.com/how-to-reach",
                        "telephone": "+91-8743000181",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Ayarpatta, Nainital",
                            "addressRegion": "Uttarakhand",
                            "PostalCode": "263002",
                            "addressCountry": "IN"
                        }
                    })}
                </script>
            </Helmet>



            <TopBanner />
            <Navbar />
            <HowToReach />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default HowToReachPage;
