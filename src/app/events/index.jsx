import React, {useState, useEffect} from 'react'
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ApiGet from '../config/axios'
import URLS from '../config/settings'

import Header from '../common/header/header'
import NoContent from '../common/404content'
import FormatDate from '../common/functions/formatter'

const Item = ({news}) => {
    return(
        <>
            <div className="articleItem fl-btw fl-wrap mg-v-50" key={news.id}>
                <div className="articleItemImg">
                    <img src={`${URLS().IMGS}${news.cover_image}`} alt=""/>
                </div>
                <div className="articleItemInfo">
                    <h3 className="playfair-lg">{news.Title}</h3>
                    <span className="playfair-m">{FormatDate(news.date_added).date}</span>
                    <p className="long-text">{news.content}</p>

                    {/* <a href="#"><button className="btn btn-black">Tickets</button></a> */}
                </div>
            </div>
        </>
    )
}




const Index = () => {

    const [events, setEvents] = useState([])

    const getEvents = () => {
        ApiGet(`${URLS().EVENTS}`)
        .then(res => {
            setEvents(res.data)
        })
    }

    useEffect(() => {
        getEvents()
    },[])

    return (
        <>
            <Header />
            <div className="MidSection">
                <h1 className="playfair-xlg gold align-center">Events</h1>

                {
                    events.length > 0 ? (
                        <>
                        {
                            events.map(event =>(
                                <Item news={event} key={event.id}/>
                            ))
                        }
                        </>
                    ) : (
                        <>
                        
                        </>
                    )
                }


            </div>
            
        </>
    )
}

export default Index