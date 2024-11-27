import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import SuperDeluxeRoom from '../components/super-deluxe-room'
import SocialMediaFixed from '../components/socialmedia-fixed'


const SuperDeluxeRoomPage = () => {

    return (
        <>
            <Helmet>
                <title>Super Deluxe Room - The Hive Cottage Nainital | Premium Luxury Accommodation</title>
                <meta name="description" content="Indulge in the opulence of our Super Deluxe Room at The Hive Cottage, Nainital. With lavish interiors, modern amenities, and stunning views, this room provides a perfect blend of comfort and luxury for an unforgettable stay." />
                <meta name="keywords" content="Super Deluxe Room The Hive Cottage Nainital, luxury room Nainital, premium accommodation Nainital, Nainital super deluxe rooms, best deluxe rooms Nainital, The Hive Cottage super deluxe room, luxury stay Nainital" />
                <link rel="canonical" href="https://www.thehivecottagenainital.com/super-deluxe-room" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HotelRoom",
                        "name": "Super Deluxe Room - The Hive Cottage Nainital",
                        "description": "Experience the best of luxury and comfort in the Super Deluxe Room at The Hive Cottage Nainital, with spacious interiors, premium amenities, and breathtaking views.",
                        "hotelRoomType": "Super Deluxe Room",
                        "url": "https://www.thehivecottagenainital.com/super-deluxe-room",
                        "telephone": "+91-8743000181",
                    })}
                </script>
            </Helmet>



            {<TopBanner />}
            {<Navbar />}
            {<SuperDeluxeRoom />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default SuperDeluxeRoomPage
