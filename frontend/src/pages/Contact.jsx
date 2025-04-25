import 'react';
import Pagetop from '../components/PageTop';
import Header from '../components/Header';
import ContactSection from '../components/Contact/ContactSection';
import CallAction from '../components/CallAction';
import Footer from '../components/Footer';

function Contact() {
    return (
        <div>
            <Header/>
            <Pagetop
                title="Contact US"
                description={
                    <>
                        Do you have a question? Feel free to contact us.<br />
                        We are here to solve your problems. Your problem is our problem.
                    </>
                }
            />
            <ContactSection/>
            <CallAction/>
            <Footer/>
        </div>
    )
}

export default Contact;