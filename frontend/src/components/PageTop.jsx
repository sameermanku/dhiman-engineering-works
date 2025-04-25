import "react";

function Pagetop(props) {
  return (
    <section
      className="page-top-section set-bg"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/page-top-bg/1.jpg)`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a href="/contact" className="site-btn">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pagetop;