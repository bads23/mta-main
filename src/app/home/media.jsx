import React from 'react';

import mediaLinks from '../common/assets/json/media.json';

const Videos = () =>{
    return(
        <>
            <div className="video-section">
                <h2 className="playfair-xlg gold align-center mg-v-20">Videos</h2>
                <div className="videoContainer">
                <iframe 
                    src={mediaLinks.youtube} title="videos"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                </div>
            </div>
        </>
    )
}

const Music = () =>{
    return(
        <>
            <div className="music-section mg-v-50">
                <h2 className="playfair-xlg gold align-center">Music</h2>

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
        <div className="centered-section pd-50">
            <Videos/>
            <Music />
        </div>
    )
}

export default Media