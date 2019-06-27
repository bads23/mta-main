import React from 'react';

const Videos = () =>{
    return(
        <>
            <div className="video-section">
                <h2 className="playfair-lg">Video</h2>

                <div className="videoContainer">

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