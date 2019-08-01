import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import pic1 from '../common/assets/img/ALGERIA.jpg'
import pic2 from '../common/assets/img/harambee.jpg'

import Header from '../common/header/header'
import NoContent from '../common/404content'
import Article1, { Article2 } from './article'
import ArticlesData from '../common/assets/json/articles.json'

const Item = () => {
    return(
        <>
            <div className="articleItem fl-btw fl-wrap mg-v-50">
                <div className="articleItemImg">
                    <img src={pic1} alt=""/>
                </div>
                <div className="articleItemInfo">
                    <h3 className="playfair-lg">Africa cup of Nations 2019, CAIRO, EGYPT: The Champions Group “C”;
A Kenyans’s Perspective.</h3>
                    <span className="playfair-m">June 24, 2019</span>
                    <p className="long-text">Typical of the Kenyan culture and politics, the Government had to recognize the team’s effort after qualifying through to represent the country at the Continental Stage. The government’s support was solidified by a three-week training camp in Paris, France and playing of two credible build up matches.</p>

                    <a href="/news/article1"><button className="btn btn-black">Read More</button></a>
                </div>
            </div>
        </>
    )
}

const Item2 = () => {
    return(
        <>
            <div className="articleItem fl-btw fl-wrap mg-v-50">
                <div className="articleItemImg">
                    <img src={pic2} alt=""/>
                </div>
                <div className="articleItemInfo">
                    <h3 className="playfair-lg">THE SPORTS ACT, NO. 25 OF 2013: REGISTRATION AND REGULATION OF SPORTS AND LICENCING; AN OVERVIEW</h3>
                    <span className="playfair-m">June 25, 2019</span>
                    <p className="long-text">Part VI of The Sports Act, No. 25 of 2013 (The Act), provides the substantive and
procedural law for registration, regulation and licencing of sports activities in Kenya.
The Act, Section 45, establishes the office of Sports Registrar (the Registrar) as an
office under Public Service.</p>

                    <a href="/news/article2"><button className="btn btn-black">Read More</button></a>
                </div>
            </div>
        </>
    )
}

const Index = () => {

    // const [articles, setArticles] = useState([])

    // const getArticles = () =>{
    //     console.log(ArticlesData)
    // } 

    // useEffect(() => {
    //     getArticles()
    // },[])

    return (
        <>
            <Header />
            <div className="MidSection">
                <Router>
                    <Route exact path="/News" render={() =>(
                        <>
                            <h1 className="playfair-xlg">News</h1>
                            <div className="articlesWrap">
                                <Item/>
                                <Item2/>
                            </div>
                        </>
                    )}/>

                    <Route exact path="news/article1" component={Article1} />
                    <Route exact path="news/article2" component={Article2} />
                </Router>
                    
                
            </div>
            
        </>
    )
}

export default Index