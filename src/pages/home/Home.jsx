import "./Home.css"

import images_tiggo_logo from "../../assets/logo/Tiggo-Logo.webp";
import images_omoda_logo from "../../assets/logo/Omoda-Logo.webp";
import hero_vidio_tiggo from "../../assets/vidio/chery-tiggo-homepage-desktop.mp4";
import hero_vidio_omoda from "../../assets/vidio/chery-omoda-homepage-desktop.mp4";

const Home = ({}) => {
    return (
        <Container_Home/>
    )
}

const Container_Home = ({}) => {
    return (
        <section className="section-home">
            <div className="hero-section-home">
                <div className="hero-left-section">
                    <video className="hero-video" autoPlay loop muted>
                        <source src={hero_vidio_tiggo} type="video/mp4" />
                    </video>
                    <div className="hero-video-button-wrapper">
                        <button className="home-wrapper-hero-button">
                            <img className="image-home-wrapper-hero-button" src={images_tiggo_logo} alt="" />
                        </button>
                    </div>
                </div>
                <div className="hero-right-section">
                    <video className="hero-video" autoPlay loop muted>
                            <source src={hero_vidio_omoda} type="video/mp4" />
                    </video>
                    <div className="hero-video-button-wrapper">
                        <button className="home-wrapper-hero-button">
                            <img className="image-home-wrapper-hero-button" src={images_omoda_logo} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Home;