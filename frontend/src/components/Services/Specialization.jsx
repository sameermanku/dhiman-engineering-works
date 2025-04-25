import { useState, useEffect, useRef } from "react";

function Specialization() {
    const [activeTab, setActiveTab] = useState("tab-1");

    const plasticRef = useRef(null);
    const cadRef = useRef(null);
    const jobRef = useRef(null);
    const customRef = useRef(null);

    useEffect(() => {
        const hash = window.location.hash;

        if (hash === "#plastic-die-mould") {
            setActiveTab("tab-1");
            setTimeout(() => plasticRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
        } else if (hash === "#cad-cam-designing") {
            setActiveTab("tab-2");
            setTimeout(() => cadRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
        } else if (hash === "#job-work") {
            setActiveTab("tab-3");
            setTimeout(() => jobRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
        } else if (hash === "#custom-parts") {
            setActiveTab("tab-4");
            setTimeout(() => customRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
        }
    }, []);

    return (
        <div>
            <section className="reserch-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <ul className="nav nav-tabs reserch-tab-menu">
                                <li className="nav-item">
                                    <a
                                        href="#plastic-die-mould"
                                        className={`nav-link ${activeTab === "tab-1" ? "active" : ""}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveTab("tab-1");
                                            plasticRef.current?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >
                                        Plastic Die Mould
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="#cad-cam-designing"
                                        className={`nav-link ${activeTab === "tab-2" ? "active" : ""}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveTab("tab-2");
                                            cadRef.current?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >
                                        CAD-CAM Designing
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="#job-work"
                                        className={`nav-link ${activeTab === "tab-3" ? "active" : ""}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveTab("tab-3");
                                            jobRef.current?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >
                                        Job Work
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="#custom-parts"
                                        className={`nav-link ${activeTab === "tab-4" ? "active" : ""}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveTab("tab-4");
                                            customRef.current?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >
                                        Custom Parts
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content reserch-tab">
                                <div ref={plasticRef} className={`tab-pane fade ${activeTab === "tab-1" ? "show active" : ""}`}>
                                    <h2>A plastic die mold is a tool used to make plastic parts or products</h2>
                                    <h6 className="mold-parts">It has two main parts:</h6>
                                    <ol className="mold-parts-points">
                                        <li>Cavity: The outer shape of the part.</li>
                                        <li>Core: The inner shape of the part.</li>
                                    </ol>
                                    <br/>
                                    <p>The mold is used in a process called injection molding. In this process, hot liquid plastic is poured into the mold. Once it cools down, it hardens into the shape of the mold.
                                        Plastic die molds are used to make many things, like car parts, toys, and containers. They are strong, long-lasting, and can be customized to make parts of any size or shape.
                                        <br/><br/>We manufacture high-quality plastic die molds for making plastic parts and products. Using the injection molding process, we create precise and durable molds that shape hot liquid plastic into strong, long-lasting components. Our molds are used in various industries to produce car parts, toys, containers, and more. We customize molds to any size or shape to meet your exact needs.</p>
                                </div>

                                <div ref={cadRef} className={`tab-pane fade ${activeTab === "tab-2" ? "show active" : ""}`}>
                                    <h2>CAD-CAM Designing</h2>
                                    <p>We provide CAD (Computer-Aided Design) and CAM (Computer-Aided Manufacturing) solutions to create precise and high-quality designs for manufacturing. Our advanced software ensures accurate modeling, prototyping, and automated machining for efficient production. Whether you need 3D modeling, toolpath generation, or CNC machining, our services enhance precision and reduce production time.</p>
                                </div>

                                <div ref={jobRef} className={`tab-pane fade ${activeTab === "tab-3" ? "show active" : ""}`}>
                                    <h2>Job Work Services</h2>
                                    <p>We provide job work services for making and finishing metal and plastic parts with great accuracy. Our skilled team handles cutting, drilling, milling, grinding, and other processes to meet your needs. Whether you need a single part or bulk production, we ensure high-quality work and strong, long-lasting parts. Our services help improve the performance and durability of machines, tools, and equipment used in different industries.</p>
                                </div>

                                <div ref={customRef} className={`tab-pane fade ${activeTab === "tab-4" ? "show active" : ""}`}>
                                    <h2>Custom Parts Services</h2>
                                    <p>We make custom parts to match your exact needs with high accuracy and quality. Our parts are strong, durable, and made from the best materials to ensure long life and reliable performance. They are used in machines, tools, and various industries like automotive, aerospace, and manufacturing. Whether you need a single part or bulk production, we provide solutions that improve efficiency and meet your requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Specialization;