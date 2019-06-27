import React from 'react'
import pic from '../common/assets/img/ac.png'

const MainItem = () =>{
    return (
        <div className="client relative">
            <img src={pic} alt=""/>
            <div className="absolute h-center">
                <span className="block playfair-lg gold">2 Testifayaz</span>
                <span className="block playfair-m">Band</span>
            </div>
        </div>
    )
}

const Shop = () =>{
    return(
        <div className="centered-section mg-v-50">
            <h2 className="playfair-lg">Shop</h2>
            <div className="fl-btw">
                
            </div>
        </div>
    )
}

export default Shop