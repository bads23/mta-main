import React, { Component } from 'react'
import pic1 from '../assets/img/ALGERIA.jpg'
import pic2 from '../assets/img/harambee.jpg'
var Carousel = require('react-responsive-carousel').Carousel;

class Slider extends Component {

  componentDidMount(){
    this.autoSlide();
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
          <div className="slides">
            <img src={pic1} alt="algeria_pic"/>
            <div className="caption">
              <a href="news/article1">
                <h1>
                  Africa cup of Nations 2019, CAIRO, EGYPT: The Champions Group “C”; A Kenyans’s Perspective.
                </h1>
              </a>
            </div>
          </div>

          <div className="slides">
            <img src={pic2} alt="harambee_pic"/>
            <div className="caption">
              <a href="news/article2">
                <h1>
                THE SPORTS ACT, NO. 25 OF 2013: REGISTRATION AND REGULATION OF SPORTS AND LICENCING; AN OVERVIEW
                </h1>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Slider