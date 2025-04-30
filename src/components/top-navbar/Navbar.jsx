import "./Navbar.css";
import { useState, useEffect } from "react";
import { FaAngleRight, FaChevronDown, FaChevronUp, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'

import images_logo from "../../assets/logo/Chery_logo.png";
import omoda_j6 from "../../assets/cars/omoda/OMODA-J6.webp";
import omoda_e5 from "../../assets/cars/omoda/OMODA-E5.webp";
import omoda_5 from "../../assets/cars/omoda/OMODA-5.webp";
import omoda_5_gt from "../../assets/cars/omoda/OMODA-5-GT.webp";

import tiggo_7_pro from "../../assets/cars/tiggo/TIGGO-7-PRO.webp";
import tiggo_8_pro_max from "../../assets/cars/tiggo/TIGGO-8-PRO-MAX.webp";
import tiggo_8_pro from "../../assets/cars/tiggo/TIGGO-8-PRO.webp";
import tiggo_8 from "../../assets/cars/tiggo/TIGGO-8.webp";
import tiggo_cross from "../../assets/cars/tiggo/TIGGO-CROSS.webp";

import Contact from "../../pages/contact/Contact";
import Services from "../../pages/list-services/Services";

const Navbar = () => {
    const carData = {
        "J6": {
            product_name : "J6",
            image: omoda_j6,
            specs: {
                mesin: "1,5L CVT",
                panjang: "4320 MM",
                wheelbase: "2630 MM"
            }
        },
        "OMODA E5": {
            product_name : "OMODA E5",
            image: omoda_e5,
            specs: {
                mesin: "1,6 TGDI",
                panjang: "4722 MM",
                wheelbase: "2710 MM"
            }
        },
        "OMODA 5 GT": {
            product_name : "OMODA 5 GT",
            image: omoda_5_gt,
            specs: {
                mesin: "2,0 TGDI",
                panjang: "4720 MM",
                wheelbase: "2710 MM"
            }
        },
        "OMODA 5": {
            product_name : "OMODA 5",
            image: omoda_5,
            specs: {
                mesin: "2,0 TGDI",
                panjang: "4722 MM",
                wheelbase: "2710 MM"
            }
        },
        "TIGGO CROSS": {
            product_name : "TIGGO CROSS",
            image: tiggo_cross,
            specs: {
                mesin: "1,5 TCI",
                panjang: "4500 MM",
                wheelbase: "2670 MM"
            }
        },
        "TIGGO 8": {
            product_name : "TIGGO 8",
            image: tiggo_8,
            specs: {
                mesin: "1,6 TGDI",
                panjang: "4722 MM",
                wheelbase: "2710 MM"
            }
        },
        "TIGGO 8 PRO MAX": {
            product_name : "TIGGO 8 PRO MAX",
            image: tiggo_8_pro_max,
            specs: {
                mesin: "2,0 TGDI",
                panjang: "4722 MM",
                wheelbase: "2710 MM"
            }
        },
        "TIGGO 8 PRO": {
            product_name : "TIGGO 8 PRO",
            image: tiggo_8_pro,
            specs: {
                mesin: "2,0 TGDI",
                panjang: "4720 MM",
                wheelbase: "2710 MM"
            }
        },
        "TIGGO 7 PRO": {
            product_name : "TIGGO 7 PRO",
            image: tiggo_7_pro,
            specs: {
                mesin: "1,5 TCI",
                panjang: "4500 MM",
                wheelbase: "2670 MM"
            }
        }
    };
    
    const [selectedModel, setSelectedModel] = useState("J6");
    const [selectedImage, setSelectedImage] = useState(carData["J6"].image);
    const [spec, setSpec] = useState(carData["J6"].specs);

    const [menuOpen, setMenuOpen] = useState(false);
    const [showModelOverlay, setShowModelOverlay] = useState(false);
    const [closingOverlay, setClosingOverlay] = useState(false);

    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (type) => {
    setOpenDropdown((prev) => (prev === type ? null : type));
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setShowModelOverlay(false)
    };
    
    const handleImageChange = (model) => {
        setSelectedModel(model);
        setSelectedImage(carData[model]?.image || carData["J6"].image);
        setSpec(carData[model]?.specs || carData["J6"].specs);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img className="navbar-logo-image" src={images_logo} alt="" />
                <h1 className="navbar-logo-text">Chery-Setiabudi</h1>
            </div>
            <button className={`menu-toggle ${menuOpen ? "show" : ""}`} onClick={toggleMenu}></button>
            <ul className={`navbar-menu ${menuOpen ? "show" : ""}`}>
                <li className="navbar-menu-item"><Link to="/">Home</Link></li>
                <li className="navbar-menu-item has-submenu">
                    <a>Models</a>
                    <div className="submenu">
                        <div className="submenu-content">
                            {/* Left Section for Product Display */}
                            <div className="submenu-display-product">
                                <div className="submenu-display-product-left">
                                    <div className="submenu-display-product-box">
                                        <strong>Mesin</strong>
                                        {spec.mesin.split(" ").map((item, index) => (
                                            <div key={`mesin-${index}`}>{item}</div>
                                        ))}
                                    </div>
                                    <div className="submenu-display-product-box">
                                        <strong>Panjang</strong>
                                        {spec.panjang.split(" ").map((item, index) => (
                                            <div key={`panjang-${index}`}>{item}</div>
                                        ))}
                                    </div>
                                    <div className="submenu-display-product-box">
                                        <strong>Wheelbase</strong>
                                        {spec.wheelbase.split(" ").map((item, index) => (
                                            <div key={`wheelbase-${index}`}>{item}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className="submenu-display-product-right">
                                    <img src={selectedImage} alt="model" className="product-image" />
                                    <div className="submenu-detail-button-box">
                                        <div className="detail-left-content">
                                            {/* Bisa isi teks, info singkat, atau dikosongin */}
                                        </div>
                                        <div className="detail-right-button">
                                            <button className="detail-button">
                                                <div className="button-content">
                                                    <div className="hexagon-icon"><FaAngleRight className="hexagon-icon-angle-right"/></div>
                                                    <div className="button-text">
                                                        <div className="product-name">{carData[selectedModel].product_name}</div>
                                                        <div className="info-label">Detail Information</div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section for Categories */}
                            <div className="submenu-category">
                                <div className="submenu-title">OMODA</div>
                                <ul className="submenu-items">
                                    <li onClick={() => handleImageChange("J6")}>J6</li>
                                    <li onClick={() => handleImageChange("OMODA E5")}>OMODA E5</li>
                                    <li onClick={() => handleImageChange("OMODA 5 GT")}>OMODA 5 GT</li>
                                    <li onClick={() => handleImageChange("OMODA 5")}>OMODA 5</li>
                                </ul>
                            </div>

                            <div className="submenu-category">
                                <div className="submenu-title">TIGGO</div>
                                <ul className="submenu-items">
                                    <li onClick={() => handleImageChange("TIGGO CROSS")}>TIGGO CROSS</li>
                                    <li onClick={() => handleImageChange("TIGGO 8")}>TIGGO 8</li>
                                    <li onClick={() => handleImageChange("TIGGO 8 PRO MAX")}>TIGGO 8 PRO MAX</li>
                                    <li onClick={() => handleImageChange("TIGGO 8 PRO")}>TIGGO 8 PRO</li>
                                    <li onClick={() => handleImageChange("TIGGO 7 PRO")}>TIGGO 7 PRO</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="navbar-menu-item mobile-only">
                    <button onClick={() => setShowModelOverlay(true)} className="models-mobile-button">
                        Models <FaChevronRight />
                    </button>
                </li>
                <li className="navbar-menu-item"><Link to="/list-services">Services</Link></li>
                <li className="navbar-menu-item"><Link to="/contact">Contact</Link></li>
            </ul>
            <div className={`overlay ${menuOpen ? "show" : ""}`} onClick={closeMenu}></div>
            {showModelOverlay && (
            <div className={`model-overlay ${closingOverlay ? 'slide-out' : 'slide-in'}`}>
                <div className="model-overlay-header">
                    <button
                        onClick={() => {
                            setClosingOverlay(true);
                            setTimeout(() => {
                            setShowModelOverlay(false);
                            setClosingOverlay(false);
                            }, 300);
                        }}
                        className="back-button"
                        >
                        ← Tutup
                    </button>
                </div>

                <div className="model-overlay-content">
                <div className="submenu-dropdown-group">
                {/* OMODA */}
                <div className="submenu-category-dropdown">
                    <div className="submenu-title clickable" onClick={() => toggleDropdown("omoda")}>
                    OMODA{" "}
                    {openDropdown === "omoda" ? (
                        <FaChevronUp className="dropdown-arrow" />
                    ) : (
                        <FaChevronDown className="dropdown-arrow" />
                    )}
                    </div>
                    {openDropdown === "omoda" && (
                    <ul className="submenu-items-mobile">
                        <li onClick={() => handleImageChange("J6")}>J6</li>
                        <li onClick={() => handleImageChange("OMODA E5")}>OMODA E5</li>
                        <li onClick={() => handleImageChange("OMODA 5 GT")}>OMODA 5 GT</li>
                        <li onClick={() => handleImageChange("OMODA 5")}>OMODA 5</li>
                    </ul>
                    )}
                </div>

                {/* TIGGO */}
                <div className="submenu-category-dropdown">
                    <div className="submenu-title clickable" onClick={() => toggleDropdown("tiggo")}>
                    TIGGO{" "}
                    {openDropdown === "tiggo" ? (
                        <FaChevronUp className="dropdown-arrow" />
                    ) : (
                        <FaChevronDown className="dropdown-arrow" />
                    )}
                    </div>
                    {openDropdown === "tiggo" && (
                    <ul className="submenu-items-mobile">
                        <li onClick={() => handleImageChange("TIGGO CROSS")}>TIGGO CROSS</li>
                        <li onClick={() => handleImageChange("TIGGO 8")}>TIGGO 8</li>
                        <li onClick={() => handleImageChange("TIGGO 8 PRO MAX")}>TIGGO 8 PRO MAX</li>
                        <li onClick={() => handleImageChange("TIGGO 8 PRO")}>TIGGO 8 PRO</li>
                        <li onClick={() => handleImageChange("TIGGO 7 PRO")}>TIGGO 7 PRO</li>
                    </ul>
                    )}
                </div>
                </div>
                </div>
            </div>
            )}
        </nav>
    );
};

export default Navbar;
