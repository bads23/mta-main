import React, {useState, useEffect} from 'react';
import ApiGet from '../config/axios'
import URLS from '../config/settings'

const Article = ({props}) =>{
    
    const [article, setArticle] = useState([])

    const getArticle = () => {
        ApiGet(`${URLS().NEWS}/${props.match.params.id}`)
        .then(res => {
            setArticle(res.data)
            setContent(res.data.Content)
        })
    }

    const setContent = (data) => {
        document.getElementById('articleDiv').innerHTML = data
    }

    useEffect(() => {
        getArticle()
    },[])
    
    return(
        <>
            <div className="article">

                <div className="articleImg">
                    <img src={article.Cover_Image} alt="hero"/>
                </div>

                <h1 className="playfair-xlg align-center">{article.Title}</h1>

                <span className="dateSpan block align-center playfair-m"></span>
                
                <span className="subtitleSpan lato-m i align-center gold block mg-v-20">{article.Subtitle}</span>

                <div className="long-text" id="articleDiv">
                    
                </div>

            </div>
        </>
    )
}

export default Article