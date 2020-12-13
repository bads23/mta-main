import React, { useState, useEffect } from "react";
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
  const [slideData, setSlideData] = useState({});
  const [currSlide, setCurrSlide] = useState(0);

  useEffect(() => {
    // get news posts
    // ApiGet(`${URLS().NEWS}`).then((res) => {
    Api.news.get().then((res) => {
      setNews(res.data.reverse());
      setSlideData(res.data[0]);
    });

    document.getElementById("header").style.position = "absolute";
  }, []);

  const slideNext = () => {
    var next = currSlide + 1;
    if (next > news.length - 1) {
      setSlideData(news[0]);
      setCurrSlide(0);
    } else {
      setSlideData(news[next]);
      setCurrSlide(next);
    }
  };

  const slidePrev = () => {
    var next = currSlide - 1;
    if (next < 0) {
      setSlideData(news[news.length - 1]);
      setCurrSlide(news.length - 1);
    } else {
      setSlideData(news[next]);
      setCurrSlide(next);
    }
  };

  return (
    <div className="slider hero-slider">
      <span className="slideBtns" id="slideprev" onClick={slidePrev}></span>
      <span className="slideBtns" id="slidenext" onClick={slideNext}></span>
      <div id="sliderWrap">
        <Slide data={slideData} />
      </div>
    </div>
  );
};

export default Slider;
