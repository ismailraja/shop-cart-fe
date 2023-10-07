import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css"; // Import your CSS file

function ImageSlider() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="image-slider">
      <Slider {...sliderSettings}>
        <div className="slide">
          <img src="./images/image1.jpg" alt="Slide 1" />
        </div>
        <div className="slide">
          <img src="./images/image2.jpg" alt="Slide 2" />
        </div>
        <div className="slide">
          <img src="./images/image3.jpg" alt="Slide 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}

export default ImageSlider;
