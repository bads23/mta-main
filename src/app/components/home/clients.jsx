import React from 'react'
import pic from '../../common/assets/img/ac.png'

const Client = () =>{
    return (
        <div className="client">
            <img src={pic} alt=""/>
            <div>
                <span className="block playfair-lg gold">2 Testifayaz</span>
                <span className="block playfair-m">Band</span>
            </div>
        </div>
    )
}

const Clientele = () =>{
    return(
        <div className="centered-section mg-v-50">

            <h2 className="playfair-xlg">Clientele</h2>

            <div className="fl-btw">
                <Client/>
                <Client/>
                <Client/>
                <Client/>
            </div>
        </div>
    )
}

export default Clientele