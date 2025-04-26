import React from "react";
//import OwlCarousel from "react-owl-carousel";

function Clients() {
    return(
        <div>
            <section className="clients-section spad">
                <div className="container">
                    <div className="client-text">
                        <h2>
                            Expert Manufacturers in Precision Die Molds and Custom Iron Components for Industrial Excellence
                        </h2>
                        <p>
                            We create high-quality die molds and custom iron parts to meet the needs of our clients. In addition to iron components, we also design and produce molds for high-quality plastic products. Our plastic mold dies are crafted to support precise and efficient manufacturing with plastic molding machines. Using advanced technology and skilled work, we deliver parts that help businesses work better and last longer. Below, you’ll see some of the valued clients who trust us to get the job done.
                        </p>
                    </div>
                    {/* <OwlCarousel className="client-slider" loop autoplay items={5} dots={true}>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <div key={num} className="single-brand">
                                <a href="/">
                                    <img src={`/img/clients/${num}.png`} alt="Client Logo" />
                                </a>
                            </div>
                        ))}
                    </OwlCarousel> */}
                </div>
            </section>
        </div>
    );
}

export default Clients;