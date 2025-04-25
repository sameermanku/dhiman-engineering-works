import "react";

function Aboutsection() {
  return (
    <div>
      <section className="about-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={`${import.meta.env.BASE_URL}img/about.jpg`}
                alt="About Dhiman Engineering Works"
              />
            </div>
            <div className="col-lg-6">
              <div className="about-text">
                <h2>We produce or supply Goods, & Services</h2>
                <p>
                  Welcome to Dhiman Engineering Works, where we provide high-quality
                  mechanical solutions to meet your needs. We specialize in making
                  plastic die molds, custom parts, and handling job work based on
                  customer demands.
                </p>
                <p>Our work is powered by advanced tools like:</p>
                <ul className="about-points">
                  <li><strong>VMC Machines:</strong> For precise and accurate manufacturing.</li>
                  <li><strong>Lathe Machines:</strong> Used for shaping and machining parts.</li>
                  <li><strong>Manual Vertical Machines:</strong> Ideal for specialized tasks.</li>
                  <li><strong>EDM Sparking Machines:</strong> For detailed and intricate work.</li>
                  <li>And many more to ensure the best results for every project.</li>
                </ul>
                <p>
                  Whether it is creating molds, manufacturing parts, or completing
                  custom jobs, our experienced team is here to deliver reliable,
                  top-quality services every time. Let us help you bring your ideas to life!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutsection;