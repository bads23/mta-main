import React from 'react';
import Header from '../common/header/header'
import Slider from '../common/slider/sliderComponent'
import Media from './media'
import Clientele from './clients'
import Shop from './shop'
import Footer from '../common/header/footer'

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Media />
      <Clientele />
      <Shop />
      <Footer />
    </>
  );
}

export default Home;
