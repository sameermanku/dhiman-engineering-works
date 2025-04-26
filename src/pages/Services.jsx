import React from 'react';
import Header from '../components/Header';
import Pagetop from '../components/PageTop';
import AdvancedMachines from '../components/Services/AdvancedMachines';
import Specialization from '../components/Services/Specialization';
import CallAction from '../components/CallAction';
import Footer from '../components/Footer';

function Services() {
    return (
        <div>
            <Header/>
            <Pagetop 
                title="Our Services"
                description="Innovative Solutions for All Your Mechanical Needs. From precision plastic die molds to custom parts, we deliver high-quality solutions using cutting-edge equipment like VMC, EDM, Lathe, milling machines, and many more."
            />
            <AdvancedMachines/>
            <Specialization/>
            <CallAction/>
            <Footer/>
        </div>
    );
}

export default Services;