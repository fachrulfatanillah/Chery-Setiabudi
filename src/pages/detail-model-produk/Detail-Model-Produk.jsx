import { useRef, useState } from 'react';
import './Detail-Model-Produk.css';
import { FaChevronLeft, FaChevronRight, FaArrowLeft, FaArrowRight, FaPlus, FaMinus   } from 'react-icons/fa';

import Interior1 from '../../assets/detail-produk-cars/detail-interior-produk/detail-interior-front.webp';
import Interior2 from '../../assets/detail-produk-cars/detail-interior-produk/detail-interior-front-body.webp';
import Interior3 from '../../assets/detail-produk-cars/detail-interior-produk/detail-interior-side-body.webp';
import Interior4 from '../../assets/detail-produk-cars/detail-interior-produk/detail-interior-led-headlamp.webp';
import Interior5 from '../../assets/detail-produk-cars/detail-interior-produk/detail-interior-led-back-lamp.webp';
import Interior6 from '../../assets/detail-produk-cars/detail-interior-produk/detail-interior-outline-lamp.webp';
import Interior7 from '../../assets/detail-produk-cars/detail-interior-produk/detail-interior-stop-lamp.webp';

import RedImage from '../../assets/detail-produk-cars/change-color/chery-tiggo-cross-red.webp';
import SilverImage from '../../assets/detail-produk-cars/change-color/chery-tiggo-cross-silver.webp';
import BlackImage from '../../assets/detail-produk-cars/change-color/chery-tiggo-cross-black.webp';
import WhiteImage from '../../assets/detail-produk-cars/change-color/chery-tiggo-cross-white.webp';

import Interior_Produk1 from '../../assets/detail-produk-cars/interior-produk/interior-sunroof.webp';
import Interior_Produk2 from '../../assets/detail-produk-cars/interior-produk/interior-ac-1st-row.webp';
import Interior_Produk3 from '../../assets/detail-produk-cars/interior-produk/interior-2nd-row-fan-ac.webp';
import Interior_Produk4 from '../../assets/detail-produk-cars/interior-produk/interior-electronic-parking-brake.webp';
import Interior_Produk5 from '../../assets/detail-produk-cars/interior-produk/interior-push-start-stop-engine.webp';
import Interior_Produk6 from '../../assets/detail-produk-cars/interior-produk/interior-soft-material.webp';
import Interior_Produk7 from '../../assets/detail-produk-cars/interior-produk/interior-front.webp';
import Interior_Produk8 from '../../assets/detail-produk-cars/interior-produk/interior-power-outlet.webp';
import Interior_Produk9 from '../../assets/detail-produk-cars/interior-produk/interior-window.webp';
import Interior_Produk10 from '../../assets/detail-produk-cars/interior-produk/interior-ambient-light.webp';

import AirbagsImage from '../../assets/detail-produk-cars/dinamika-keamanan/6-airbags.webp';
import AdasImage from '../../assets/detail-produk-cars/dinamika-keamanan/15-adas.webp';
import BodiBajaImage from '../../assets/detail-produk-cars/dinamika-keamanan/bodi-baja.webp';

