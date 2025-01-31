import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iphone from "../../src/assets/images/iphone.png"
import mob1 from "../../src/assets/images/carousel-img/mob-1.jpg"
import mob2 from "../../src/assets/images/carousel-img/mob-2.jpg"
import mob3 from "../../src/assets/images/carousel-img/mob-3.jpg"
import mob4 from "../../src/assets/images/carousel-img/mob-4.jpg"
import mob5 from "../../src/assets/images/carousel-img/mob-5.jpg"
import mob6 from "../../src/assets/images/carousel-img/mob-6.jpg"
import mob7 from "../../src/assets/images/carousel-img/mob-7.jpg"
import mob8 from "../../src/assets/images/carousel-img/mob-8.jpg"

const Data = [
  {
    img: mob1
  },
  {
    img: mob2
  },
  {
    img: mob3
  },
  {
    img: mob4
  },
  {
    img: mob5
  },
  {
    img: mob6
  },
  {
    img: mob7
  },
  {
    img: mob8
  }
]

const CreativeScreen = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    variableWidth: false,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className='py-5 screenshot-wrap position-relative'>
      <div className="slider-container1">
        <Slider {...settings}>
          {Data.map((ele, index) => {
            return (
              <div key={index} >
                <div className='d-flex bg-3238381 justify-content-center flex-column'>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <img src={ele.img} alt="" className='' />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
      <div className="iphone-frame">
        <img src={iphone} alt="iphone-image" />
      </div>
    </div>
  )
}

export default CreativeScreen