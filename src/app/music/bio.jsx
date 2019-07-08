import React, {useState, useEffect} from 'react';

import ApiGet from '../config/axios'
import URLS from '../config/settings'


const BioImages = () =>{
    return (
        <>
            <div className="bioImg">
                <div id="bioImgWrap" className="mg-v-20">
                    <img src="" alt=""/>
                </div>
                <div>
                    <h2 className="gold playfair-lg mg-0">2 Testifayaz</h2>
                    <span className="lato">Band</span>
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

const BioText = () =>{
    return(
        <>
            <div id="BioText">
                <h3 className="playfair gold">Bio</h3>
                <p className="lato">
                2Testifayaz is a duo of Kenya rappers who were born in different regions of the country and had
                separate upbringing until the year 2013 when they first met at a singing competition dubbed
                show academy at Hope Centre Nairobi.
                <br/><br/>
                They started working as 2Testifayaz in 2016. Under the brand 2Testifayaz the duo has been
                responsible for production of 2 Epz and one album which has been well received in the Gospel
                Music industry. Among others the duo has had the following highlights in their career so far;
                <br/><br/>
                <li>Won kasarani gospel music awards 2016- Best Artists of the year.</li>
                <li>First runners up Talanta Awards USA 2016.</li>
                <li>Have a Mix tape together</li>
                <li>Have their first album out</li>
                </p>
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
    
    useEffect(() => {
        getClient()
    })

    return(
        <>
            <div className="fl-btw">
                <BioImages />
                <BioText />
            </div>
        </>
    )
}

export default Bio