import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import ApiGet from '../config/axios'
import URLS from '../config/settings'

import pic from '../common/assets/img/ac.png'
import ClientData from '../common/assets/json/clients.json';

const Client = ({obj}) =>{
    return (
        <a href={`/music/${obj.id}`}>
            <div className="client relative mg-v-20">
                <img src={`https://media.motiontalentafrica.co.ke/media/avatars/${obj.profile_photo}`} alt=""/>
                <div className="absolute h-center">
                    <span className="block playfair-m gold">{obj.name}</span>
                    <span className="block playfair-sm">{obj.tag}</span>
                </div>
            </div>
        </a>
    )
}

const Clientele = () =>{
    var data = [...ClientData]
    console.log(data)

    const [clients, setClients] = useState([])
    
    const getClients = () =>{
        ApiGet(`${URLS().CLIENTS}`)
        .then(res=>{
            setClients(res.data)
        })
    }
    
    useEffect(() => {
        getClients()
    },[])

    return(
        <div className="centered-section mg-v-50 pd-50">

            <h2 className="playfair-lg">Clientele</h2>

            <div className="fl-btw fl-wrap">
                {
                    clients.slice(0,4).map(client => (
                        <Client obj={client} />
                    ))
                }
            </div>
        </div>
    )
}

export default Clientele