import React, { useState, useEffect } from "react";
import _ from "underscore";
import Api from "app/config/api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = ({ song, playPrev, playNext }) => {
  const toggleList = () => {
    var list = document.getElementById("playlist");
    if (list.style.display === "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  };

  return (
    <div className="player">
      <div className="controls">
        <AudioPlayer
          autoPlay={false}
          volume={0.3}
          src={`${process.env.REACT_APP_MEDIA_URL}/${song.audio}`}
          showSkipControls={true}
          showJumpControls={false}
          customAdditionalControls={[]}
          customIcons={{
            play: <i className="fas fa-play fs-sm" />,
            pause: <i className="fas fa-pause" />,
            next: <i className="fas fa-step-forward" />,
            previous: <i className="fas fa-step-backward" />,
          }}
          onClickPrevious={() => playPrev(song.id)}
          onClickNext={() => playNext(song.id)}
        />
      </div>
      <div className="artwork">
        <div className="artworkWrap">
          <div className="thumbnail">
            <img
              src={`${process.env.REACT_APP_MEDIA_URL}/${song.image}`}
              alt=""
            />
          </div>
          <div className="details">
            <p className="lato-m text-center  mg-h-10">
              <span className="b">
                {song.name === undefined ? "" : `${song.name}`}
              </span>
              <br />
              <span className="lato-sm">
                {song.artist_name === undefined ? "" : `${song.artist_name}`}
              </span>
            </p>
          </div>
        </div>
        <div className="playlistBtn" onClick={toggleList}>
          <i className="fas fa-list"></i>
        </div>
      </div>
    </div>
  );
};

const Playlist = ({ music, song, setSong }) => {
  const showVideoPlayer = () => {
    let videoEl = document.getElementById("videoPlayer");
    videoEl.style.display = "inline-block";
  };

  return (
    <div className="playlist" id="playlist">
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

// const Music = () => {
//   const [music, setMusic] = useState([]);
//   const [song, setSong] = useState({});

//   const playNext = (id) => {
//     var index = _.findLastIndex(music, { id: id });

//     if (index + 1 >= music.length) {
//       setSong(music[0]);
//     } else {
//       setSong(music[index + 1]);
//     }
//   };
//   const playPrev = (id) => {
//     var index = _.findLastIndex(music, { id: id });

//     if (index - 1 < 0) {
//       // setSong(music[music.length]);
//     } else {
//       setSong(music[index - 1]);
//     }
//   };

//   useEffect(() => {
//     // axios.get(`${URLS().MUSIC}`);
//     Api.music.get().then((res) => {
//       let songs = [];
//       _.each(res.data, (obj) => {
//         if (obj.audio !== null) {
//           songs.push(obj);
//         }
//       });
//       setMusic(songs);
//       setSong(res.data[0]);
//     });
//   }, []);

//   return (
//     <>
//       <div className="music-section">
//         <h2 className="playfair-xlg">Music</h2>
//         <div className="musicContainer">
//           {music.length <= 0 ? (
//             <div className="fl-btw">
//               <div>
//                 <Skeleton width={250} height={250} />
//                 <Skeleton />
//               </div>
//               <div>
//                 <Skeleton width={800} height={50} count={5} />
//               </div>
//             </div>
//           ) : (
//             <>
//               <Player
//                 song={song}
//                 setSong={setSong}
//                 playPrev={playPrev}
//                 playNext={playNext}
//               />
//               <Playlist song={song} setSong={setSong} music={music} />
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

const FooterPlayer = () => {
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
      <div id="footerPlayer">
        <Player
          song={song}
          setSong={setSong}
          playPrev={playPrev}
          playNext={playNext}
        />
        <Playlist song={song} setSong={setSong} music={music} />
      </div>
    </>
  );
};

const Media = () => {
  return <FooterPlayer />;
};

export default Media;