import ComfortImage from '../../assets/detail-produk-cars/varian-detail-produk/varian-tiggo-cross-comfort.webp';
import PremiumImage from '../../assets/detail-produk-cars/varian-detail-produk/varian-tiggo-cross-premium.webp';


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

    const interiorImages = [Interior1, Interior2, Interior3, Interior4, Interior5, Interior6, Interior7];

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
          image: Interior_Produk1,
          label: "TC Sunroof",
        },
        {
          image: Interior_Produk2,
          label: "TC AC + Filter Baris Pertama",
        },
        {
          image: Interior_Produk3,
          label: "TC Kipas AC Baris Kedua",
        },
        {
          image: Interior_Produk4,
          label: "TC Rem Parkir Elektrik",
        },
        {
          image: Interior_Produk5,
          label: "Push Start Stop Engine",
        },
        {
          image: Interior_Produk6,
          label: "Material Premium yang Lembut",
        },
        {
          image: Interior_Produk7,
          label: "TC Interior",
        },
        {
          image: Interior_Produk8,
          label: "Power Outlet Lengkap",
        },
        {
          image: Interior_Produk9,
          label: "All Power Window",
        },
        {
          image: Interior_Produk10,
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

    const fiturItems = [
        { label: "6 Airbags", image: AirbagsImage },
        { label: "15 ADAS (Advanced Driver Assistance Systems)", image: AdasImage },
        { label: "Bodi Baja 60%", image: BodiBajaImage }
    ];
    
    console.log("Gambar aktif:", fiturItems[fiturAktif].image);
    
    const spesifikasiData = [
        {
          title: 'Electric Car Feature',
          details: [
            { label: 'Vehicle', value: 'Electronic Vehicle FWD' },
            { label: 'Battery Type', value: 'Lithium Iron Phosphate Battery' },
            { label: 'Battery Capacity Distance (Km)', value: '430km (WLTP)/505 km(NEDC)' },
            { label: 'Ultra Fast Charging Battery', value: '30% - 80% in 28 Minutes' },
            { label: 'V2L', value: '3.3 kW' },
            { label: 'Processor', value: '8155 Qualcomm Chip' },
            { label: 'Driving Mode', value: 'Eco, Sport, Normal' },
          ],
        },
        {
          title: 'Exterior',
          details: [
            { label: 'Dimension', value: '4424x1830x1588 mm' },
            { label: 'Ground Clearance', value: '190 mm (Unladen) / 131 mm (Laden)' },
            { label: 'Wheel Base', value: '2630 mm' },
            { label: 'Suspension', value: 'F:MacPherson Strut R:Multi-Link Suspension' },
            { label: 'Parking & Brake', value: 'Front & Rear Disc EPB with Autohold' },
            { label: 'Tyre', value: '215/55 R-18 Futuristic Aluminium Velg' },
            { label: 'Color Body', value: 'Two Tone Color & One Tone Color' },
            { label: 'Power Tailgate', value: 'Not Available' },
            { label: 'Power Sunroof', value: 'Not Available' },
            { label: 'Roof Rail', value: 'Not Available' },
          ],
        },
        {
          title: 'Interior',
          details: [
            { label: 'Interior Color', value: 'Black Color / Saint Cyrillus Blue + Streamlined Beige Color' },
            { label: 'Interior Panel', value: 'Soft Touch Interior Panel Combine with Wood Style' },
            { label: 'Steering Tech', value: 'Electronic Power Steering with 4 Way Manual Adjustable' },
            { label: 'Steering Wheel Material', value: 'Leather Steering Wheel with Multi-Function Features' },
            { label: 'Seat', value: '5 Seats (2+3)' },
            { label: 'Driver Seat 6 Way Power Adjustment', value: 'Available' },
            { label: 'Passenger Seat 4 Way Power Adjustment', value: 'Available' },
            { label: 'Passenger Seat 4 Way Power AdjustmentMulti Color 1st Row & 2nd Row Ambient Light', value: 'Available' },
            { label: 'Rear View Mirror with DVR', value: 'Available' },
            { label: 'Privacy Glass', value: 'Not Available' },
          ],
        },
        {
          title: 'Light',
          details: [
            { label: 'Automatic LED Headlight with Leveling Switch Manual', value: 'Available' },
            { label: 'HighBeam / LowBeam Auto Adjust', value: 'Available' },
            { label: 'LED DRL Daytime Running Lamp', value: 'Available' },
            { label: 'Rear Lamp & Center High Mounting Stop Light', value: 'Available' },
            { label: 'Sequential Turn Signal', value: 'Available' },
            { label: 'Cornering Light Features', value: 'Available' },
            { label: 'Emergency Stop Signal', value: 'Available' },
            { label: 'Welcoming Light Features', value: 'Not Available' },
            { label: 'Follow-me Home Headlight Function', value: 'Not Available' },
            
          ],
        },
        {
          title: 'Safety',
          details: [
            { label: 'Airbag', value: '6 Airbags (Front Dual, Front Side, Side Curtain Airbags)' },
            { label: 'Body Frame', value: '78% High-Strength Steel Body' },
            { label: 'Child Safety', value: 'ISOFIX & Mechanical Safety Lock Door' },
            { label: 'Engine Immobilizer', value: 'Available' },
            { label: 'Vehicle Body Anti-Theft', value: 'Available' },
            { label: 'Miniature Circuit Breaker (MCB)', value: 'Available' },
            { label: 'Battery Protection Under Car', value: 'Available' },
            { label: 'Collision Dampening Point', value: 'Available' },
            { label: 'Water Protection : IP68', value: 'Available' },
            
          ],
        },
        {
          title: 'Comfort & Infotainment',
          details: [
            { label: 'Head-unit', value: '24.6-inch Curved Screen 3000R with a Resolution of Up to 1920x720' },
            { label: 'Mobile Connect', value: 'Wireless Android Auto & Apple Carplay' },
            { label: 'Speaker', value: '6 Sony Speakers' },
            { label: 'Two Zone A/C with PM2.5 Filter', value: 'Available' },
            { label: 'Smartphone Fast Wireless Charger 50w with Cooling & Reminder System', value: 'Available' },
            { label: 'Auto Window with Anti Pinched System (All Window)', value: 'Available' },
            { label: 'Driver & Passenger Ventilated Seat', value: 'Available' },
            { label: 'Keyless Entry with HVAC Start Features', value: 'Available' },
            { label: 'Intelligent Automatic Front Wiper', value: 'Available' },
            { label: 'Intelligent Voice Assistant', value: 'Available' },
            
          ],
        },
        {
          title: 'Driving Assistant',
          details: [
            { label: '540° HD Panoramic Camera', value: 'Not Available' },
            { label: 'Anti-lock Brake System (ABS)', value: 'Available' },
            { label: 'Electric Brake Force Distribution (EBD)', value: 'Available' },
            { label: 'Brake Assist System (BAS) +Brake Override System (BOS)', value: 'Available' },
            { label: 'Electronic Stability Program (ESP) + Traction Control System (TCS)', value: 'Available' },
            { label: 'Hill-start Assist Control (HAC) + Hill Descent Control (HDC)', value: 'Available' },
            { label: 'Tyre Pressure Monitoring System (TPMS)', value: 'Available' },
            { label: 'Car Lead Departure Sign (CLDS)', value: 'Available' },
            { label: 'Auto Central Locking Door', value: 'Available' },
            { label: 'Rear Parking Sensor', value: 'Available' },
            
          ],
        },
        {
          title: 'Advanced Driving Assistant',
          details: [
            { label: 'Drive Monitor System (DMS)', value: 'Available' },
            { label: 'Lane Keeping Assist (LKA)', value: 'Available' },
            { label: 'Adaptive Cruise Control (ACC)', value: 'Available' },
            { label: 'Automatic Emergency Braking (AEB)', value: 'Available' },
            { label: 'Blind Spot Detection (BSD)', value: 'Available' },
            { label: 'Emergency Lane Keeping (ELK)', value: 'Available' },
            { label: 'Forward Collision Warning (FCW)', value: 'Available' },
            { label: 'Lane Departure Warning (LDW)', value: 'Available' },
            { label: 'Traffic Jam Assist (TJA)', value: 'Available' },
            { label: 'Integrated Cruise Assist (ICA)', value: 'Available' },
            { label: 'Intelligent Energy System (IES)', value: 'Available' },
            { label: 'Intelligent Energy System (IES)Door Open Warning (DOW)', value: 'Available' },
            { label: 'Rear Collision Warning (RCW)', value: 'Available' },
            { label: 'Drive Away Information (DAI)', value: 'Available' },
            { label: 'Intelligent Headlamp Control (IHC)', value: 'Available' },
            { label: 'Rear Cross Traffic Alert (RCTA)', value: 'Available' },
            { label: 'Rear Cross Traffic Braking (RCTB)', value: 'Available' },
            
          ],
        },
        
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

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
                        <h2>KUASAI TIAP MEDAN DENGAN TENAGA</h2>
                        <h2>PENUH</h2>
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
                        <h2>KESEMPURNAAN PENGALAMAN </h2>
                        <h2>BERKENDARA</h2>
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

            {/* dinamika & keamanan*/}
            <section className="dinamika-keamanan-produk">
                <div className="container-dinamika-keamanan-produk">
                    <div className="head-dinamika-keamanan">
                        <h2>DINAMIKA & KEAMANAN</h2>
                        <p>
                            Sinergi kokohnya rangka, performa mesin, dan teknologi canggih TIGGO Cross menjamin
                            kenyamanan berkendara yang maksimal.
                        </p>
                    </div>
                    <div className="body-dinamika-keamanan-produk">
                        <div className="section-dinamika-keamanan-left">
                            <ul className="fitur-keamanan-list">
                                {fiturItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className={fiturAktif === index ? "active" : ""}
                                        onClick={() => setFiturAktif(index)}
                                    >
                                        {item.label}
                                    </li>
                                ))}
                            </ul>

                        </div>

                        <div className="section-dinamika-keamanan-right">
                        <img
                            src={fiturItems[fiturAktif].image}
                            alt={`Ilustrasi ${fiturItems[fiturAktif].label}`}
                            className="img-keamanan"

                        />
                        </div>
                    </div>
                </div>
            </section>


            {/* Varian Detail Produk*/}
            <div className="varian-detail-produk">
                <div className="container-varian-detail-produk">
                    <div className="head-varian-detail-produk">
                        <h2>VARIAN TIGGO CROSS</h2>
                    </div>

                    <div className="body-varian-detail-produk">
                        {[
                            {
                                name: "TIGGO CROSS COMFORT",
                                image: ComfortImage,
                                price: "IDR 249.500.000",
                                specs: [
                                "Super Wide 20,5 Inch HD Display",
                                "Intelligent Voice Assistant",
                                "Wireless Android Auto & Apple CarPlay"
                                ]
                            },
                            {
                                name: "TIGGO CROSS PREMIUM",
                                image: PremiumImage,
                                price: "IDR 279.500.000",
                                specs: [
                                "15 ADAS",
                                "Setir dengan 4 Arah Penyesuaian",
                                "Sunroof"
                                ]
                            }
                        ].map((item, index) => (
                            <div className="varian-box" key={index}>
                                <img src={item.image} alt={item.name} className="varian-image" />
                                
                                <div className="varian-content">
                                    <div className="varian-info">
                                        <h3 className="varian-title">{item.name}</h3>
                                        <p className="varian-label">Mulai Dari</p>
                                        <p className="varian-price">{item.price}</p>
                                        <p className="varian-otr">*OTR Jakarta</p>
                                    </div>

                                    
                                    <div className="varian-specs">
                                        <p className="spec-label">Spesifikasi</p>
                                        <ul>
                                        {item.specs.map((s, i) => (
                                            <li key={i}>{s}</li>
                                        ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Table Spesification*/}
            <div className="table-specification">
                <div className="container-table-specification">
                    <div className="head-table-specification">
                        <h2>SPESIFIKASI</h2>
                    </div>

                    <div className="body-table-specification">
                        {spesifikasiData.map((item, index) => (
                            <div key={index} className="spec-section">
                                <div className="spec-title" onClick={() => toggleIndex(index)}>
                                    <span>{item.title}</span>
                                    <span className="icon">
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                    </span>
                                </div>

                                {activeIndex === index && (
                                    <div className="spec-content">
                                        <div className="spec-grid">
                                            {item.details.map((detail, idx) => (
                                            <div className="spec-row" key={idx}>
                                                <div className="spec-label">{detail.label}</div>
                                                <div className="spec-value">{detail.value}</div>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                            </div>
                        ))}
                    </div>
                </div>
            </div>





        </>
    );
};

export default Detail_Model_Produk;
