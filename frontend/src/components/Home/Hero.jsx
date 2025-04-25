import "react";
import OwlCarousel from "react-owl-carousel";

const slides = [
    { id: 1, title: "Die", subtitle: "Mould", img: `${import.meta.env.BASE_URL}img/hero-slider/1.jpg` },
    { id: 2, title: "CAD-CAM", subtitle: "Designing", img: `${import.meta.env.BASE_URL}img/hero-slider/2.jpg` },
    { id: 3, title: "Job", subtitle: "Work", img: `${import.meta.env.BASE_URL}img/hero-slider/3.jpg` },
    { id: 4, title: "Custom", subtitle: "Parts", img: `${import.meta.env.BASE_URL}img/hero-slider/4.jpg` }
];

function Hero() {
    return (
        <section className="hero-section">
            <OwlCarousel 
                className="hero-slider" 
                loop 
                autoplay 
                autoplayTimeout={4000} 
                items={1} 
                dots={true} 
                nav={true}  
                navText={[
                    "<div class='custom-arrow left'>&#10094;</div>", 
                    "<div class='custom-arrow right'>&#10095;</div>"
                ]}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="hero-item"
                        style={{ backgroundImage: `url(${slide.img})` }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8">
                                    <h2>
                                        <span>{slide.title}</span><br/>
                                        <span>{slide.subtitle}</span>
                                    </h2>
                                    <a href="/services" className="site-btn sb-white mr-4 mb-3">
                                        Read More
                                    </a>
                                    <a href="/services" className="site-btn sb-dark">
                                        Our Services
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </section>
    );
}

export default Hero;