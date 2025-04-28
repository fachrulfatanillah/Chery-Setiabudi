import './Services.css';
import { useEffect, useRef } from 'react';

const Services = () => {
  return <Container_Services />;
};

const Container_Services = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="container-services">
      <div className="section-services">
        <div className="services-top">
          <h2>Aktivitas Saya</h2>
        </div>

        <div className="services-bottom">
          {[
            {
              title: 'Web Design',
              image: '/src/assets/background/BackgroundContact.webp',
            },
            {
              title: 'App Development',
              image: '/src/assets/background/BackgroundContact.webp',
            },
            {
              title: 'SEO Optimization',
              image: '/src/assets/background/BackgroundContact.webp',
            },
          ].map((service, index) => (
            <div
              className="service-card"
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
            >
              {service.link ? (
                <a href={service.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                </a>
              ) : (
                <div className="image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                </div>
              )}
              <div className="service-description">
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
