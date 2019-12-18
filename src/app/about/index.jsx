import React from 'react'
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom'


import Header from '../common/header/header'
// import NoContent from '../common/404content'


const About = () =>{
    return(
        <>  
            <h1 className="playfair-xxlg align-center gold">About Motion Talent Africa</h1>
            <p className="long-text long-par align-center">
            We are a talent management and entertainment service provider. Since its founding in 2016, Motion Talent Africa has grown into a preeminent
entertainment company providing different entertainment packages for different organisations and talent management services. We work in every aspect of

modern entertainment- with recording artists and producers, live bands, djs, writers and athletes/ sports personnel. We are a full service organization,
supporting our diverse roster of talent via artist/ band management, events planning, music publishing, music distribution, sound and video production, sports

management, strategic brand development and beyond. We purpose to redefine the business of entertainment.
            </p>

            <h2 className="playfair-xlg align-center gold">Team</h2>
            
            <div className="team">
                <div>
                    <div className="av-wrap">
                        <img src="" alt=""/>
                    </div>
                    <h3>MUNASE MUKHOMBWA</h3>
                    <span>Founder/CEO</span>
                    <p>Munase Mukhombwa Klinsman is the Founder and CEO of Motion Talent Africa (MTA). He is a talent enthusiast. With the aim of empowering talent and eradicating social ills from society, Motion Talent Africa was born. He has experience as both an athlete and as a creative.</p>
                </div>
                
                <div>
                    <div className="av-wrap">
                        <img src="" alt=""/>
                    </div>
                    <h3>VICTOR ATANDI </h3>
                    <span>Sound Engineer and Director</span>
                    <p>Victor Makori Atandi is a music enthusiast. At Motion Talent Africa (MTA) he is the Sound Engineer and is responsible for the quality of audio content created amongst MTA’s creative(s) and athletes. He has tremendous experience in sound production having produced music for several well established artists.</p></div>
                    
                <div>
                    <div className="av-wrap">
                        <img src="https://media.motiontalentafrica.co.ke/media/avatars/eugene.jpg" alt=""/>
                    </div>
                    <h3>EUGENE MUSUNGU</h3>
                    <span>Visuals Director</span>
                    <p>Eugene Musungu is passionate about reproducing moments with a blend of creativity. At Motion Talent Africa he is the Visuals Director and is in charge of the creativity of the visual content creation. He has experience in video production having shot content that has been played on the Kenya national mainstream media.</p></div>
            </div>

            <h2 className="playfair-xlg align-center gold mg-v-50">Target Audience</h2>
            <p className="long-text">
            The company targets to provide aspiring and experienced talent professionals within and outside Kenya with quality management into a complete professional,
competing at the world stage; and, quality and customized entertainment services to our clients seeking such entertainment. You may also purchase music and sports merchandise on our <a href="http://store.motiontalentafrica.co.ke/" target="_blank" className="gold" rel="noopener noreferrer"> <b>Online Store.</b> </a> 
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
                    <h1 className="gold playfair">5</h1>
                    <p className="playfair-lg">Artists Signed</p>
                </div>

                {/* <div className="align-center">
                    <h1 className="gold playfair"> - </h1>
                    <p className="playfair-lg">Songs Released</p>
                </div> */}

                <div className="align-center">
                    <h1 className="gold playfair">2</h1>
                    <p className="playfair-lg">Sports Personnel</p>
                </div>

                <div className="align-center">
                    <h1 className="gold playfair">3</h1>
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
                <div id="about-wrap">   
                    <About/>
                </div>
            </div>
            
        </>
    )
}

export default Index