import './Services.css';
import { useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaHandHoldingHeart  } from 'react-icons/fa';
import { HiOutlineDevicePhoneMobile, HiOutlineChatBubbleLeftRight  } from "react-icons/hi2";
import { TbHomeCog, TbMoodHappy, TbClock24   } from "react-icons/tb";

const Services = () => {
  return <ContainerServices />;
};

const ContainerServices = () => {
  const itemsRef = useRef([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const services = [
    { title: 'Web Design', image: '/src/assets/background/BackgroundContact.webp' },
    { title: 'App Development', image: '/src/assets/background/BackgroundContact.webp' },
    { title: 'SEO Optimization', image: '/src/assets/background/BackgroundContact.webp' },
    { title: 'UI/UX Design', image: '/src/assets/background/BackgroundContact.webp' },
    { title: 'Backend API', image: '/src/assets/background/BackgroundContact.webp' },
  ];

  return (
    <>
      {/* Container Services */}
      <div className="container-services">
        <div className="section-services">

          <div className="services-header">
            <h2>Aktivitas Tim Kami</h2>
          </div>

          <div className="services-wrapper">
            <button className="hex-button-services left" onClick={scrollLeft}>
              <FaChevronLeft className='icon-swipe-service' size={18} />
            </button>

            <div className="services-cards" ref={scrollContainerRef}>
              {services.map((service, index) => (
                <div
                  className="service-card"
                  key={index}
                  ref={(el) => (itemsRef.current[index] = el)}
                >
                  <div className="service-image-wrapper">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-image"
                    />
                  </div>
                  <div className="service-description">
                    <h3>{service.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <button className="hex-button-services right" onClick={scrollRight}>
              <FaChevronRight className='icon-swipe-service' size={18} />
            </button>
          </div>

        </div>
      </div>

      {/* Container Promotion */}
      <div className="container-promotion">
        <div className="section-promotion">
            
            <div className="head-promotion">
                <h2>Promosi</h2>
            </div>

            <div className="body-promotion">
                <div className="promotion-card">
                    <img src="/src/assets/background/BackgroundContact.webp" alt="Promotion 1" className="promotion-image" />
                    <h3>Promotion Title 1</h3>
                    <p>This is a description for promotion 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="promotion-card">
                    <img src="/src/assets/background/BackgroundContact.webp" alt="Promotion 2" className="promotion-image" />
                    <h3>Promotion Title 2</h3>
                    <p>This is a description for promotion 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

        </div>
        </div>

        <div className="guaranted-service">
            <div className="container-guaranted">
                
                <div className="head-guaranted-service">
                    <h2>Program Purna Jual</h2>
                <div className="underline"></div> 
                </div>

                <div className="body-guaranted-service">
                
                    <div className="guaranted-card">
                        <img src="/src/assets/purna-jual/garansi-mesin.webp" alt="Guarantee 1" className="guaranted-image" /> 
                        <h3>Garansi Mesin</h3>
                        <p>PT Chery Sales Indonesia berkomitmen memberikan garansi 6 tahun atau 150.000 km untuk kerusakan unit akibat kesalahan produksi bagi seluruh pengguna Chery di Indonesia.</p>
                    </div>

                    <div className="guaranted-card">
                        <img src="/src/assets/purna-jual/garansi-unit.webp" alt="Guarantee 1" className="guaranted-image" />
                        <h3>Garansi Unit</h3>
                        <p>PT Chery Sales Indonesia memberikan garansi khusus mesin selama 10 tahun atau 1.000.000 km untuk mesin seri TIGGO yang mengalami kerusakan akibat kesalahan produksi.</p>
                    </div>

                    <div className="guaranted-card">
                        <img src="/src/assets/purna-jual/servis-gratis.webp" alt="Guarantee 1" className="guaranted-image" />
                        <h3>Servis Gratis</h3>
                        <p>PT Chery Sales Indonesia menjamin layanan servis gratis di seluruh bengkel resmi Chery Indonesia selama 4 tahun atau 60.000 km bagi seluruh pengguna mobil Chery Indonesia.</p>
                    </div>

                </div>

            </div>
        </div>

        <div className="six-star-service">
            <div className="container-six-star-service">

                <div className="head-six-star-service">
                    <h2>Pelayanan 6 Star</h2>
                    <div className="underline"></div>
                </div>

                <div className="body-six-star-service">
                    <div className="six-star-card">
                        <div className="icon-wrapper">  
                            <HiOutlineDevicePhoneMobile className="icon" />
                        </div>
                        <h3>Layanan Intuitif</h3>
                        <p>Tim kami siap mengingatkan pelanggan terkait waktu servis berkala.</p>
                    </div>
                    <div className="six-star-card">
                        <div className="icon-wrapper">  
                            <FaHandHoldingHeart  className="icon" />
                        </div>
                        <h3>LAYANAN YANG DIPERSONALISASI</h3>
                        <p>Tim kami akan menghubungi Anda untuk memastikan mobil Anda dalam kondisi prima setelah melakukan servis berkala.</p>
                    </div>
                    <div className="six-star-card">
                        <div className="icon-wrapper">  
                            <HiOutlineChatBubbleLeftRight className="icon" />
                        </div>
                        <h3>LAYANAN ONLINE</h3>
                        <p>Lakukan reservasi servis dengan mudah kapanpun dan dimanapun melalui layanan Online Booking Service kami.</p>
                    </div>
                    <div className="six-star-card">
                        <div className="icon-wrapper">  
                            <TbHomeCog className="icon" />
                        </div>
                        <h3>HOME SERVICE</h3>
                        <p>Servis mobil Anda langsung tanpa harus meninggalkan kenyamanan rumah. Tim kami siap menjemput dan mengantar kembali mobil Anda setelah selesai servis. Layanan Home Servis pada saat ini hanya tersedia di Jakata, Bekasi dan Tangerang. Layanan ini GRATIS selama 1 tahun untuk perawatan dan perbaikan tertentu.</p>
                    </div>
                    <div className="six-star-card">
                        <div className="icon-wrapper">  
                            <TbMoodHappy className="icon" />
                        </div>
                        <h3>SERVIS GRATIS</h3>
                        <p>PT Chery Sales Indonesia menyediakan layanan servis gratis selama 4 tahun atau 60.000 km. Layanan ini termasuk penggantian suku cadang dan biaya perawatan.</p>
                    </div>
                    <div className="six-star-card">
                        <div className="icon-wrapper">  
                            <TbClock24 className="icon" />
                        </div>
                        <h3>Servis Darurat</h3>
                        <p>Road assistance kami siap sedia selama 7x24 jam untuk membantu para pemilik mobil Chery dalam situasi apapun. Layanan ini menjangkau radius hingga 50 km dari dealer terdekat di seluruh kota di Indonesia. Layanan ini gratis selama 1 tahun.</p>
                    </div>
                </div>

            </div>
        </div>




    </>
  );
};

export default Services;
