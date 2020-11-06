import React, {useState, useEffect, useCallback} from 'react';

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
                        <a href={data.facebook} target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook"></i></a>
                        <a href={data.youtube} target="_blank" rel="noopener noreferrer"> <i className="fab fa-youtube"></i></a>
                        <a href={data.twitter} target="_blank" rel="noopener noreferrer"> <i className="fab fa-twitter"></i></a>
                        <a href={data.instagram} target="_blank" rel="noopener noreferrer"> <i className="fab fa-instagram"></i></a>
                        <a href={data.soundcloud} target="_blank" rel="noopener noreferrer"> <i className="fab fa-soundcloud"></i></a>
                    </span>
                </div>
            </div>
        </>
    )
}


const BioText = ({data}) =>{
    
    const insertHtml = () =>{
        if (data.bio !== ''){
            document.getElementById('bioData').innerHTML = data.bio
        }
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
    
    const getClient = useCallback(() =>{
        ApiGet(`${URLS().CLIENTS}${props.match.params.id}`)
        .then(res=>{
            setClient(res.data)
        })
    },[props])

    useEffect(() => getClient(), [getClient])

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