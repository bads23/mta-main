import React from 'react'
import ac from '../common/assets/img/ac.png'

import items from '../common/assets/json/items.json'
import pic from '../common/assets/img/Drumx2.png'


const Item = ({obj}) =>{
    return (
        <div className="client relative mg-v-20">
            <img src={`http://media.motiontalentafrica.co.ke/media/avatars/${obj.photo}`} alt=""/>
            <div className="absolute h-center">
                <span className="block playfair-m">{obj.name}</span>
            </div>
        </div>
    )
}

const BigItem = () =>{
    return (
        <div className="big-client relative mg-v-20">
            <img src={pic} alt=""/>
            <div className="absolute h-center">
                <span className="block playfair-m">5 Piece Drum Set</span>
            </div>
        </div>
    )
}



const Shop = () =>{
    return(
        <div className="centered-section mg-v-50 pd-50">
            <h2 className="playfair-lg">Shop (Coming Soon)</h2>
            <div className="fl-btw fl-wrap" id="item-catalogue">
                <div id="big-item">
                    <BigItem />
                </div>

                <div className="fl-btw fl-wrap" id="small-items">
                    {
                        items.map(item => (
                            <Item obj={item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Shop