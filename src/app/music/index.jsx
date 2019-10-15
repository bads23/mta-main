import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import NoContent from '../common/404content'

import ApiGet from '../config/axios'
import URLS from '../config/settings'

import Header from '../common/header/header'
// import pic from '../common/assets/img/ac.png'

import Bio from './bio'
// import ClientData from '../common/assets/json/clients.json'

const Client = ({obj}) =>{
    return (
        <Link to={`/Music/${obj.id}`}>
            <div className="client relative mg-v-20">
                <img src={`http://media.motiontalentafrica.co.ke/media/avatars/${obj.profile_photo}`} alt=""/>
                <div className="absolute h-center">
                    <span className="block playfair-m gold">{obj.name}</span>
                    <span className="block playfair-sm">{obj.type}</span>
                </div>
            </div>
        </Link>
    )
}


const Index = () => {
    return(
        <>
            <Header />
            <div className="MidSection">
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