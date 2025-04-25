import React from "react";
import OwlCarousel from "react-owl-carousel";

const review_details = [
    { id: 1, name: "Abhi Mittal", company: "Owner M&M Toys", review: "Their work is so professional. Recommends Everyone." },
    { id: 2, name: "Sonu", company: "Vishkarma Plastics", review: "Their work is very accurate and fast." },
    { id: 3, name: "Mandeep Singh", company: "V.S Plastics", review: "I am very happy with their work." }
];

function Testimonial() {
    return (
        <div>
            <section className="testimonial-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div
                                className="testimonial-bg set-bg"
                                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/testimonial-bg.jpg)` }}
                            ></div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="testimonial-box">
                                <div className="testi-box-warp">
                                    <h2>Client’s Testimonials</h2>
                                    <OwlCarousel className="testimonial-slider" loop autoplay items={1} dots={true}>
                                        {review_details.map((comment) => (
                                            <div key={comment.id} className="testimonial">
                                                <p>
                                                    &#34;{comment.review}&#34;
                                                </p>
                                                <img
                                                    src={`${import.meta.env.BASE_URL}img/testimonial-thumb.jpg`}
                                                    alt="Testimonial"
                                                    className="testi-thumb"
                                                />
                                                <div className="testi-info">
                                                    <h5>{comment.name}</h5>
                                                    <span>{comment.company}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonial;