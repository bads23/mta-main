import React, { useState, useEffect } from "react";
import Api from "app/config/api";

const Client = ({ obj }) => {
  return (
    <a href={`/music/${obj.id}`}>
      <div className="client relative mg-v-20">
        {obj.profile_photo === "" ? (
          <div className="emptyimg"></div>
        ) : (
          <div className="imgwrap">
            <img
              src={`${process.env.REACT_APP_MEDIA_URL}${obj.profile_photo}`}
              alt=""
            />
          </div>
        )}

        <div className="absolute h-center align-center">
          <span className="block playfair-m gold">{obj.name}</span>
          <span className="block playfair-sm">{obj.tag}</span>
        </div>
      </div>
    </a>
  );
};

const Clientele = () => {
  const [clients, setClients] = useState([]);

  const getClients = () => {
    // ApiGet(`${URLS().CLIENTS}`)
    Api.clients.get().then((res) => {
      setClients(res.data);
    });
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div className="full-section mg-v-50 pd-50">
      <h2 className="playfair-xlg align">Talent</h2>

      <div className="fl-btw fl-wrap">
        {clients.slice(0, 4).map((client) => (
          <Client obj={client} key={client.id} />
        ))}
      </div>
    </div>
  );
};

export default Clientele;
