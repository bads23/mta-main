import React from 'react'
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom'


import Header from '../common/header/header'
// import NoContent from '../common/404content'


const About = () =>{
    return(
        <>  
            <h1 className="playfair-xxlg align-center gold">About Motion Talent Africa</h1>
            <p className="long-text">
            We are a talent management and events planning company. Since its founding in 2016, Motion Talent Africa has grown into a preeminent
entertainment company providing different entertainment packages for different organisations and talent management services. We work in every aspect of

modern entertainment- with recording artists and producers, live bands, djs, writers and athletes/ sports personnel. We are a full service organization,
supporting our diverse roster of talent via artist/ band management, events planning, music publishing, music distribution, sound and video production, sports

management, strategic brand development and beyond. We purpose to redefine the business of entertainment.
            </p>
            <h2 className="playfair-xlg align-center gold mg-v-50">Overview</h2>
            <p className="long-text">
            The company is divided into several complementary portfolios tailored towards creating a completely empowered artist and a satisfied event host and/or

promoter. We purpose to provide our clients, of talents, with quality nurturing and management in order to significantly reduce the impact of social ills from
society; and, of event host, fully satisfied by our entertainment packages . Our agency, management and talent development services extend to actors, bands,
D.Js, musicians, soccer players, rugby players, and athletes. However, it does not stop there, in future, 7 years in the entertainment industry, the company would

like to venture into other fields of talent.
            </p>
            <h2 className="playfair-xlg align-center gold mg-v-50">Target Audience</h2>
            <p className="long-text">
            The company targets to provide aspiring and experienced talent professionals within and outside Kenya with quality management into a complete professional,
competing at the world stage; and, quality and customized entertainment services to our clients seeking such entertainment.
            </p>

            <div className="fl-btw" id="statements">
            <div>
            <h2 className="playfair-xlg align-center gold mg-v-50">Vision Statement</h2>
            <p className="long-text align-center">
            To be Africa’s dynamic talent development agency that
espouses excellence and objectivity in the identification,
training, and management of aspiring and experienced

talents across the globe.
            </p>
            </div>  
            <div> 
            <h2 className="playfair-xlg align-center gold mg-v-50">Mission Statement</h2>
            <p className="long-text align-center">
            Motion Talent Africa is determined to significantly
reduce the impact of social ills by maximizing the
economic and social value of aspiring and experience
talent professionals and to provide quality
entertainment and event management services for our

clients.
            </p>
            </div>  
            <div>
            <h2 className="playfair-xlg align-center gold mg-v-50">Identity Statement</h2>
            <p className="long-text align-center">
            A constituency of diverse professionals, creating
professional careers and empowering talents in various
fields of entertainment and sports, tailored towards
providing quality entertainment to clients across Africa.
            </p>
            </div>
            </div>

            <div id="stats" className="fl-btw">
                <div className="align-center">
                    <h1 className="gold playfair">35</h1>
                    <p className="playfair-lg">Artists Signed</p>
                </div>

                <div className="align-center">
                    <h1 className="gold playfair">142</h1>
                    <p className="playfair-lg">Songs Released</p>
                </div>

                <div className="align-center">
                    <h1 className="gold playfair">89</h1>
                    <p className="playfair-lg">Sports Personnel</p>
                </div>

                <div className="align-center">
                    <h1 className="gold playfair">9</h1>
                    <p className="playfair-lg">Years of experience</p>
                </div>
            </div>
        </>
    )
}


const Index = () => {
    return (
        <>
            <Header />
            <div className="MidSection">
                <About/>
            </div>
            
        </>
    )
}

export default Index