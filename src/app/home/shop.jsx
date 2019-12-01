import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { shuffle } from '../common/functions/helpers'


const Item = ({obj}) =>{
    return (
        <div className="item relative mg-v-20">
            <a href={`http://store.motiontalentafrica.co.ke/product/${obj.id}`} target="_blank" rel="noopener noreferrer">
                <div className="prwrap"> 
                    <img src={`http://media.motiontalentafrica.co.ke/${obj.images[0].path}`} alt=""/>
                </div>
                <div className="absolute h-center mg-v-10">
                    <span className="block playfair-m align-center">{obj.name}</span>
                </div>
            </a>
        </div>
    )
}

// const BigItem = (items) =>{

//     var item_in = getRndInteger(items.length)

//     return (
//         <div className="big-client relative mg-v-20">
//             <img src={pic} alt=""/>
//             <div className="absolute h-center align-center">
//                 <span className="block playfair-m"> {items[item_in].name} </span>
//             </div>
//         </div>
//     )
// }



const Shop = () =>{
    const [items, setItems] = useState([])

    const getItems = () =>{
        axios.get('https://b23.pythonanywhere.com/catalog/')
        .then((res) => {
            setItems(shuffle(res.data))
        })
    }

    useEffect(() =>{
        getItems()
    }, [])

    return(
        <div className="centered-section mg-v-50 pd-50">
            <h2 className="playfair-lg">Online Shop</h2>
            <div className="" id="item-catalogue">
                {
                    items.slice(0,7).map(item => (
                        <Item obj={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Shop