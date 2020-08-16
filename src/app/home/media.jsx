import React from 'react';

import mediaLinks from '../common/assets/json/media.json';

const Videos = () =>{
    return(
        <>
            <div className="video-section">
                <h2 className="playfair-xlg black mg-v-20">Videos</h2>
                <div className="videoContainer">
                <iframe 
                    src={mediaLinks.youtube} title="videos"
                    frameBorder="0" 
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                </div>
            </div>
        </>
    )
}

const Music = () =>{
    return(
        <>
            <div className="music-section">
                <h2 className="playfair-xlg">Music</h2>

                <div className="musicContainer">
                <iframe 
                    width="100%" title="music"
                    scrolling="no" frameBorder="no" allow="autoplay" 
                    src={mediaLinks.soundcloud}></iframe>
                </div>
            </div>
        </>
    )
}


const Media = () =>{
    return(
        <div className="full-section pd-50" id="media-wrapper"> 
            <Videos />
            <Music />
        </div>
    )
}

export default Media