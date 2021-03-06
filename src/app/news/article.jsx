import React, { useState, useEffect } from "react";
import Api from "app/config/api";
import { FormatDate } from "../common/functions/formatter";

const Article = ({ props }) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    // ApiGet(`${URLS().NEWS}/${props.match.params.id}`).then((res) => {
    Api.news.get(props.match.params.id).then((res) => {
      setArticle(res.data);
      var obj = { ...res.data };

      //set content
      document.getElementById("articleDiv").innerHTML = obj.Content;
      document.getElementById("dateDiv").innerText = FormatDate(
        obj.date_added
      ).fDate;

      // update views
      obj.views += 1;

      Api.news.put(props.match.params.id, obj).then((res) => {
        console.log(res.data);
      });
    });
  }, [props]);

  return (
    <>
      <div className="article">
        <div className="articleImg">
          <img
            src={`${process.env.REACT_APP_MEDIA_URL}${article.Cover_Image}`}
            alt="hero"
          />
        </div>

        <h1 className="playfair-xlg align-center">{article.Title}</h1>

        <span className="dateSpan block playfair-m align-center"></span>

        <span className="subtitleSpan lato-sm i block mg-v-20 align-center">
          {article.Subtitle}
        </span>

        <div className="text-wrapper">
          <div className="author">
            <div id="authorAvatar">
              <img
                src="https://media.motiontalentafrica.co.ke/media/avatars/ceo.jpg"
                alt=""
              />
            </div>
            <h3 className="playfair mg-v-5">Munase Mukombwa</h3>
            <span className="lato-sm i" id="dateDiv"></span>

            <p className="author_socials">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/mtalent_africa/">
                <i className="fab fa-twitter"></i>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/motiontalentafrica/">
                <i className="fab fa-facebook-square"></i>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/motiontalentafrica/">
                <i className="fab fa-instagram"></i>
              </a>
            </p>
          </div>
          <div className="long-text" id="articleDiv"></div>
        </div>
      </div>
    </>
  );
};

export default Article;
