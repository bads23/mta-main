import React, { useState, useEffect } from "react";
import Header from "../common/header/header";
import Footer from "../common/header/footer";
import Api from "app/config/api";

const Team = () => {
  return (
    <>
      <div className="team">
        <div>
          <div className="av-wrap">
            <img
              src="https://media.motiontalentafrica.co.ke/media/avatars/ceo.jpg"
              alt=""
            />
          </div>
          <h3>MUNASE MUKHOMBWA</h3>
          <span>Founder/CEO</span>
          <p>
            Munase Mukhombwa Klinsman is the Founder and CEO of Motion Talent
            Africa (MTA). He is a talent enthusiast. With the aim of empowering
            talent and eradicating social ills from society, Motion Talent
            Africa was born. He has experience as both an athlete and as a
            creative.
          </p>
        </div>

        <div>
          <div className="av-wrap">
            <img
              src="https://media.motiontalentafrica.co.ke/media/avatars/shaman.jpg"
              alt=""
            />
          </div>
          <h3>Shaman </h3>
          <span>Sound Engineer and Director</span>
          <p>
            Victor Makori Atandi is a music enthusiast. At Motion Talent Africa
            (MTA) he is the Sound Engineer and is responsible for the quality of
            audio content created amongst MTA’s creative(s) and athletes. He has
            tremendous experience in sound production having produced music for
            several well established artists.
          </p>
        </div>

        <div>
          <div className="av-wrap">
            <img
              src="https://media.motiontalentafrica.co.ke/media/avatars/eugene.jpg"
              alt=""
            />
          </div>
          <h3>EUGENE MUSUNGU</h3>
          <span>Visuals Director</span>
          <p>
            Eugene Musungu is passionate about reproducing moments with a blend
            of creativity. At Motion Talent Africa he is the Visuals Director
            and is in charge of the creativity of the visual content creation.
            He has experience in video production having shot content that has
            been played on the Kenya national mainstream media.
          </p>
        </div>
      </div>
    </>
  );
};

const Statements = ({ props }) => {
  return (
    <>
      <div className="fl-btw" id="statements">
        <div>
          <h2 className="playfair-xlg align-center gold mg-v-50">
            Vision Statement
          </h2>
          <p className="long-text align-center">{props.vision}</p>
        </div>

        <div>
          <h2 className="playfair-xlg align-center gold mg-v-50">
            Mission Statement
          </h2>
          <p className="long-text align-center">{props.mission}</p>
        </div>

        <div>
          <h2 className="playfair-xlg align-center gold mg-v-50">
            Identity Statement
          </h2>
          <p className="long-text align-center">{props.identity}</p>
        </div>
      </div>
    </>
  );
};

const About = () => {
  const [about, setAbout] = useState({});

  const getAbout = () => {
    // ApiGet(`${URLS().ABOUT}1/`);
    Api.about.get(1).then((res) => {
      setAbout(res.data);
    });
  };

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <>
      <h1 className="playfair-xxlg align-center gold">
        About Motion Talent Africa
      </h1>
      <p className="long-text long-par align-center">{about.about}</p>

      <Team />

      <h2 className="playfair-xlg align-center gold mg-v-50">
        Target Audience
      </h2>
      <p className="long-text">{about.target}</p>

      <Statements props={about} />

      {/* <div id="stats" className="fl-btw">
                <div className="align-center">
                    <h1 className="playfair">5</h1>
                    <p className="playfair-lg">Artists Signed</p>
                </div>

                <div className="align-center">
                    <h1 className="playfair">2</h1>
                    <p className="playfair-lg">Sports Personnel</p>
                </div>

                <div className="align-center">
                    <h1 className="playfair">3</h1>
                    <p className="playfair-lg">Years of experience</p>
                </div>
            </div> */}
    </>
  );
};

const Index = () => {
  return (
    <>
      <Header />
      <div className="full-section">
        <div id="about-wrap">
          <About />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
