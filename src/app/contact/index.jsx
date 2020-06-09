import React from 'react'
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom'


import Header from '../common/header/header'
// import NoContent from '../common/404content'

import Input1, {Textarea} from '../common/inputs'


const Contact = () => {
    return(
        <>
            <h1 className="playfair-xlg align-center gold">Contact Us</h1>
            {/* <form id="contact-form">
                <Input1 label="Name" type="text" ph="Your Full name"/>
                <Input1 label="Email" type="email" ph="Email Address"/>
                <Input1 label="Subject" type="text" ph="Your Full name"/>
                <Textarea label="Message" ph="What is on your mind?" />
                <button className="btn-black">Submit</button>
            </form> */}

            <div className="mg-v-50 align-center">
                
                <p className="lato-lg">
                    <span className="mg-v-20"><a href="https://www.instagram.com/motiontalentafrica/"> <i className="fab fa-instagram gold"></i> @motiontalentafrica </a> </span> <br/> <br/> 
                    <span className="mg-v-20"><a href="https://www.facebook.com/motiontalentafrica/"> <i className="fab fa-facebook gold"></i> @motiontalentafrica </a> </span> <br/> <br/> 
                    <span className="mg-v-20"><a href="https://twitter.com/mtalent_africa/"> <i className="fab fa-twitter gold"></i> @motiontalentafrica </a> </span> <br/> <br/> 
                    <span className="mg-v-20"><i className="fas fa-phone gold"></i> 0738 085 111</span> <br/> <br/>
                    <span className="mg-v-20"><i className="fas fa-envelope gold"></i> <a href="mailto:info@motiontalentafrica.co.ke" className="gold" > info@motiontalentafrica.co.ke </a> </span> <br/> <br/>
                </p>
            </div>
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