import React from 'react';
import Header from '../components/Header';
import Pagetop from '../components/PageTop';
import Aboutsection from '../components/About/About Section';
import CallAction from '../components/CallAction';
import Footer from '../components/Footer';

function About() {
    return(
        <div>
            <Header/>
            <Pagetop title="About Us"/>
            <Aboutsection/>
            <CallAction/>
            <Footer/>
        </div>
    )
}

export default About;