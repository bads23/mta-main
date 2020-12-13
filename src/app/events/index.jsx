import React, { useState, useEffect } from "react";
import Api from "app/config/api";

import Header from "../common/header/header";
import FormatDate from "../common/functions/formatter";

const Item = ({ news }) => {
  return (
    <>
      <div className="articleItem fl-btw fl-wrap mg-v-50" key={news.id}>
        <div className="articleItemImg">
          <img
            src={`${process.env.REACT_APP_MEDIA_URL}${news.cover_image}`}
            alt=""
          />
        </div>
        <div className="articleItemInfo">
          <h3 className="playfair-lg">{news.Title}</h3>
          <span className="playfair-m">{FormatDate(news.date_added).date}</span>
          <p className="long-text">{news.content}</p>

          {/* <a href="#"><button className="btn btn-black">Tickets</button></a> */}
        </div>
      </div>
    </>
  );
};

const Index = () => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    Api.events.get().then((res) => {
      setEvents(res.data);
    });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <Header />
      <div className="MidSection">
        <h1 className="playfair-xlg gold align-center">Events</h1>

        {events.length > 0 ? (
          <>
            {events.map((event) => (
              <Item news={event} key={event.id} />
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Index;
