import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import TopBanner from '../components/top-banner';
import Footer from '../components/footer';
import OurGallery from '../components/our-gallery';
import SocialMediaFixed from '../components/socialmedia-fixed';

const GalleryPage = () => {
    return (
        <>
            <Helmet>
                <title>Gallery - The Hive Cottage Nainital</title>
                <meta name="description" content="Explore the beautiful gallery of The Hive Cottage Nainital. View stunning images of the property, surroundings, rooms, and scenic views of Nainital." />
                <meta name="keywords" content="Hive Cottage Nainital gallery, Nainital hotel images, cottage rooms Nainital, Nainital scenic views, The Hive Cottage photos, Nainital hotel rooms, Nainital tourism gallery" />
                <link rel="canonical" href="https://www.thehivecottagenainital.com/gallery" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "The Hive Cottage Nainital",
                        "telephone": "+91-8743000181",
                        "url": "https://www.thehivecottagenainital.com/gallery"
                    })}
                </script>
            </Helmet>




            <TopBanner />
            <Navbar />
            <OurGallery />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default GalleryPage;
