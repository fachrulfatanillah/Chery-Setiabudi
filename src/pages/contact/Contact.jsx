import './Contact.css';
import { FaWhatsapp, FaEnvelope, FaStar, FaCheckCircle } from 'react-icons/fa';

import images_profile from "../../assets/foto/Profile.webp";
import background_contact from "../../assets/background/BackgroundContact.webp"; 

const Contact = () => {
  return <Container_Contact />;
};

const Container_Contact = () => {
  return (
    <div className="contact-container">
      <div
        className="contact-section"
        style={{
          backgroundImage: `url(${background_contact})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="contact-overlay" />

        <div className="contact-right">
          <div className="contact-profile-box">
            
            <div className="contact-profile-photo-container">
              <img
                src={images_profile}
                alt="Foto Profil"
                className="contact-profile-photo"
              />
            </div>

            <div className="contact-details">
              <p className="contact-intro-text">Meet our</p>
              <p className="contact-job-title">Chery Assistant,</p>
              <h2 className="contact-name-large">Farell Rafi Gymnastiar</h2>

              <div className="contact-badge-container">
                <span className="contact-badge badge-star">
                  <FaStar color="#2d2d2d" />Excellent
                </span>
                <span className="contact-badge badge-cert">
                  CERTIFIED <FaCheckCircle />
                </span>
              </div>

              <p className="contact-location">CHERY SETIABUDI</p>
              <p className="contact-address">
                Jl. Dr. Setiabudi No.65, Gegerkalong, Kec. Sukasari, Kota Bandung, Jawa Barat
              </p>

              <div className="contact-icons">
                <a
                  href="https://wa.me/62881080248215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-icon-link"
                  title="WhatsApp"
                >
                  <FaWhatsapp size={28} color="#ffffff" />
                  <span className="contact-icon-text">+62 881-0802-48215</span>
                </a>

                <a
                  href="mailto:mfaarellrafi@gmail.com"
                  className="contact-icon-link"
                  title="Email"
                >
                  <FaEnvelope size={28} color="#ffffff" />
                  <span className="contact-icon-text">faarellrafi@gmail.com</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
