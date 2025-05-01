import { useRef, useState } from 'react';
import './Detail-Model-Produk.css';
import { FaChevronLeft, FaChevronRight, FaArrowLeft, FaArrowRight  } from 'react-icons/fa';

import RedImage from '../../assets/detail-produk-cars/change-color/chery-tiggo-cross-red.webp';
import SilverImage from '../../assets/detail-produk-cars/change-color/chery-tiggo-cross-silver.webp';
import BlackImage from '../../assets/detail-produk-cars/change-color/chery-tiggo-cross-black.webp';
import WhiteImage from '../../assets/detail-produk-cars/change-color/chery-tiggo-cross-white.webp';


const Detail_Model_Produk = () => {
    return <Container_Detail_Model_Produk />;
};

const Container_Detail_Model_Produk = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    const promoItems = [
        { label: 'Garansi', title: 'Kendaraan', desc: 'Hingga 150,000 Km atau 6 Tahun' },
        { label: 'Gratis', title: 'Jasa', desc: 'Hingga 60,000 Km atau 4 Tahun' },
        { label: 'Opsional', title: '4 Mio Support', desc: 'Hingga 30,000 Km atau 3 Tahun' },
    ];

    const interiorImages = [
        'src/assets/detail-produk-cars/detail-interior-produk/detail-interior-front.webp',
        'src/assets/detail-produk-cars/detail-interior-produk/detail-interior-front-body.webp',
        'src/assets/detail-produk-cars/detail-interior-produk/detail-interior-side-body.webp',
        'src/assets/detail-produk-cars/detail-interior-produk/detail-interior-led-headlamp.webp',
        'src/assets/detail-produk-cars/detail-interior-produk/detail-interior-led-back-lamp.webp',
        'src/assets/detail-produk-cars/detail-interior-produk/detail-interior-outline-lamp.webp',
        'src/assets/detail-produk-cars/detail-interior-produk/detail-interior-led-headlamp.webp',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % interiorImages.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + interiorImages.length) % interiorImages.length);
    };

    const interiorItems = [
        {
          image: "src/assets/detail-produk-cars/interior-produk/interior-sunroof.webp",
          label: "TC Sunroof",
        },
        {
          image: "src/assets/detail-produk-cars/interior-produk/interior-ac-1st-row.webp",
          label: "TC AC + Filter Baris Pertama",
        },
        {
          image: "src/assets/detail-produk-cars/interior-produk/interior-2nd-row-fan-ac.webp",
          label: "TC Kipas AC Baris Kedua",
        },
        {
          image: "src/assets/detail-produk-cars/interior-produk/interior-electronic-parking-brake.webp",
          label: "TC Rem Parkir Elektrik",
        },
        {
          image: "src/assets/detail-produk-cars/interior-produk/interior-push-start-stop-engine.webp",
          label: "Push Start Stop Engine",
        },
        {
          image: "src/assets/detail-produk-cars/interior-produk/interior-soft-material.webp",
          label: "Material Premium yang Lembut",
        },
        {
          image: "src/assets/detail-produk-cars/interior-produk/interior-front.webp",
          label: "TC Interior",
        },
        {
          image: "src/assets/detail-produk-cars/interior-produk/interior-power-outlet.webp",
          label: "Power Outlet Lengkap",
        },
        {
          image: "src/assets/detail-produk-cars/interior-produk/interior-window.webp",
          label: "All Power Window",
        },
        {
          image: "src/assets/detail-produk-cars/interior-produk/interior-ambient-light.webp",
          label: "Ambient Light",
        },
    ];
      
    const [currentIndex, setCurrentIndex] = useState(0);
      
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? interiorItems.length - 1 : prev - 1));
    };
      
    const handleNext = () => {
        setCurrentIndex((prev) => (prev === interiorItems.length - 1 ? 0 : prev + 1));
    };

    const slideWidth = 918;
    const slideGap = 20;

    const trackStyle = {
    transform: `translateX(calc(50% - ${currentIndex * (slideWidth + slideGap)}px - ${slideWidth / 2}px))`,
    };

    const colors = [
        { name: 'RED RUBY', colorCode: '#a20000', image: RedImage },
        { name: 'SILVER MOONLIGHT', colorCode: '#c0c0c0', image: SilverImage },
        { name: 'BLACK PLATINUM', colorCode: '#333333', image: BlackImage },
        { name: 'WHITE HOWLITE', colorCode: '#f0f0f0', image: WhiteImage }
    ];
    
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const [fiturAktif, setFiturAktif] = useState(0);

    const fiturList = [
        "6 Airbags",
        "15 ADAS (Advanced Driver Assistance Systems)",
        "Bodi Baja 60%",
    ];

    const gambarList = [
        "airbag-demo.webp",
        "adas-demo.webp",
        "bodi-baja-demo.webp",
    ];

    return (
        <>
            {/* Gambar Mobil Utama */}
            <div className="container-detail-model-produk">
                <div className="section-detail-model-produk">
                    <img
                        src="src/assets/detail-produk-cars/detail-produk-tiggo/chery-tiggo-cross-front-angle.webp"
                        alt="Detail Produk Mobil"
                    />
                </div>
            </div>

            {/* Promo */}
            <div className="container-promo-detail-model-produk">
                <div className="section-promo-detail-model-produk horizontal-layout">
                    <img
                        src="src/assets/detail-produk-cars/promo-detail-produk/promo-chery-tiggo-cross.webp"
                        alt="Promo"
                        className="promo-left-img"
                    />
                    <div className="promo-right-overlay">
                        <div className="promo-title">PROMO EKSKLUSIF</div>

                        <div className="promo-cards" ref={scrollRef}>
                            {promoItems.map((item, index) => (
                                <div className="promo-card" key={index}>
                                    <div className="promo-card-content">
                                        <span className="promo-label">{item.label}</span>
                                        <h2 className="promo-title-card">{item.title}</h2>
                                        <p className="promo-desc">{item.desc}</p>
                                        <small className="promo-note">*Syarat dan Ketentuan berlaku</small>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="promo-navigation">
                            <button className="nav-button-promo left" onClick={scrollLeft}>
                                <FaArrowLeft className='icon-swipe-promo' size={18} />
                            </button>
                            <button className="nav-button-promo right" onClick={scrollRight}>
                                <FaArrowRight className='icon-swipe-promo' size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spesifikasi */}
            <div className="container-specific-detail-model">
                <div className="section-specific-detail-model">
                    <div className="img-specific-detail-model">
                        <img
                            src="src/assets/detail-produk-cars/specification-detail-produk/specific-model.webp"
                            alt="Spesifikasi Model Produk"
                        />
                    </div>

                    <div className="specific-model-produk">
                        <table className="specific-model-table">
                            <thead>
                                <tr>
                                    <th>Mesin</th>
                                    <th>Panjang</th>
                                    <th>Output Tenaga</th>
                                    <th>Torsi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1,5L CVT</td>
                                    <td>4320 MM</td>
                                    <td>116 PS</td>
                                    <td>138 Nm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Interior */}
            <div className="container-detail-interior-model-produk">
                <div className="section-detail-interior-produk">
                    <div className="head-detail-interior-produk">
                        <h2>KUASAI TIAP MEDAN DENGAN TENAGA PENUH</h2>
                        <p>Bukan sekedar SUV, TIGGO Cross adalah perpaduan jiwa penjelajah dan teknologi modern.</p>
                    </div>

                    <div className="body-detail-interior-produk">
                        <button className="hex-button-interior left" onClick={handlePrevImage}>
                            <FaChevronLeft className='icon-swipe-interior' size={18} />
                        </button>
                                <div className="main-image">
                                    <img
                                    src={interiorImages[currentImageIndex]}
                                    alt={`Interior ${currentImageIndex + 1}`}
                                    />
                                        <div className="thumbnails-overlay">
                                            {interiorImages.map((img, index) => (
                                                <img
                                                key={index}
                                                src={img}
                                                alt={`Thumbnail ${index + 1}`}
                                                className={index === currentImageIndex ? 'active' : ''}
                                                onClick={() => handleThumbnailClick(index)}
                                                />
                                            ))}
                                        </div>
                                </div>
                        <button className="hex-button-interior right" onClick={handleNextImage}>
                            <FaChevronRight className='icon-swipe-interior' size={18} />
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Interior-carousel */}
            <div className="interior-carousel">
                <div className="interior-carousel-section">
                    <div className="interior-carousel-header">
                        <h2>KESEMPURNAAN PENGALAMAN BERKENDARA</h2>
                        <p>Bersiaplah untuk dimanjakan dengan interior mewah dan futuristik dari TIGGO Cross.</p>
                    </div>

                    <div className="interior-carousel-body">
                        <button className="hex-button-interior-carousel left" onClick={handlePrev}>
                                <FaChevronLeft className='icon-swipe-interior-carousel' size={18} />
                        </button>

                        <div className="interior-carousel-wrapper">
                            <div className="interior-carousel-track" style={trackStyle}>
                                {interiorItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`interior-carousel-slide ${index === currentIndex ? "active" : ""}`}
                                >
                                    <img src={item.image} alt={item.label} />
                                    <div className="slide-label">{item.label}</div>
                                </div>
                                ))}
                            </div>
                        </div>


                        <button className="hex-button-interior-carousel right" onClick={handleNext}>
                            <FaChevronRight className='icon-swipe-interior-carousel' size={18} />
                        </button>
                    </div>
                </div>
            </div>


            {/* change-color */}                    
            <div className="change-color-produk">
                <div className="container-change-color-produk">
                    <div className="container-change-color-left">
                    <div className="change-color-title">OPSI WARNA</div>
                    <p className="change-color-description">
                        Ekspresikan dirimu kemanapun kamu pergi dengan berbagai pilihan warna TIGGO Cross.
                    </p>

                    <div className="color-options">
                        {colors.map((c, idx) => (
                            <div
                                key={idx}
                                className={`color-circle ${selectedColor.name === c.name ? 'active' : ''}`}
                                style={{
                                    backgroundColor: c.colorCode,
                                    boxShadow: selectedColor.name === c.name
                                      ? `0 0 20px 8px ${c.colorCode}`
                                      : 'none',
                                    transform: selectedColor.name === c.name ? 'scale(1.1)' : 'scale(1)'
                                  }}
                                onClick={() => setSelectedColor(c)}
                            />
                        ))}
                    </div>

                    <div className="color-label">{selectedColor.name}</div>
                    </div>

                    <div className="container-change-color-right">
                    <img
                        src={selectedColor.image}
                        alt={`Mobil warna ${selectedColor.name}`}
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    </div>
                </div>
            </div>

            {/* dinamika & keamanan
            <section className="dinamika-keamanan-produk">
                <div className="container-dinamika-keamanan-produk">
                    <div className="body-dinamika-keamanan-produk">
                        <div className="section-dinamika-keamanan-left">
                            <h2>DINAMIKA & KEAMANAN</h2>
                            <p>
                            Sinergi kokohnya rangka, performa mesin, dan teknologi canggih TIGGO Cross menjamin
                            kenyamanan berkendara yang maksimal.
                            </p>
                            <ul className="fitur-keamanan-list">
                            {fiturList.map((fitur, index) => (
                                <li
                                key={index}
                                className={fiturAktif === index ? "active" : ""}
                                onClick={() => setFiturAktif(index)}
                                >
                                {fitur}
                                </li>
                            ))}
                            </ul>
                        </div>

                        <div className="section-dinamika-keamanan-right">
                            <img
                            src={`src/assets/detail-produk-cars/keamanan/${gambarList[fiturAktif]}`}
                            alt={`Ilustrasi ${fiturList[fiturAktif]}`}
                            className="img-keamanan"
                            />
                        </div>
                    </div>
                </div>
            </section> */}




        </>
    );
};

export default Detail_Model_Produk;
