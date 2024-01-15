"use client";
import React from "react";
import Slider from "react-slick";
import "./Slider.css";
import CardTipos from "../Cards/CardTipos";
function SliderTiposCremas() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <CardTipos />
        <CardTipos />
        <CardTipos />
        <CardTipos />
        <CardTipos />
        <CardTipos />
        <CardTipos />
      </Slider>
    </div>
  );
}

export default SliderTiposCremas;
