import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import _ from "underscore";
import Api from "app/config/api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import vid from "app/common/assets/img/2test.mp4"

const Video = () => {

  const closeVideoPlayer = () => {
    let videoEl = document.getElementById("videoPlayer");
    videoEl.style.display = "none";
  }

  return (
    <>
      <div className="video-section" id="videoPlayer" style={{display:"none"}}>
        <div className="videoContainer">
          <div className="videoInfo">
            <p className="playfair-lg">Oliskia Wapi - 2 Testifayaz</p>
            <p className="playfair-md" onClick={closeVideoPlayer}>
              <i className="fas fa-times fa-2x"> </i>
            {/* Close */}
            </p>
          </div>
          <video controls>
            <source src={vid} type="video/mp4" />
            {/* <source src="movie.ogg" type="video/ogg" /> */}
          </video>
        </div>
      </div>
    </>
  );
};

const Player = ({ song, playPrev, playNext }) => {
  return (
    <div className="player">
      <div className="thumbnail">
        <img src={`${process.env.REACT_APP_MEDIA_URL}/${song.image}`} alt="" />
      </div>
      <div>
        <p className="lato-m text-center">{`${song.name} - ${song.artist_name}`}</p>
      </div>
      <div className="controls">
        <AudioPlayer
          autoPlay={false}
          volume={0.2}
          src={`${process.env.REACT_APP_MEDIA_URL}/${song.audio}`}
          showSkipControls={true}
          showJumpControls={false}
          customAdditionalControls={[]}
          customVolumeControls={[]}
          // customIcons={{
          //   play: <i className="fas fa-play fa-sm" />,
          //   pause: <i className="fas fa-pause fa-sm" />,
          //   next: <i className="fas fa-step-forward" />,
          //   previous: <i className="fas fa-step-backward" />,
          // }}
          onClickPrevious={() => playPrev(song.id)}
          onClickNext={() => playNext(song.id)}
        />
      </div>
    </div>
  );
};

const Playlist = ({ music, song, setSong }) => {

  const showVideoPlayer = () => {
    let videoEl = document.getElementById("videoPlayer");
    videoEl.style.display = "inline-block";
  }

  return (
    <div className="playlist">
      <div className="list">
        {music.length > 0
          ? music.map((item) => (
              <div className="song" key={item.id} onClick={() => setSong(item)}>
                <div>
                  <span className="thumb">
                    {item.image !== null && (
                      <img
                        src={`${process.env.REACT_APP_MEDIA_URL}/${item.image}`}
                        alt=""
                        width="40px"
                        height="40px"
                      />
                    )}

                    {item.image === null && (
                      <span>
                        <i className="fas fa-music"></i>
                      </span>
                    )}
                  </span>
                  <span>
                    <p className="lato-m">
                      {`${item.name} -  ${item.artist_name}`}
                      <span className="gold i">
                        {song.id === item.id && `Now playing`}
                      </span>
                    </p>
                  </span>
                </div>

                <div className="song-controls">
                  <span>
                    <i className="fas fa-play" />
                  </span>

                  {/* {item.video !== null ? (
                    <span>
                      <i className="fas fa-video" />
                    </span>
                  ) : (
                    ""
                  )} */}

                    <span onClick={() => showVideoPlayer()}>
                      <i className="fas fa-video" />
                    </span>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

const Music = () => {
  const [music, setMusic] = useState([]);
  const [song, setSong] = useState({});

  const playNext = (id) => {
    var index = _.findLastIndex(music, { id: id });

    if (index + 1 >= music.length) {
      setSong(music[0]);
    } else {
      setSong(music[index + 1]);
    }
  };
  const playPrev = (id) => {
    var index = _.findLastIndex(music, { id: id });

    if (index - 1 < 0) {
      // setSong(music[music.length]);
    } else {
      setSong(music[index - 1]);
    }
  };

  useEffect(() => {
    // axios.get(`${URLS().MUSIC}`);
    Api.music.get().then((res) => {
      let songs = [];
      _.each(res.data, (obj) => {
        if (obj.audio !== null) {
          songs.push(obj);
        }
      });
      setMusic(songs);
      setSong(res.data[0]);
    });
  }, []);

  return (
    <>
      <div className="music-section">
        <h2 className="playfair-xlg">Music</h2>
        <div className="musicContainer">
          {music.length <= 0 ? (
            <div className="fl-btw">
              <div>
                <Skeleton width={250} height={250} />
                <Skeleton />
              </div>
              <div>
                <Skeleton width={800} height={50} count={5} />
              </div>
            </div>
          ) : (
            <>
              <Player
                song={song}
                setSong={setSong}
                playPrev={playPrev}
                playNext={playNext}
              />
              <Playlist song={song} setSong={setSong} music={music} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

const Media = () => {
  return (
    <div className="full-section pd-50" id="media-wrapper">
      <Video />
      <Music />
    </div>
  );
};

export default Media;
