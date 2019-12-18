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