import "./Home.css"
import React, { useState, useRef } from "react";

import images_tiggo_logo from "../../assets/logo/Tiggo-Logo.webp";
import images_omoda_logo from "../../assets/logo/Omoda-Logo.webp";

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

const Home = ({}) => {
    return (
        <Container_Home/>
    )
}

const Container_Home = ({}) => {
    const scrollRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0); // Untuk melacak indeks card yang ditampilkan

    const carList = [
        { name: "OMODA 5", image: omoda_5 },
        { name: "TIGGO 8", image: tiggo_8 },
        { name: "J6", image: omoda_j6 },
        { name: "J6", image: omoda_j6 },
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
          const card = scrollRef.current.querySelector(".main-content-home-section-list-product-card");
          const scrollAmount = card ? card.offsetWidth + 65 : 400;
      
          scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
          });
        }
      };


    return (
        <section className="section-home">
            <div className="hero-section-home">
                <div className="hero-left-section">
                    <video className="hero-video" autoPlay loop muted>
                        <source src='https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/chery-tiggo-homepage-desktop.mp4' type="video/mp4" />
                    </video>
                    <div className="hero-video-button-wrapper">
                        <button className="home-wrapper-hero-button">
                            <img className="image-home-wrapper-hero-button" src={images_tiggo_logo} alt="" />
                        </button>
                    </div>
                </div>
                <div className="hero-right-section">
                    <video className="hero-video" autoPlay loop muted>
                            <source src="https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/omoda/bg-video-placeholder-desktop.webphttps://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/omoda/chery-omoda-homepage-desktop.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-video-button-wrapper">
                        <button className="home-wrapper-hero-button">
                            <img className="image-home-wrapper-hero-button" src={images_omoda_logo} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="main-content-home-section">
                <div className="main-content-home-section-product-title">
                    <h2 className="product-title-heading">Produk Chery</h2>
                </div>
                <div className="main-content-home-section-list-product">
                    <div className="main-content-home-section-list-product-scroll-container-wrapper">
                        <button
                        className="main-content-home-section-list-product-scroll-button left"
                        onClick={() => scroll("left")}
                        >
                            <div className="main-content-home-section-list-product-hexagon-icon">
                                <span className="hex-icon-text">‹</span>
                            </div>
                        </button>

                        <div className="main-content-home-section-list-product-scroll-container" ref={scrollRef}>
                        {carList.map((car, index) => (
                            <div
                            className="main-content-home-section-list-product-card"
                            key={index}>
                                <div className="main-content-home-section-list-product-card-image">
                                    <img className="main-content-home-section-list-product-card-img" src={car.image} alt={car.name} />
                                </div>
                                <div className="main-content-home-section-list-product-card-detail-wrapper">
                                    <div className="home-section-list-product-card-detail-title">
                                        <h3>{car.name}</h3>
                                    </div>
                                    <div className="home-section-list-product-card-price">
                                        <div className="price-info">
                                            <span>Harga :</span>
                                            <p>Mulai Dari*</p>
                                        </div>
                                        <span className="price-amount">IDR 500.000.000</span>
                                    </div>

                                    <div className="home-section-list-product-card-detail">
                                        <span>Spesifikasi :</span>
                                        <ul>
                                            <li>
                                                <div className="label">Mesin</div>
                                                <span>2.0L TGDI</span>
                                            </li>
                                            <li>
                                                <div className="label">Panjang</div>
                                                <span>4722 mm</span>
                                            </li>
                                            <li>
                                                <div className="label">Wheelbase</div>
                                                <span>2710 mm</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="home-section-list-product-card-button-wrapper">
                                        <button className="home-section-list-product-card-button-wrapper-btn-download">Unduh Brosur</button>
                                        <button className="home-section-list-product-card-button-wrapper-btn-detail">
                                            <span className="text-underline">Lihat Detail</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>

                        <div className="main-content-home-section-list-product-scrollbar-track"></div>

                        <button
                        className="main-content-home-section-list-product-scroll-button right"
                        onClick={() => scroll("right")}
                        >
                            <div className="main-content-home-section-list-product-hexagon-icon">
                                <span className="hex-icon-text">›</span>
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home;