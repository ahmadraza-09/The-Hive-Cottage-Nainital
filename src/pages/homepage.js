import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TopBanner from '../components/top-banner';
import SocialMediaFixed from '../components/socialmedia-fixed';
import HeroSection from '../components/hero-section';
import IntroductionSection from '../components/introduction-section';
import Services from '../components/services';
import ExploreRoomsSection from '../components/explore-rooms-section';


const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>The Hive Cottage - Luxury Stay in Nainital</title>
                <meta name="description" content="Experience the charm of The Hive Cottage, a luxury heritage stay in Nainital. Nestled in serene surroundings, our boutique property offers breathtaking views, exceptional hospitality, and an unforgettable retreat in the hills." />
                <meta name="keywords" content="The Hive Cottage Nainital, luxury stay Nainital, heritage cottage Nainital, boutique hotel Nainital, best cottages in Nainital, Nainital hill station stay, premium accommodations Nainital, peaceful retreat Nainital" />
                <link rel="canonical" href="https://www.thehivecottagenainital.com/" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "The Hive Cottage Nainital",
                        "telephone": "+91-8743000181",
                        "url": "https://www.thehivecottagenainital.com/"
                    })}
                </script>
            </Helmet>

            <TopBanner />
            <Navbar />
            <HeroSection />
            <IntroductionSection />
            <ExploreRoomsSection />
            <Services />
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default HomePage;
