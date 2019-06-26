import React from 'react';
import Header from './app/common/header/header'
import Slider from './app/common/slider/sliderComponent'
import Media from './app/components/home/media'
import Clientele from './app/components/home/clients'

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Media />
      <Clientele />
    </>
  );
}

export default App;
