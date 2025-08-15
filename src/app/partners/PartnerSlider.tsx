import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  { logo: "/Bayscom-logo.png", name: "Bayscom Energy Limited" },
  { logo: "/Mofad-Logo.jpg", name: "MOfad Energy Solution" },
  { logo: "/Data Tac logo.png", name: "Data Tac" },
  { logo: "/Techinsight logo.png", name: "Techinsigt Global" },
  { logo: "/gureen logo.png", name: "Gureen Synergy" },
  { logo: "/arigbe logo.png", name: "Arigbe and Sons" },
  { logo: "/judeh logo.png", name: "Judeh24" },
  { logo: "/Pendullum logo.png", name: "Pendulum Rise Global" },
];

const PartnerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };
  return (
    <div className="w-full flex justify-center">
      <div className="w-80">
        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-6" style={{ minHeight: 220 }}>
              <img 
                src={partner.logo} 
                alt={partner.name + ' Logo'} 
                style={{ width: 180, height: 180, objectFit: 'contain', display: 'block', margin: '0 auto' }} 
                onError={(e) => { e.currentTarget.src = '/quadco-logo.png'; }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnerSlider;
