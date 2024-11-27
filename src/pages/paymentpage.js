import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import TopBanner from '../components/top-banner';
import Footer from '../components/footer';
import Payment from '../components/payment';
import SocialMediaFixed from '../components/socialmedia-fixed';

const PaymentPage = () => {
    return (
        <>
            <Helmet>
                <title>Payment - The Hive Cottage Nainital</title>
                <meta name="description" content="Secure and easy payment options at The Hive Cottage Nainital. Book your stay at one of the most beautiful cottages in Nainital and pay through various secure methods." />
                <meta name="keywords" content="Hive Cottage Nainital payment, Nainital hotel booking, secure hotel payment options, online payment for Hive Cottage, Nainital stay payment, payment methods hotel Nainital" />
                <link rel="canonical" href="https://www.thehivecottagenainital.com/payment" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "The Hive Cottage Nainital",
                        "telephone": "+91-8743000181",
                        "url": "https://www.thehivecottagenainital.com/payment"
                    })}
                </script>
            </Helmet>




            <TopBanner />
            <Navbar />
            <Payment />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default PaymentPage;
