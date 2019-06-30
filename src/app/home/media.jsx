import React from 'react';

import mediaLinks from '../common/assets/json/media.json';

const Videos = () =>{
    return(
        <>
            <div className="video-section">
                <h2 className="playfair-lg">Videos</h2>

                <div className="videoContainer">
                <iframe 
                    width="644" height="362" 
                    src={mediaLinks.youtube} 
                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
            </div>
        </>
    )
}

const Music = () =>{
    return(
        <>
            <div className="music-section">
                <h2 className="playfair-lg">Music</h2>

                <div className="musicContainer">
                <iframe 
                    width="100%" height="362" 
                    scrolling="no" frameBorder="no" allow="autoplay" 
                    src={mediaLinks.soundcloud}></iframe>
                </div>
            </div>
        </>
    )
}


const Media = () =>{
    return(
        <div className="centered-section fl-btw">
            <Videos/>
            <Music />
        </div>
    )
}

export default Media