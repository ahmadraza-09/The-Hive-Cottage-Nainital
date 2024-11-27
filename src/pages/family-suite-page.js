import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'
import FamilySuite from '../components/family-suite'

const FamilySuitePage = () => {

    return (
        <>
            <Helmet>
                <title>Family Suite - The Hive Cottage Nainital | Luxury Family Accommodation</title>
                <meta name="description" content="Experience the comfort and luxury of our Family Suite at The Hive Cottage, Nainital. Perfect for families, this spacious suite offers stunning views, modern amenities, and a relaxing environment for an unforgettable stay." />
                <meta name="keywords" content="Family suite The Hive Cottage Nainital, family accommodation Nainital, luxury family rooms Nainital, best family hotel Nainital, Nainital family stay, family suites with views, The Hive Cottage family suite" />
                <link rel="canonical" href="https://www.thehivecottagenainital.com/family-suite" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HotelRoom",
                        "name": "Family Suite - The Hive Cottage Nainital",
                        "description": "Spacious and comfortable Family Suite at The Hive Cottage Nainital, ideal for family stays with beautiful views and premium amenities.",
                        "hotelRoomType": "Family Suite",
                        "url": "https://www.thehivecottagenainital.com/family-suite",
                        "telephone": "+91-8743000181",
                    })}
                </script>
            </Helmet>



            {<TopBanner />}
            {<Navbar />}
            {<FamilySuite />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default FamilySuitePage
