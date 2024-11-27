import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TopBanner from "../components/top-banner";
import SocialMediaFixed from "../components/socialmedia-fixed";
import IntroductionSection from "../components/introduction-section";
import Services from "../components/services";

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About The Hive Cottage - Luxury Heritage Stay in Nainital</title>
                <meta name="description" content="Discover the story behind The Hive Cottage, a luxury heritage property in Nainital. Learn about our commitment to exceptional hospitality, stunning surroundings, and creating an unforgettable retreat experience in the hills." />
                <meta name="keywords" content="About The Hive Cottage, heritage hotel Nainital, luxury stay Nainital, boutique accommodation Nainital, Nainital history, peaceful retreat Nainital, The Hive Cottage heritage" />
                <link rel="canonical" href="https://www.thehivecottagenainital.com/about" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "The Hive Cottage Nainital",
                        "telephone": "+91-8743000181",
                        "url": "https://www.thehivecottagenainital.com/about"
                    })}
                </script>
            </Helmet>


            <TopBanner />
            <Navbar />
            {/* <About/> */}
            <IntroductionSection />
            <Services />
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default AboutPage;
