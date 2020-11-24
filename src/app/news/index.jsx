import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApiGet from "../config/axios";
import URLS from "../config/settings";
import Header from "../common/header/header";
import Footer from "../common/header/footer";
import Article from "./article";
import FormatDate from "../common/functions/formatter";

const Item = ({ news }) => {
  return (
    <>
      <div className="articleItem fl-btw fl-wrap mg-v-50" key={news.id}>
        <div className="articleItemImg">
          <img src={`${URLS().IMGS}${news.Cover_Image}`} alt="" />
        </div>
        <div className="articleItemInfo">
          <a href={`/news/article/${news.id}`}>
            <h3 className="playfair-lg">{news.Title}</h3>
          </a>
          <span className="playfair-m">
            <p>{FormatDate(news.date_added).fDate}</p>
          </span>
          <p className="long-text">{news.Subtitle}</p>

          <a href={`/news/article/${news.id}`}>
            <button className="btn btn-black">Read More</button>
          </a>
        </div>
      </div>
    </>
  );
};

const Index = () => {
  const [news, setNews] = useState([]);

  const getNews = () => {
    ApiGet(`${URLS().NEWS}`).then((res) => {
      setNews(res.data);
    });
  };

  useEffect(() => getNews(), []);

  return (
    <>
      <Header />
      <Router>
        <div className="full-section">
          <Route
            exact
            path="/News"
            render={() => (
              <>
                <h1 className="playfair-xlg gold align-center">News</h1>
                <div className="articlesWrap">
                  {news.length > 0 ? (
                    <>
                      {news.reverse().map((newsItem) => (
                        <Item news={newsItem} key={newsItem.id} />
                      ))}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </>
            )}
          />

          <Route
            path="/News/Article/:id"
            render={(props) => <Article props={props} />}
          />
        </div>
      </Router>
      <Footer />
    </>
  );
};

export default Index;
