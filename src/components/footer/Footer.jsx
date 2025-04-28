import "./Footer.css"

import { FaPhoneAlt } from "react-icons/fa";
import images_logo from "../../assets/logo/Chery_logo.png";

const Footer = () => {
    return (
        <Container_Footer/>
    );
}

const Container_Footer = () => {
    return (
        <div className="footer-section">
            <div className="container-footer">
                <div className="footer-title">
                    <div className="footer-title-left">
                        <img className="navbar-logo-image" src={images_logo} alt="" />
                        <h1 className="navbar-logo-text">Chery-Setiabudi</h1>
                    </div>
                    <div className="footer-title-right">
                        <div className="footer-title-right">
                            <FaPhoneAlt className="phone-icon" />
                            <a 
                            className="phone-link" 
                            href="https://wa.me/62881080248215" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                            +62 881‑0802‑48215
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-detail">
                    <div className="footer-detail-left">
                        <div className="footer-detail-title">Kantor Chery Inti Bandung</div>
                            <div className="footer-detail-address">
                            <p>Jl. Dr. Setiabudi No.65, Gegerkalong, Kec. Sukasari, Kota Bandung, Jawa Barat 40153</p>
                            <a 
                                href="https://maps.google.com/?q=Dealer+Chery+Inti+Mobil+Bandung" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                Lihat Lokasi
                            </a>
                        </div>
                    </div>
                    
                    <div className="footer-detail-right">
                        <div className="footer-detail-title">Model</div>
                        <div className="footer-detail-links">
                            <a href="#" className="footer-link">TIGGO</a>
                            <a href="#" className="footer-link">OMODA</a>
                        </div>
                    </div>
                </div>
                <div className="footer-copy-right">
                    © 2025 Chery-Setiabudi. All rights reserved.
            </div>
            </div>
            
        </div>
    );
}

export default Footer;