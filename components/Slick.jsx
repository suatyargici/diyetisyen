import React from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCards/SliderCard";
import SliderCard2 from "./SliderCards/SliderCard2";
import SliderCard3 from "./SliderCards/SliderCard3";
import SliderCard4 from "./SliderCards/SliderCard4";
import SliderCard5 from "./SliderCards/SliderCard5";


const Slick = () => {
  function ArrowHidden(props) {
    const { style } = props;
    return <div style={{ ...style, display: "hidden" }} />;
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    pauseOnHover: true,
    slidesToScroll: 1,
    nextArrow: <ArrowHidden />,
    prevArrow: <ArrowHidden />,
  };
  return (
    <div className="mt-[83px] flex justify-center">
      <Slider
        {...settings}
        className="shadow-floatingShadow h-[500px] max-w-[885px] rounded-[12px] bg-white [@media_(max-width:780px)]:w-[360px] [@media_(max-width:840px)]:h-[460px] [@media_(max-width:760px)]:max-w-[400px] [@media_(max-width:768px)]:max-w-[390px]"
      >
        <div>
          <SliderCard />
        </div>
        <div>
          <SliderCard2 />
        </div>
        <div>
          <SliderCard3 />
        </div>
        <div>
          <SliderCard4 />
        </div>
        <div>
          <SliderCard5 />
        </div>
      </Slider>
    </div>
  );
};

export default Slick;
