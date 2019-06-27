import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Header from '../common/header/header'
import pic from '../common/assets/img/ac.png'


const Client = () =>{
    return (
        <Link to="/Music/3">
            <div className="client relative mg-v-20">
                <img src={pic} alt=""/>
                <div className="absolute h-center">
                    <span className="block playfair-m gold">2 Testifayaz</span>
                    <span className="block playfair-sm">Band</span>
                </div>
            </div>
        </Link>
    )
}

const BioDP = () =>{
    return(
        <>
        
        </>
    )
}


const Music = () => {
    return(
        <Router>
            
            <Header />
            <section className="MidSection relative">
                <Route
                    exact
                    path="/Music"
                    render={() => (
                        <>
                            <h2 className="playfair-xlg gold align-center">Music</h2>
                            <div className="fl-btw fl-wrap">
                                <Client/>
                                <Client/>
                                <Client/>
                                <Client/>
                                
                        </div>
                        </>
                    )}
                />

                <Route
                    exact
                    path="/Music/:id"
                    render={() => (
                        <>
                            <h3>Test</h3>
                        </>
                    )}
                />
                
            </section>
        </Router>
    )
}

export default Music