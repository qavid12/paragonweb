
import React from "react";
import Slider from "react-slick";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      
    </div>
  );
}
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      
    </div>
  );
}
const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <div className="gallery-arrow next"></div>,
    prevArrow: <div className="gallery-arrow prev">

    </div>,
    appendDots: dots => (
      <div style={{
        position: "absolute",
        bottom: "-25px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: 0,
        margin: 0,
      }}>
        <ul style={{margin: 0, padding: 0}}> {dots} 
        </ul>
      </div>
    ),
    customPaging: i => (
      <div className="custom-dots" />
    ),
  };

  const images = [
    "/images/spa1.jpg",
    "/images/spa2.jpg",
    "/images/spa3.jpg",
  ];

  return (
    <div className="gallery-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Spa Image ${index + 1}`}
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
