import { useState } from "react";
import axios from "axios";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting form:", formData);
      const response = await axios.post("http://localhost:5000/contact", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      console.log("Response received:", response.data);

      if (response.data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error.response ? error.response.data : error.message);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className="contact-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-text">
              <h2>Get in Touch</h2>
              <p>Have questions or need assistance? Reach out to us using the following contact details.</p>
              <div className="header-info-box">
                <div className="hib-icon">
                  <img src={`${import.meta.env.BASE_URL}img/icons/phone.png`} alt="Phone Icon" />
                </div>
                <div className="hib-text">
                  <h6>+91 70091-89097</h6>
                  <p>Vickydhiman5695@gmail.com</p>
                </div>
              </div>
              <div className="header-info-box">
                <div className="hib-icon">
                  <img src={`${import.meta.env.BASE_URL}img/icons/map-marker.png`} alt="Location Icon" />
                </div>
                <div className="hib-text">
                  <h6>Shop No. 118, Chora Bazar</h6>
                  <p>Chajju Majari, Old Rajpura (Punjab)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    className="text-msg"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <button className="site-btn" type="submit">Send Message</button>
                  {status && <p>{status}</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;