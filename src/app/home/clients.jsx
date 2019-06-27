import React from 'react'
import pic from '../common/assets/img/ac.png'

const Client = () =>{
    return (
        <div className="client relative">
            <img src={pic} alt=""/>
            <div className="absolute h-center">
                <span className="block playfair-m gold">2 Testifayaz</span>
                <span className="block playfair-sm">Band</span>
            </div>
        </div>
    )
}

const Clientele = () =>{
    return(
        <div className="centered-section mg-v-50">

            <h2 className="playfair-lg">Clientele</h2>

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