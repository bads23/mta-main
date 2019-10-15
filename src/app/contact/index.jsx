import React from 'react'
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom'


import Header from '../common/header/header'
// import NoContent from '../common/404content'

import Input1, {Textarea} from '../common/inputs'


const Contact = () => {
    return(
        <>
            <h1 className="playfair-xlg align-center gold">Contact Us</h1>
            <form>
                <Input1 label="Name" type="text" ph="Your Full name"/>
                <Input1 label="Email" type="email" ph="Email Address"/>
                <Input1 label="Subject" type="text" ph="Your Full name"/>
                <Textarea label="Message" ph="What is on your mind?" />
                <button className="btn-black">Submit</button>
            </form>
        </>
    )
}


const Index = () => {
    return (
        <>
            <Header />
            <div className="MidSection">
                <Contact />
            </div>
            
        </>
    )
}

export default Index