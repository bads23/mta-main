import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ApiGet from '../config/axios'
import URLS from '../config/settings' 
import Header from '../common/header/header'
import Article from './article'
import FormatDate from '../common/functions/formatter'

const Item = ({news}) => {
    return(
        <>
            <div className="articleItem fl-btw fl-wrap mg-v-50" key={news.id}>
                <div className="articleItemImg">
                    <img src={news.Cover_Image} alt=""/>
                </div>
                <div className="articleItemInfo">
                    <h3 className="playfair-lg">{news.Title}</h3>
                    <span className="playfair-m">{FormatDate(news.date_added).date}</span>
                    <p className="long-text">{news.Subtitle}</p>

                    <a href={`/news/article/${news.id}`}><button className="btn btn-black">Read More</button></a>
                </div>
            </div>
        </>
    )
}


const Index = () => {

    const [news, setNews] = useState([])

    const getNews = () => {
        
        ApiGet(`${URLS().NEWS}`)
        .then(res=>{
            setNews(res.data)
        })
    }

    useEffect(() => getNews(), [])

    return (
        <>
            <Header />
            <div id="topbar"></div>
            <div className="MidSection">
                <Router>
                    <Route exact path="/News" render={() =>(
                        <>
                            <h1 className="playfair-xlg gold">News</h1>
                            <div className="articlesWrap">
                                {
                                    news.length > 0 ? (
                                        <>
                                            {
                                                news.map(newsItem => (
                                                    <Item news={newsItem} key={newsItem.id}/>
                                                ))
                                            }
                                        </>
                                    ) : (
                                        <></>
                                    )
                                }
                            </div>
                        </>
                    )}/>

                    <Route exact path="news/article/:id" render={(props) => <Article props={props} />} />

                </Router>
            </div>
            
        </>
    )
}

export default Index