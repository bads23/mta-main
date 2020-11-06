import React, { useState, useEffect } from "react";
import ApiGet from "../../config/axios";
import URLS from "../../config/settings";

const Slide = ({ data }) => {
  return (
    <>
      <div className="slides">
        <img src={`${URLS().IMGS}${data.Cover_Image}`} alt={data.Title} />
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
    ApiGet(`${URLS().NEWS}`).then((res) => {
      setNews(res.data);
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
        {<Slide data={slideData} />}
        {/* {news.length > 0 ? (
          <>
            {news.map((item) => (
              <Slide data={item} />
            ))}
          </>
        ) : (
          <></>
        )} */}
      </div>
    </div>
  );
};

export default Slider;
