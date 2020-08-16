import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
// import NoContent from '../common/404content'

import ApiGet from '../config/axios'
import URLS from '../config/settings'

import Header from '../common/header/header'
// import pic from '../common/assets/img/ac.png'

import Bio from './bio'
// import ClientData from '../common/assets/json/clients.json'

const Client = ({obj}) =>{
    return (
        <a href={`/music/${obj.id}`}>
            <div className="client relative mg-v-20">
                {
                    obj.profile_photo === '' ? 
                    (
                        <div className="emptyimg"></div>
                    ) : (
                        <div className="imgwrap">
                            <img src={`${URLS().IMGS}${obj.profile_photo}`} alt=""/>    
                        </div>
                    )
                }
                
                <div className="absolute h-center align-center">
                    <span className="block playfair-m gold">{obj.name}</span>
                    <span className="block playfair-sm">{obj.tag}</span>
                </div>
            </div>
        </a>
    )
}

const Index = () => {
    return(
        <>
            <Header />
            <div className="full-section">
                <Music />
            </div>
            
        </>
    )
}

const Music = ({props}) => {

    const [clients, setClients] = useState([])

    const getClients = (id) =>{
        ApiGet(`${URLS().CLIENTS}`)
        .then(res=>{
            setClients(res.data)
        })
    }
    
    useEffect(() => {
        getClients()
    },[])

    return(
        <Router>
            <section>
                <Route
                    exact
                    path="/Music"
                    render={() => (
                        <>
                            <h2 className="playfair-xlg gold align-center">Music</h2>
                            <div className="fl-btw fl-wrap">
                                {
                                    clients.map(data=>(
                                        <Client obj={data} />
                                    ))
                                }
                        </div>
                        </>
                    )}
                />

                <Route
                    exact
                    path="/Music/:id"
                    render={(props) => (
                        <>  
                            <Bio props={props} client={clients} />
                        </>
                    )}
                />
                
            </section>
        </Router>
    )
}
 
export default Index