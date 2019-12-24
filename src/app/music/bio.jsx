import React, {useState, useEffect} from 'react';

import ApiGet from '../config/axios'
import URLS from '../config/settings'


const BioImages = ({data}) =>{
    return (
        <>
            <div className="bioImg">
                <div id="bioImgWrap" className="mg-v-20">
                    <img src={`${URLS().IMGS}${data.profile_photo}`} alt=""/>
                </div>
                <div>
                    <h2 className="gold playfair-lg mg-0">{data.name}</h2>
                    <span className="lato">{data.tag}</span>
                    <span className="socials mg-v-50 block">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-soundcloud"></i>
                    </span>
                </div>
            </div>
        </>
    )
}


const BioText = ({data}) =>{
    
    const insertHtml = () =>{
        document.getElementById('bioData').innerHTML = data.bio
    }

    useEffect(() => {
        insertHtml()
    })

    return(
        <>
            <div id="BioText" className="long-text">
                <h2>Bio</h2>
                
                <div id="bioData"></div>
            </div>
        </>
    )
}

const Bio = ({props}) =>{

    const [client, setClient] = useState([])
    
    const getClient = () =>{
        ApiGet(`${URLS().CLIENTS}${props.match.params.id}`)
        .then(res=>{
            setClient(res.data)
        })
    }

    useEffect(() => getClient(), [])

    return(
        <>
            <div className="fl-btw">
                <BioImages data={client} />
                <BioText data={client} />
            </div>
        </>
    )
}

export default Bio