import React, {useState, useEffect} from 'react';
import ApiGet, {ApiPut} from '../config/axios'
import URLS from '../config/settings'

const Article = ({props}) =>{
    
    const [article, setArticle] = useState([])

    const getArticle = () => {
        ApiGet(`${URLS().NEWS}/${props.match.params.id}`)
        .then(res => {
            setArticle(res.data)
            setContent(res.data.Content)
            updateViews(res.data)
        })
        
    }

    const setContent = (data) => {
        document.getElementById('articleDiv').innerHTML = data
    }

    const updateViews = (data) => {
        data.views += 1
        console.log(data)

        ApiPut(`${URLS().NEWS}/${props.match.params.id}/`, data)
        .then(res => {
            console.log(res.data)
        })
    }

    useEffect(() => {
        getArticle()
    },[])
    
    return(
        <>
            <div className="article">

                <div className="articleImg">
                    <img src={`${URLS().IMGS}${article.Cover_Image}`} alt="hero"/>
                </div>

                <h1 className="playfair-xlg">{article.Title}</h1>

                <span className="dateSpan block playfair-m"></span>
                
                <span className="subtitleSpan lato-sm i block mg-v-20">{article.Subtitle}</span>
                
                <div className="text-wrapper">
                    <div className="author">
                        
                        <h3 className="playfair mg-v-5">Munase Mukombwa</h3>
                        <span className="lato-sm i">October 16, 2019</span>

                        <p className="author_socials">
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mtalent_africa/">
                                <i className="fab fa-twitter"></i>
                            </a>

                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/motiontalentafrica/">
                                <i className="fab fa-facebook-square"></i>
                            </a>

                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/motiontalentafrica/">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </p>
                    </div>
                <div className="long-text" id="articleDiv">
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default Article