import React, { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Features() {
    const [showFourth, setShowFourth] = useState(false);

    const features = [
        {
            id: 1,
            title: "Plastic Die Mould",
            img: `${import.meta.env.BASE_URL}img/features/1.jpg`,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nQuisque orci purus, sodales in est quis, blandit sollicitudin est.\nNam ornare ipsum ac accumsan auctor."
        },
        {
            id: 2,
            title: "Custom Parts",
            img: `${import.meta.env.BASE_URL}img/features/2.jpg`,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nQuisque orci purus, sodales in est quis, blandit sollicitudin est.\nNam ornare ipsum ac accumsan auctor."
        },
        {
            id: 3,
            title: "Job Work",
            img: `${import.meta.env.BASE_URL}img/features/3.jpg`,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nQuisque orci purus, sodales in est quis, blandit sollicitudin est.\nNam ornare ipsum ac accumsan auctor."
        },
        {
            id: 4,
            title: "CAD Designing",
            img: `${import.meta.env.BASE_URL}img/features/4.jpg`,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nQuisque orci purus, sodales in est quis, blandit sollicitudin est.\nNam ornare ipsum ac accumsan auctor."
        },
    ];

    const handleNext = () => setShowFourth(true);
    const handlePrev = () => setShowFourth(false);

    return (
        <div>
            <section
                className="features-section spad set-bg"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/features-bg.jpg)` }}
            >
                <div className="container">
                    <div className="features-header">
                        <h3>Our Services</h3>
                    </div>

                    <div className="row" style={{ display: "flex", alignItems: "center", flexWrap: "nowrap" }}>
                        <div style={{ marginRight: "20px" }}>
                            <ArrowBackIosIcon
                                style={{ fontSize: "48px", color: "#fff" }}
                                onClick={handlePrev}
                            />
                        </div>

                        {!showFourth ? (
                            <>
                                {features.slice(0, 3).map((feature) => (
                                    <div key={feature.id} className="col-lg-4 col-md-6" style={{ flex: "1" }}>
                                        <div className="feature-box">
                                            <img src={feature.img} alt="Feature" />
                                            <div className="fb-text">
                                                <h5>{feature.title}</h5>
                                                <p>{feature.description}</p>
                                                <a href="/services#plastic-die-mould" className="fb-more-btn">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div key={features[3].id} className="col-lg-4 col-md-6" style={{ flex: "1" }}>
                                <div className="feature-box">
                                    <img src={features[3].img} alt="Feature" />
                                    <div className="fb-text">
                                        <h5>{features[3].title}</h5>
                                        <p>{features[3].description}</p>
                                        <a href="/services#cad-designing" className="fb-more-btn">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div style={{ marginLeft: "20px" }}>
                            <ArrowForwardIosIcon
                                style={{ fontSize: "48px", color: "#fff" }}
                                onClick={handleNext}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Features;