import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Home/Hero';
import Machines from '../components/Home/Machines';
import Features from '../components/Home/Features';
import Clients from '../components/Home/Clients';
import Testimonial from '../components/Home/Testimonial';
import CallAction from '../components/CallAction';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Home() {
  return (
    <div>

      {/* Page Preloader */}
      <div id="preloader">
        <div className="loader"></div>
      </div>

      <Header/>
      <Hero/>
      <Machines/>
      <Features/>
      <Clients/>
      <Testimonial/>
      <CallAction/>
      <Footer/>

    </div>
  );
}

export default Home;