import React, { Component } from 'react'
import ApiGet from '../../config/axios'
import URLS from '../../config/settings'
// var Carousel = require('react-responsive-carousel').Carousel;


const Slide = ({data}) => {
  return (
    <>
      <div className="slides">
        <img src={data.Cover_Image} alt={data.Title}/>
        <div className="caption">
          <a href={`news/article/${data.id}`}>
            <h1>
              {data.Title}
            </h1>
          </a>
        </div>
      </div>
    </>
  )
}


class Slider extends Component {

  state = {
    news: []
  }

  componentDidMount(){
    this.getNews()
  }

  getNews = () =>{
    ApiGet(`${URLS().NEWS}`)
    .then(res => {
      this.setState({
        news: res.data
      })

      this.autoSlide();
    })
  }

  autoSlide(){
    setInterval(() => {
      this.slideNext()
    }, 7000)
  }

  slideNext = () =>{
    var sliderWrap = document.getElementById('sliderWrap')
    var css = getComputedStyle(sliderWrap);
    var left = parseInt(css.left, 10);
    var right = parseInt(css.right, 10);
    var width = parseInt(css.width, 10);
    var newLeft = left - (width/3) - 17;
    if(right > newLeft){
      sliderWrap.style.left = '0px';
    } else{
      sliderWrap.style.left = newLeft+'px';
    }
  }

  slidePrev = () =>{
    var sliderWrap = document.getElementById('sliderWrap')
    var css = getComputedStyle(sliderWrap);
    var left = parseInt(css.left, 10);
    var width = parseInt(css.width, 10);
    var newLeft = left + (width/3) + 17;
    if (left === 0) {
    } else {
      sliderWrap.style.left = newLeft+'px';
    }
  }


  render() {
    return (
      <div className="slider hero-slider">
        <span className="slideBtns" id="slideprev" onClick={this.slidePrev}></span>
        <span className="slideBtns" id="slidenext" onClick={this.slideNext}></span>
        <div id="sliderWrap">
          
          {
            this.state.news.length > 0 ? (
              <>
              {
                this.state.news.map(item =>(
                  <Slide data={item}/>
                ))
              }
              </>
            ) : (
              <>
              </>
            )
          }
          
        </div>
      </div>
    )
  }
}

export default Slider