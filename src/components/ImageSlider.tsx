import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "/quadco-logo.png",
    "/window.svg",
    "/globe.svg",
    "/file.svg",
    "/next.svg",
    "/vercel.svg",
    "/Bayscom-logo.png",
    "/Mofad-Logo.jpg",
    "/Pendullum logo.png",
    "/arigbe logo.png",
    "/datatac logo.png",
    "/gureen logo.png",
    "/judeh logo.png",
    "/techinsight logo.png"
  ];

  return (
    <Slider {...settings}>
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '60vh', objectFit: 'contain', background: '#e0e7ef' }} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
