import React from 'react'
import { Helmet } from 'react-helmet'
import AboutUsSection from '../Components/AboutUsPageComponents/AboutUs-Section/AboutUsSection'
import AboutUsHeader from '../Components/AboutUsPageComponents/Header/AboutUsHeader'
import OurStoryAboutPage from '../Components/AboutUsPageComponents/OurStory - Section/OurStory-AboutPage'
import WhoWeAreAboutPage from '../Components/AboutUsPageComponents/WhoWeAre - Section/WhoWeAre-AboutPage'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function AboutUsPage() {
    return (
        <>
            <Helmet>
                <title>About us - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <Navbar />
            <AboutUsHeader />
            <AboutUsSection />
            <WhoWeAreAboutPage />
            <OurStoryAboutPage />
            <Footer />
        </>
    )
}

export default AboutUsPage