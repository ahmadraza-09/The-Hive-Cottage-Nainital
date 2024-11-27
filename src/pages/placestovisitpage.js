import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TopBanner from '../components/top-banner';
import SocialMediaFixed from '../components/socialmedia-fixed';
import PlacesToVisit from '../components/places-to-visit';

const PlacesToVisitPage = () => {
    return (
        <>
            <Helmet>
    <title>Places to Visit Near The Hive Cottage Nainital - Eco Cave Park, Naina Devi Temple, Mall Road & Raj Bhawan</title>
    <meta name="description" content="Discover the best places to visit in Nainital. Explore popular attractions like Eco Cave Park, Naina Devi Temple, Mall Road, Raj Bhawan, Snow View Point, Tiffin Top, Naini Lake, The Mall Road, and more. Visit Nainital’s top tourist spots and enjoy scenic beauty, culture, and history near The Hive Cottage." />
<meta name="keywords" content="places to visit in Nainital, Eco Cave Park Nainital, Naina Devi Temple, Mall Road Nainital, Raj Bhawan Nainital, Snow View Point, Tiffin Top, Naini Lake, Nainital tourist attractions, best sightseeing spots in Nainital, Nainital travel guide, famous places in Nainital, Nainital top destinations, best tourist spots Nainital, Nainital tourism" />
    <link rel="canonical" href="https://www.thehivecottagenainital.com/places-to-visit" />

    {/* JSON-LD structured data */}
    <script type="application/ld+json">
        {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "The Hive Cottage Nainital",
            "telephone": "+91-8743000181",
            "url": "https://www.thehivecottagenainital.com/places-to-visit"
        })}
    </script>
</Helmet>

            <TopBanner />
            <Navbar />
            <PlacesToVisit />
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default PlacesToVisitPage;
