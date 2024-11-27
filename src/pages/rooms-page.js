import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import ExploreRoomsSection from '../components/explore-rooms-section'
import SocialMediaFixed from '../components/socialmedia-fixed.jsx'

const RoomsPage = () => {
    return (
        <>
            <Helmet>
            <title>Rooms at The Hive Cottage Nainital - Family Suite & Super Deluxe Room</title>
                <meta name="description" content="Explore the luxurious rooms at The Hive Cottage, Nainital. Choose from our spacious Family Suite or indulgent Super Deluxe Room, each offering premium amenities, comfort, and stunning views of the hills." />
                <meta name="keywords" content="The Hive Cottage rooms, family suite Nainital, super deluxe room Nainital, luxury accommodation Nainital, best rooms in Nainital, family suite, super deluxe suite Nainital, boutique hotel rooms, luxury rooms Nainital" />
                <link rel="canonical" href="https://www.thehivecottagenainital.com/rooms" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "The Hive Cottage Nainital",
                        "telephone": "+91-8743000181",
                        "url": "https://www.thehivecottagenainital.com/rooms"
                    })}
                </script>
            </Helmet>



            {<TopBanner />}
            {<Navbar />}
            {<ExploreRoomsSection />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default RoomsPage
