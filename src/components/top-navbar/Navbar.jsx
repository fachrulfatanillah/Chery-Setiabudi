import "./Navbar.css";
import { useState } from "react";

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

const Navbar = () => {
    const [selectedImage, setSelectedImage] = useState(omoda_j6);

    const handleImageChange = (model) => {
        switch (model) {
            // OMODA
            case "J6":
                setSelectedImage(omoda_j6);
                break;
            case "OMODA E5":
                setSelectedImage(omoda_e5);
                break;
            case "OMODA 5 GT":
                setSelectedImage(omoda_5_gt);
                break;
            case "OMODA 5":
                setSelectedImage(omoda_5);
                break;

            // TIGGO
            case "TIGGO CROSS":
                setSelectedImage(tiggo_cross);
                break;
            case "TIGGO 8":
                setSelectedImage(tiggo_8);
                break;
            case "TIGGO 8 PRO MAX":
                setSelectedImage(tiggo_8_pro_max);
                break;
            case "TIGGO 8 PRO":
                setSelectedImage(tiggo_8_pro);
                break;
            case "TIGGO 7 PRO":
                setSelectedImage(tiggo_7_pro);
                break;

            default:
                setSelectedImage(omoda_j6);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img className="navbar-logo-image" src={images_logo} alt="" />
                <h1 className="navbar-logo-text">Chery-Sukajadi</h1>
            </div>
            <ul className="navbar-menu">
                <li className="navbar-menu-item"><a href="#">Home</a></li>
                <li className="navbar-menu-item has-submenu">
                    <a href="#">Models</a>
                    <div className="submenu">
                        <div className="submenu-content">
                            {/* Left Section for Product Display */}
                            <div className="submenu-display-product">
                                <img src={selectedImage} alt="model" />
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
                <li className="navbar-menu-item"><a href="#">Services</a></li>
                <li className="navbar-menu-item"><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
