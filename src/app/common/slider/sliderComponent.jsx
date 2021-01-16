import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Api from "app/config/api";

const Slide = ({ data }) => {
  return (
    <>
      <div className="slides">
        <img
          src={`${process.env.REACT_APP_MEDIA_URL}${data.Cover_Image}`}
          alt={data.Title}
        />
        <div className="caption">
          <a href={`news/article/${data.id}`}>
            <h1>{data.Title}</h1>
            <span className="lato-sm i b">
              Read More <i className="fas fa-angle-right"></i>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

const Slider = () => {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    Api.news.get().then((res) => {
      setNews(res.data.reverse());
    });

    document.getElementById("header").style.position = "absolute";
  }, []);

  return (
    <div className="slider hero-slider">
      <div id="sliderWrap">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
        >
          {news.map((data) => (
            <Slide data={data} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
