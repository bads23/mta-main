import React from 'react'
import {Link} from 'react-router-dom'
import pic from '../common/assets/img/ac.png'

import ClientData from '../common/assets/json/clients.json';

const Client = ({obj}) =>{
    return (
        <Link to={`/music/${obj.client}`}>
            <div className="client relative">
                <img src={pic} alt=""/>
                <div className="absolute h-center">
                    <span className="block playfair-m gold">{obj.client}</span>
                    <span className="block playfair-sm">{obj.type}</span>
                </div>
            </div>
        </Link>
    )
}

const Clientele = () =>{
    var data = [...ClientData]
    console.log(data)
    return(
        <div className="centered-section mg-v-50">

            <h2 className="playfair-lg">Clientele</h2>

            <div className="fl-btw">
                {
                    data.slice(0,4).map(client => (
                        <Client obj={client} />
                    ))
                }
            </div>
        </div>
    )
}

export default Clientele