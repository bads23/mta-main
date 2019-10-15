import React from 'react'
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom'


import Header from '../common/header/header'
import NoContent from '../common/404content'



const Index = () => {
    return (
        <>
            <Header />
            <div className="MidSection">
                <NoContent />
            </div>
            
        </>
    )
}

export default Index