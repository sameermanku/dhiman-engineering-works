import React from "react";

function Machines() {
    return (
        <div>
            <section className="services-section">
                <div className="services-warp">
                    <div className="container">

                        {/* ✅ Added Centered Heading with Reduced Space */}
                        <div className="section-header">
                            <h3>Our Advanced Machinery & Equipment</h3>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item">
                                    <div className="si-head">
                                        <div className="si-icon">
                                            <img src={`${import.meta.env.BASE_URL}img/icons/cogwheel.png`} alt="" />
                                        </div>
                                        <h5>VMC Machining</h5>
                                    </div>
                                    <p>Vertical Machining Centers, also known as Vertical Milling Machines, create holes in flat parts. This technology is favored when three-axis work is done on a single face, such as in-mold and die works.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item">
                                    <div className="si-head">
                                        <div className="si-icon">
                                            <img src={`${import.meta.env.BASE_URL}img/icons/cogwheel.png`} alt="" />
                                        </div>
                                        <h5>EDM Machining</h5>
                                    </div>
                                    <p>EDM Sparking Processes is also known as the spark machining. Edm Spark Machine removes unnecessary metal shaped by a series of rapidly current discharges between two electrodes.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item">
                                    <div className="si-head">
                                        <div className="si-icon">
                                            <img src={`${import.meta.env.BASE_URL}img/icons/wind-engine.png`} alt="" />
                                        </div>
                                        <h5>Milling Lathe Machine</h5>
                                    </div>
                                    <p>A milling lathe machine is a complex machine that combines the functions of a lathe and a milling machine, allowing it to perform both turning and milling operations. The primary operation is turning, while milling is a secondary operation.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item">
                                    <div className="si-head">
                                        <div className="si-icon">
                                            <img src={`${import.meta.env.BASE_URL}img/icons/pollution.png`} alt="" />
                                        </div>
                                        <h5>Manual Lathe Machining</h5>
                                    </div>
                                    <p>The main function of a lathe is to remove metal from a job to give it the required shape and size. The job is securely adjusted between centers on the lathe machine and then turn it against a single point cutting tool which will remove metal from the job in the form of chips.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item">
                                    <div className="si-head">
                                        <div className="si-icon">
                                            <img src={`${import.meta.env.BASE_URL}img/icons/pumpjack.png`} alt="" />
                                        </div>
                                        <h5>Cylindrical Grinder</h5>
                                    </div>
                                    <p>A cylindrical grinder is a machine that shapes metal into a round form. It uses a grinding wheel to smooth the outer surface of a rotating workpiece with high accuracy.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item">
                                    <div className="si-head">
                                        <div className="si-icon">
                                            <img src={`${import.meta.env.BASE_URL}img/icons/light-bulb.png`} alt="" />
                                        </div>
                                        <h5>Surface Grinder Work</h5>
                                    </div>
                                    <p>Surface grinding removes impurities and excess material from a workpiece to create a smooth, flat surface. It's often used in the final stages of production for metal parts and components.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Machines;
